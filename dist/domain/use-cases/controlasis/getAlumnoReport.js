"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlumnoReport = void 0;
class GetAlumnoReport {
    constructor(repository) {
        this.repository = repository;
    }
    execute(NumControl, fechaInicio, fechaFin) {
        return this.repository.getAlumnoReport(NumControl, fechaInicio, fechaFin);
    }
}
exports.GetAlumnoReport = GetAlumnoReport;
