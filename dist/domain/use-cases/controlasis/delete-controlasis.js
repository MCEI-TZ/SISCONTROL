"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteControlAsis = void 0;
class DeleteControlAsis {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteItem(id);
    }
}
exports.DeleteControlAsis = DeleteControlAsis;
