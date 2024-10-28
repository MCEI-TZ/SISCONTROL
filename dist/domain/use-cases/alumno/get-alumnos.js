"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlumnos = void 0;
class GetAlumnos {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getAlumnos(page, limit);
    }
}
exports.GetAlumnos = GetAlumnos;
