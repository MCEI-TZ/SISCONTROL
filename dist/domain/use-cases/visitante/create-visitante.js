"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisitante = void 0;
class CreateVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createItem(dto);
    }
}
exports.CreateVisitante = CreateVisitante;
