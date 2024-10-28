"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutoDoce = void 0;
class UpdateAutoDoce {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateItem(dto);
    }
}
exports.UpdateAutoDoce = UpdateAutoDoce;
