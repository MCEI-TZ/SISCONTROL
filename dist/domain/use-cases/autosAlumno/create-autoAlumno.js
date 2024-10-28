"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutosAlumno = void 0;
class CreateAutosAlumno {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createItem(dto);
    }
}
exports.CreateAutosAlumno = CreateAutosAlumno;
