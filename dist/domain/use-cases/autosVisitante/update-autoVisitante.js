"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutosVisitante = void 0;
class UpdateAutosVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateItem(dto);
    }
}
exports.UpdateAutosVisitante = UpdateAutosVisitante;
