"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVehiculo = void 0;
class GetVehiculo {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getItemById(id);
    }
}
exports.GetVehiculo = GetVehiculo;
