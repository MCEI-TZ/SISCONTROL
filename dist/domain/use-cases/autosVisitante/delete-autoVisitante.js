"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAutosVisitante = void 0;
class DeleteAutosVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteItem(id);
    }
}
exports.DeleteAutosVisitante = DeleteAutosVisitante;
