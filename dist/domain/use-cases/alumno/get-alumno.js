"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlumno = void 0;
class GetAlumno {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getAlumnoId(id);
    }
}
exports.GetAlumno = GetAlumno;
