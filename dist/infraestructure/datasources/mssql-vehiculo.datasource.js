"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class VehiculoDatasourceImpl {
    createItem(createVehiculoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculo = yield mssql_1.prisma.vehiculo.create({
                data: createVehiculoDto,
            });
            return domain_1.VehiculoEntity.fromObject(vehiculo);
        });
    }
    getItems(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const vehiculos = yield mssql_1.prisma.vehiculo.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.vehiculo.count();
            const data = vehiculos.map((vehiculo) => domain_1.VehiculoEntity.fromObject(vehiculo));
            const res = {
                data,
                limit,
                next: page + 1,
                prev: page - 1,
                page,
                total,
            };
            return res;
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculo = yield mssql_1.prisma.vehiculo.findFirst({
                where: { IdVehiculo: id },
            });
            if (!vehiculo)
                throw domain_1.CustomError.notFound(`Vehiculo ${id} not found`);
            return domain_1.VehiculoEntity.fromObject(vehiculo);
        });
    }
    updateItem(updateVehiculoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(updateVehiculoDto.IdVehiculo);
            const updateVehiculo = yield mssql_1.prisma.vehiculo.update({
                where: { IdVehiculo: updateVehiculoDto.IdVehiculo },
                data: updateVehiculoDto.values,
            });
            return domain_1.VehiculoEntity.fromObject(updateVehiculo);
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(id);
            const deleteVehiculo = yield mssql_1.prisma.vehiculo.delete({
                where: { IdVehiculo: id },
            });
            return domain_1.VehiculoEntity.fromObject(deleteVehiculo);
        });
    }
}
exports.VehiculoDatasourceImpl = VehiculoDatasourceImpl;
