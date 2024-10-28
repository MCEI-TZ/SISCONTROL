"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarreraRepositoryImpl = void 0;
class CarreraRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    getCarreras(page, limit) {
        return this.datasource.getCarreras(page, limit);
    }
    getCarreraId(id) {
        return this.datasource.getCarreraId(id);
    }
}
exports.CarreraRepositoryImpl = CarreraRepositoryImpl;
