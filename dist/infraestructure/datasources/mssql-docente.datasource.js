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
exports.DocenteDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class DocenteDatasourceImpl {
    getDocentes(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const docentes = yield mssql_1.prisma.docente.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.docente.count();
            const data = docentes.map((docente) => domain_1.DocenteEntity.fromObject(docente));
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
    getDocenteId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const docente = yield mssql_1.prisma.docente.findFirst({
                where: { NumNomina: id },
            });
            if (!docente)
                throw domain_1.CustomError.notFound(`Docente with id ${id} not found`);
            return domain_1.DocenteEntity.fromObject(docente);
        });
    }
}
exports.DocenteDatasourceImpl = DocenteDatasourceImpl;
