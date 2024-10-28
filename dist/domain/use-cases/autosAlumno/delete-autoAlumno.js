"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAutosAlumno = void 0;
class DeleteAutosAlumno {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteItem(id);
    }
}
exports.DeleteAutosAlumno = DeleteAutosAlumno;
