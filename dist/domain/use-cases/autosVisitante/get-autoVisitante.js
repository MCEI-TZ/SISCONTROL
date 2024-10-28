"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAutoVisitante = void 0;
class GetAutoVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getItemById(id);
    }
}
exports.GetAutoVisitante = GetAutoVisitante;
