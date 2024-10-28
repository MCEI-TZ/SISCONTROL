"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEspacioDeClase = void 0;
class DeleteEspacioDeClase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteEspacioDeClase(id);
    }
}
exports.DeleteEspacioDeClase = DeleteEspacioDeClase;
