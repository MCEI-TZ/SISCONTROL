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
exports.ControlAsisDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class ControlAsisDatasourceImpl {
    asitenciaItem(asistenciaControlAsisDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const AlumnoAsis = yield mssql_1.prisma.controlAsis.findFirst({
                where: {
                    NumControl: asistenciaControlAsisDto.NumControl,
                    HoraSalida: null,
                    IdEspacio: asistenciaControlAsisDto.IdEspacio,
                },
            });
            if (AlumnoAsis == null) {
                const controlAsis = yield mssql_1.prisma.controlAsis.create({
                    data: Object.assign(Object.assign({}, asistenciaControlAsisDto), { HoraEntrada: new Date() }),
                });
                return domain_1.ControlAsisEntity.fromObject(controlAsis);
            }
            else {
                const controlAsis = yield mssql_1.prisma.controlAsis.update({
                    where: {
                        IdControlAsis: AlumnoAsis.IdControlAsis,
                        NumControl: AlumnoAsis.NumControl,
                        idTipo: AlumnoAsis.idTipo,
                        IdEspacio: AlumnoAsis.IdEspacio,
                    },
                    data: Object.assign(Object.assign({}, asistenciaControlAsisDto.values), { HoraSalida: new Date() }),
                });
                return domain_1.ControlAsisEntity.fromObject(controlAsis);
            }
        });
    }
    getItems(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const controlsAsis = yield mssql_1.prisma.controlAsis.findMany({
                orderBy: {
                    IdControlAsis: "desc",
                },
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.controlAsis.count();
            const data = controlsAsis.map((control) => domain_1.ControlAsisEntity.fromObject(control));
            const res = {
                data: data,
                limit: limit,
                next: page + 1,
                prev: page - 1,
                page,
                total,
            };
            return res;
        });
    }
    getItemById(id, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const controlsAsis = yield mssql_1.prisma.controlAsis.findMany({
                orderBy: {
                    IdControlAsis: "desc",
                },
                skip,
                take: limit,
                where: { NumControl: id },
            });
            const total = yield mssql_1.prisma.controlAsis.count();
            const data = controlsAsis.map((control) => domain_1.ControlAsisEntity.fromObject(control));
            const res = {
                data: data,
                limit: limit,
                next: page + 1,
                prev: page - 1,
                page,
                total,
            };
            return res;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteControlAsis = yield mssql_1.prisma.controlAsis.delete({
                where: { IdControlAsis: id },
            });
            return domain_1.ControlAsisEntity.fromObject(deleteControlAsis);
        });
    }
    getAlumnoReport(NumControl, fechaInicio, fechaFin) {
        return __awaiter(this, void 0, void 0, function* () {
            const AlumnoNumControl = yield mssql_1.prisma.controlAsis.findMany({
                where: {
                    NumControl: NumControl,
                    HoraEntrada: { gte: fechaInicio, lte: fechaFin },
                },
            });
            return AlumnoNumControl.map((alumno) => domain_1.ControlAsisEntity.fromObject(alumno));
        });
    }
}
exports.ControlAsisDatasourceImpl = ControlAsisDatasourceImpl;
