"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitanteRepositoryImpl = void 0;
class VisitanteRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createItem(createVisitanteDto) {
        return this.datasource.createItem(createVisitanteDto);
    }
    getItems(page, limit) {
        return this.datasource.getItems(page, limit);
    }
    getItemById(id) {
        return this.datasource.getItemById(id);
    }
    updateItem(updateVisitanteDto) {
        return this.datasource.updateItem(updateVisitanteDto);
    }
    deleteItem(id) {
        return this.datasource.deleteItem(id);
    }
}
exports.VisitanteRepositoryImpl = VisitanteRepositoryImpl;
