"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitante = void 0;
class UpdateVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateItem(dto);
    }
}
exports.UpdateVisitante = UpdateVisitante;
