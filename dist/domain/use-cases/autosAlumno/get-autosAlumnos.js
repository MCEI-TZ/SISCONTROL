"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAutosAlumnos = void 0;
class GetAutosAlumnos {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getItems(page, limit);
    }
}
exports.GetAutosAlumnos = GetAutosAlumnos;
