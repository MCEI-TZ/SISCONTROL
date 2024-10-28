"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAutosAlumno = void 0;
class GetAutosAlumno {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getItemById(id);
    }
}
exports.GetAutosAlumno = GetAutosAlumno;
