"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutosVisitante = void 0;
class CreateAutosVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createItem(dto);
    }
}
exports.CreateAutosVisitante = CreateAutosVisitante;
