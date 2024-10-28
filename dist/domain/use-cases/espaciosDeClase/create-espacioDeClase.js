"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEspacioDeClase = void 0;
class CreateEspacioDeClase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createEspacioDeClase(dto);
    }
}
exports.CreateEspacioDeClase = CreateEspacioDeClase;
