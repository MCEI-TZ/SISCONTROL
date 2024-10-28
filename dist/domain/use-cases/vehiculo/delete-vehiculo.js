"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVehiculo = void 0;
class DeleteVehiculo {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteItem(id);
    }
}
exports.DeleteVehiculo = DeleteVehiculo;
