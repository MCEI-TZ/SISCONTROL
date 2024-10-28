"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutosAlumno = void 0;
class UpdateAutosAlumno {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateItem(dto);
    }
}
exports.UpdateAutosAlumno = UpdateAutosAlumno;
