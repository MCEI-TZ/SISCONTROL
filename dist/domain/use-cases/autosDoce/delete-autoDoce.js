"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAutosDoce = void 0;
class DeleteAutosDoce {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteItem(id);
    }
}
exports.DeleteAutosDoce = DeleteAutosDoce;
