"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCarrera = void 0;
class GetCarrera {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getCarreraId(id);
    }
}
exports.GetCarrera = GetCarrera;
