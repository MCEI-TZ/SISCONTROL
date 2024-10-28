"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTipoTransp = void 0;
class CreateTipoTransp {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createTipoTransporte(dto);
    }
}
exports.CreateTipoTransp = CreateTipoTransp;
