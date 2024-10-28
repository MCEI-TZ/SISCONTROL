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
exports.EspaciosDeClaseDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class EspaciosDeClaseDatasourceImpl {
    createEspacioDeClase(createEspacioDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const espacioDeClase = yield mssql_1.prisma.espaciosDeClase.create({
                data: createEspacioDto,
            });
            return domain_1.EspaciosDeClaseEntity.fromObject(espacioDeClase);
        });
    }
    getEspaciosDeClases(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const espaciosClases = yield mssql_1.prisma.espaciosDeClase.findMany({
                orderBy: {
                    Id: "desc"
                },
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.espaciosDeClase.count();
            const data = espaciosClases.map((espacio) => domain_1.EspaciosDeClaseEntity.fromObject(espacio));
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
    getEspacioDeClaseByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const espacioClase = yield mssql_1.prisma.espaciosDeClase.findFirst({
                where: { Abreviatura: name },
            });
            if (!espacioClase)
                throw domain_1.CustomError.notFound(`EspaciosDeClase with Name ${name} not found`);
            return domain_1.EspaciosDeClaseEntity.fromObject(espacioClase);
        });
    }
    updateEspacioDeClase(updateEspacioDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEspaciosDeClaseById(updateEspacioDto.Id);
            const updateEspacioDeClase = yield mssql_1.prisma.espaciosDeClase.update({
                where: { Id: updateEspacioDto.Id },
                data: updateEspacioDto.values,
            });
            return domain_1.EspaciosDeClaseEntity.fromObject(updateEspacioDeClase);
        });
    }
    deleteEspacioDeClase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEspaciosDeClaseById(id);
            const deleteEspacioClase = yield mssql_1.prisma.espaciosDeClase.delete({
                where: { Id: id },
            });
            return domain_1.EspaciosDeClaseEntity.fromObject(deleteEspacioClase);
        });
    }
    getEspaciosDeClaseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const espacioClase = yield mssql_1.prisma.espaciosDeClase.findFirst({
                where: { Id: id },
            });
            if (!espacioClase)
                throw domain_1.CustomError.notFound(`EspaciosDeClase with Id ${id} not found`);
            return domain_1.EspaciosDeClaseEntity.fromObject(espacioClase);
        });
    }
}
exports.EspaciosDeClaseDatasourceImpl = EspaciosDeClaseDatasourceImpl;
