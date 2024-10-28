"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAutosVisitante = void 0;
class GetAutosVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getItems(page, limit);
    }
}
exports.GetAutosVisitante = GetAutosVisitante;
