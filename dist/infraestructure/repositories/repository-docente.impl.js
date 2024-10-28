"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteRepositoryImpl = void 0;
class DocenteRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    getDocentes(page, limit) {
        return this.datasource.getDocentes(page, limit);
    }
    getDocenteId(id) {
        return this.datasource.getDocenteId(id);
    }
}
exports.DocenteRepositoryImpl = DocenteRepositoryImpl;
