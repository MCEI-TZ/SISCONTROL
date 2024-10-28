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
exports.AutosDoceDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class AutosDoceDatasourceImpl {
    createItem(createAutosDoceDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const autoDoce = yield mssql_1.prisma.autosDoce.create({
                data: createAutosDoceDto,
            });
            return domain_1.AutosDoceEntity.fromObject(autoDoce);
        });
    }
    getItems(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const autosDoces = yield mssql_1.prisma.autosDoce.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.autosDoce.count();
            const data = autosDoces.map((autoDoce) => domain_1.AutosDoceEntity.fromObject(autoDoce));
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
            const autoDoce = yield mssql_1.prisma.autosDoce.findFirst({
                where: { IdVehiculo: id },
            });
            if (!autoDoce)
                throw domain_1.CustomError.notFound(`AutoDoce with id ${id} not found`);
            return domain_1.AutosDoceEntity.fromObject(autoDoce);
        });
    }
    //   todo: falta implementar correctamente
    updateItem(updateAutosDoceDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(updateAutosDoceDto.IdVehiculo);
            const updateAutosDoce = yield mssql_1.prisma.autosDoce.update({
                where: { IdDoce_IdVehiculo: updateAutosDoceDto },
                data: updateAutosDoceDto.values,
            });
            return domain_1.AutosDoceEntity.fromObject(updateAutosDoce);
        });
    }
    // todo: Falta implementar correctamente
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(id);
            const deleteAutosDoce = yield mssql_1.prisma.autosDoce.delete({
                where: { IdDoce_IdVehiculo: undefined },
            });
            return domain_1.AutosDoceEntity.fromObject(deleteAutosDoce);
        });
    }
}
exports.AutosDoceDatasourceImpl = AutosDoceDatasourceImpl;
