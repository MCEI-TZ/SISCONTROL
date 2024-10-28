"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutosDoce = void 0;
class CreateAutosDoce {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createItem(dto);
    }
}
exports.CreateAutosDoce = CreateAutosDoce;
