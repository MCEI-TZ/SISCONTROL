"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciaControlAsis = void 0;
class AsistenciaControlAsis {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.asitenciaItem(dto);
    }
}
exports.AsistenciaControlAsis = AsistenciaControlAsis;
