"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehiculo = void 0;
class CreateVehiculo {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.createItem(dto);
    }
}
exports.CreateVehiculo = CreateVehiculo;
