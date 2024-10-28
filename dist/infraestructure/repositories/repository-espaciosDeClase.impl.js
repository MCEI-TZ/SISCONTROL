"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspaciosDeClaseRepositoryImpl = void 0;
class EspaciosDeClaseRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createEspacioDeClase(createEspacioDto) {
        return this.datasource.createEspacioDeClase(createEspacioDto);
    }
    getEspaciosDeClases(page, limit) {
        return this.datasource.getEspaciosDeClases(page, limit);
    }
    getEspacioDeClaseByName(name) {
        return this.datasource.getEspacioDeClaseByName(name);
    }
    updateEspacioDeClase(updateEspacioDto) {
        return this.datasource.updateEspacioDeClase(updateEspacioDto);
    }
    deleteEspacioDeClase(id) {
        return this.datasource.deleteEspacioDeClase(id);
    }
    getEspaciosDeClaseById(id) {
        return this.datasource.getEspaciosDeClaseById(id);
    }
}
exports.EspaciosDeClaseRepositoryImpl = EspaciosDeClaseRepositoryImpl;
