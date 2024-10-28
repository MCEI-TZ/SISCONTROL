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
exports.AutosVisitanteDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class AutosVisitanteDatasourceImpl {
    createItem(createAutoVisitanteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const autoVisitante = yield mssql_1.prisma.autosVisitante.create({
                data: createAutoVisitanteDto,
            });
            return domain_1.AutosVisitanteEntity.fromObject(autoVisitante);
        });
    }
    getItems(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const autosVisitantes = yield mssql_1.prisma.autosVisitante.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.autosVisitante.count();
            const data = autosVisitantes.map((autoVisitante) => domain_1.AutosVisitanteEntity.fromObject(autoVisitante));
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
    //   todo: Falta implementar correctamente
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const autoVisitante = yield mssql_1.prisma.autosVisitante.findFirst({
                where: { idVisitante: id },
            });
            if (!autoVisitante)
                throw domain_1.CustomError.notFound(`AutoVisitante with id ${id} not found`);
            return domain_1.AutosVisitanteEntity.fromObject(autoVisitante);
        });
    }
    //   todo: Falta implementar correctamente
    updateItem(updateAutosVisitanteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(updateAutosVisitanteDto.idVisitante);
            const updateAutosVistante = yield mssql_1.prisma.autosVisitante.update({
                where: { idVisitante_IdVehiculo: updateAutosVisitanteDto },
                data: updateAutosVisitanteDto.values,
            });
            return domain_1.AutosVisitanteEntity.fromObject(updateAutosVistante);
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(id);
            const deleteAutoVisitante = yield mssql_1.prisma.autosVisitante.delete({
                where: { idVisitante_IdVehiculo: undefined },
            });
            return domain_1.AutosVisitanteEntity.fromObject(deleteAutoVisitante);
        });
    }
}
exports.AutosVisitanteDatasourceImpl = AutosVisitanteDatasourceImpl;
