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
exports.CarreraDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class CarreraDatasourceImpl {
    getCarreras(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const carreras = yield mssql_1.prisma.carrera.findMany({
                skip: skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.carrera.count();
            const data = carreras.map((carrera) => domain_1.CarreraEntity.fromObject(carrera));
            const res = {
                data: data,
                limit: limit,
                next: page + 1,
                prev: page - 1,
                page: page,
                total: total,
            };
            return res;
        });
    }
    getCarreraId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumno = yield mssql_1.prisma.carrera.findFirst({
                where: { IdCarre: id },
            });
            if (!alumno)
                throw domain_1.CustomError.notFound(`Todo with id ${id} not found`);
            return domain_1.CarreraEntity.fromObject(alumno);
        });
    }
}
exports.CarreraDatasourceImpl = CarreraDatasourceImpl;
