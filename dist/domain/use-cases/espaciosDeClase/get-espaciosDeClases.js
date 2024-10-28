"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEspaciosDeClase = void 0;
class GetEspaciosDeClase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getEspaciosDeClases(page, limit);
    }
}
exports.GetEspaciosDeClase = GetEspaciosDeClase;
