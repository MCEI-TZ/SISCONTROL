"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEspacioDeClaseName = void 0;
class GetEspacioDeClaseName {
    constructor(repository) {
        this.repository = repository;
    }
    execute(name) {
        return this.repository.getEspacioDeClaseByName(name);
    }
}
exports.GetEspacioDeClaseName = GetEspacioDeClaseName;
