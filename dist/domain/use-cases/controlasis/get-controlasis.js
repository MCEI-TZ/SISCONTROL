"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetControlAsis = void 0;
class GetControlAsis {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id, page, limit) {
        return this.repository.getItemById(id, page, limit);
    }
}
exports.GetControlAsis = GetControlAsis;
