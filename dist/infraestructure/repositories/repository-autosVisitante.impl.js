"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosVisitanteRepositoryImpl = void 0;
class AutosVisitanteRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createItem(createAutosVisitanteDto) {
        return this.datasource.createItem(createAutosVisitanteDto);
    }
    getItems(page, limit) {
        return this.datasource.getItems(page, limit);
    }
    getItemById(id) {
        return this.datasource.getItemById(id);
    }
    updateItem(updateAutosVisitanteDto) {
        return this.datasource.updateItem(updateAutosVisitanteDto);
    }
    deleteItem(id) {
        return this.datasource.deleteItem(id);
    }
}
exports.AutosVisitanteRepositoryImpl = AutosVisitanteRepositoryImpl;
