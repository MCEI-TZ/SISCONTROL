"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosDoceRepositoryimpl = void 0;
class AutosDoceRepositoryimpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createItem(createAutosDoceDto) {
        return this.datasource.createItem(createAutosDoceDto);
    }
    getItems(page, limit) {
        return this.datasource.getItems(page, limit);
    }
    getItemById(id) {
        return this.datasource.getItemById(id);
    }
    updateItem(updateAutosDoceDto) {
        return this.datasource.updateItem(updateAutosDoceDto);
    }
    deleteItem(id) {
        return this.datasource.deleteItem(id);
    }
}
exports.AutosDoceRepositoryimpl = AutosDoceRepositoryimpl;
