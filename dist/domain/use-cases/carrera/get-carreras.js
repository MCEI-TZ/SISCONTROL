"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCarreas = void 0;
class GetCarreas {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getCarreras(page, limit);
    }
}
exports.GetCarreas = GetCarreas;
