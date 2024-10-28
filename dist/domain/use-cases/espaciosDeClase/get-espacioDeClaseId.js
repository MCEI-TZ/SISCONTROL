"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEspacioDeClaseId = void 0;
class GetEspacioDeClaseId {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getEspaciosDeClaseById(id);
    }
}
exports.GetEspacioDeClaseId = GetEspacioDeClaseId;
