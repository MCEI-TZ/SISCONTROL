"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVehiculos = void 0;
class GetVehiculos {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getItems(page, limit);
    }
}
exports.GetVehiculos = GetVehiculos;
