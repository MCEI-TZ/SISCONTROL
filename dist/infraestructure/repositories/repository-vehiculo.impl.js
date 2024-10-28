"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoRepositoryImpl = void 0;
class VehiculoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createItem(createVehiculoDto) {
        return this.datasource.createItem(createVehiculoDto);
    }
    getItems(page, limit) {
        return this.datasource.getItems(page, limit);
    }
    getItemById(id) {
        return this.datasource.getItemById(id);
    }
    updateItem(updateVehiculoDto) {
        return this.datasource.updateItem(updateVehiculoDto);
    }
    deleteItem(id) {
        return this.datasource.deleteItem(id);
    }
}
exports.VehiculoRepositoryImpl = VehiculoRepositoryImpl;
