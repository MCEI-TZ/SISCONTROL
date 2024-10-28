"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVisitante = void 0;
class DeleteVisitante {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteItem(id);
    }
}
exports.DeleteVisitante = DeleteVisitante;
