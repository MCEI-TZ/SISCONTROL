"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetControlsAsis = void 0;
class GetControlsAsis {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getItems(page, limit);
    }
}
exports.GetControlsAsis = GetControlsAsis;
