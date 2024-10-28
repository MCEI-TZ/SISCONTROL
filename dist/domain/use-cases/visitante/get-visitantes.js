"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVisitantes = void 0;
class GetVisitantes {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getItems(page, limit);
    }
}
exports.GetVisitantes = GetVisitantes;
