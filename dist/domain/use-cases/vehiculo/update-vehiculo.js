"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVehiculo = void 0;
class UpdateVehiculo {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateItem(dto);
    }
}
exports.UpdateVehiculo = UpdateVehiculo;
