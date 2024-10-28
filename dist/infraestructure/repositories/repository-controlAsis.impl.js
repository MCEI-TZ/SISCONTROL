"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlAsisRepositoryImpl = void 0;
class ControlAsisRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    asitenciaItem(asistencia) {
        return this.datasource.asitenciaItem(asistencia);
    }
    getItems(page, limit) {
        return this.datasource.getItems(page, limit);
    }
    getItemById(id, page, limit) {
        return this.datasource.getItemById(id, page, limit);
    }
    deleteItem(id) {
        return this.datasource.deleteItem(id);
    }
    getAlumnoReport(NumControl, fechaInicio, fechaFin) {
        return this.datasource.getAlumnoReport(NumControl, fechaInicio, fechaFin);
    }
}
exports.ControlAsisRepositoryImpl = ControlAsisRepositoryImpl;
