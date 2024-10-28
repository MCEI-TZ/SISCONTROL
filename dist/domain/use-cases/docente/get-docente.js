"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDocente = void 0;
class GetDocente {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getDocenteId(id);
    }
}
exports.GetDocente = GetDocente;
