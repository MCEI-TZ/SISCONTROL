"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVisitante = void 0;
class GetVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getItemById(id);
    }
}
exports.GetVisitante = GetVisitante;
