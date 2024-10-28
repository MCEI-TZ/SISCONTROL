"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEspaciosDeClase = void 0;
class UpdateEspaciosDeClase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateEspacioDeClase(dto);
    }
}
exports.UpdateEspaciosDeClase = UpdateEspaciosDeClase;
