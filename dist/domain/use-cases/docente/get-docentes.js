"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDocentes = void 0;
class GetDocentes {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getDocentes(page, limit);
    }
}
exports.GetDocentes = GetDocentes;
