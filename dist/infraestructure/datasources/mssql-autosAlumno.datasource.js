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
exports.AutosAlumnoDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class AutosAlumnoDatasourceImpl {
    createItem(createAutosAlumnoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const autoAumno = yield mssql_1.prisma.autosAlumnos.create({
                data: createAutosAlumnoDto,
            });
            return domain_1.AutosAlumnosEntity.fromObject(autoAumno);
        });
    }
    getItems(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const autosAlumnos = yield mssql_1.prisma.autosAlumnos.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.autosAlumnos.count();
            const data = autosAlumnos.map((autoAlumno) => domain_1.AutosAlumnosEntity.fromObject(autoAlumno));
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
            const autoAlumno = yield mssql_1.prisma.autosAlumnos.findFirst({
                where: { NumControl: id },
            });
            if (!autoAlumno)
                throw domain_1.CustomError.notFound(`AutoAlumno with id ${id} not found`);
            return domain_1.AutosAlumnosEntity.fromObject(autoAlumno);
        });
    }
    updateItem(updateAutoAlumnoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(updateAutoAlumnoDto.IdVehiculo);
            const updateAutoAlumno = yield mssql_1.prisma.autosAlumnos.update({
                where: {
                    NumControl_IdVehiculo: updateAutoAlumnoDto,
                },
                data: updateAutoAlumnoDto.values,
            });
            return domain_1.AutosAlumnosEntity.fromObject(updateAutoAlumno);
        });
    }
    //   todo: Falta implementar correctamente
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getItemById(id);
            const deleteAutoAlumno = yield mssql_1.prisma.autosAlumnos.delete({
                where: { NumControl_IdVehiculo: undefined },
            });
            return domain_1.AutosAlumnosEntity.fromObject(deleteAutoAlumno);
        });
    }
}
exports.AutosAlumnoDatasourceImpl = AutosAlumnoDatasourceImpl;
