"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoRepositoryImpl = void 0;
class DepartamentoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    getDepartamentos(page, limit) {
        return this.datasource.getDepartamentos(page, limit);
    }
    getDepartamentoId(id) {
        return this.datasource.getDepartamentoId(id);
    }
}
exports.DepartamentoRepositoryImpl = DepartamentoRepositoryImpl;
