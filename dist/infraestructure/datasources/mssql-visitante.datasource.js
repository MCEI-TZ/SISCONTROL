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
exports.VisitanteDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class VisitanteDatasourceImpl {
    createItem(createVisitanteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitante = yield mssql_1.prisma.visitante.create({
                data: createVisitanteDto,
            });
            return domain_1.VisitanteEntity.fromObject(visitante);
        });
    }
    getItems(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const visitantes = yield mssql_1.prisma.visitante.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.visitante.count();
            const data = visitantes.map((visitante) => domain_1.VisitanteEntity.fromObject(visitante));
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
            const visitante = yield mssql_1.prisma.visitante.findFirst({
                where: { idVisitante: id },
            });
            if (!visitante)
                throw domain_1.CustomError.notFound(`Visitante with id ${id} not found`);
            return domain_1.VisitanteEntity.fromObject(visitante);
        });
    }
    updateItem(updateVisitanteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(updateVisitanteDto.idVisitante);
            const updateVisitante = yield mssql_1.prisma.visitante.update({
                where: { idVisitante: updateVisitanteDto.idVisitante },
                data: updateVisitanteDto.values,
            });
            return domain_1.VisitanteEntity.fromObject(updateVisitante);
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(id);
            const deleteVisitante = yield mssql_1.prisma.visitante.delete({
                where: { idVisitante: id },
            });
            return domain_1.VisitanteEntity.fromObject(deleteVisitante);
        });
    }
}
exports.VisitanteDatasourceImpl = VisitanteDatasourceImpl;
