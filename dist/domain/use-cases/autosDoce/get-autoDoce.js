"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAutosDoce = void 0;
class GetAutosDoce {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getItemById(id);
    }
}
exports.GetAutosDoce = GetAutosDoce;
