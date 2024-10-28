"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoRepositoryImpl = void 0;
class AlumnoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    getAlumnos(page, limit) {
        return this.datasource.getAlumnos(page, limit);
    }
    getAlumnoId(id) {
        return this.datasource.getAlumnoId(id);
    }
}
exports.AlumnoRepositoryImpl = AlumnoRepositoryImpl;
