"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDepartamento = void 0;
class GetDepartamento {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getDepartamentoId(id);
    }
}
exports.GetDepartamento = GetDepartamento;
