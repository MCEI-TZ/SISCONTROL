"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosAlumnosRepositoryImpl = void 0;
class AutosAlumnosRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createItem(createAutosAlumnosDto) {
        return this.datasource.createItem(createAutosAlumnosDto);
    }
    getItems(page, limit) {
        return this.datasource.getItems(page, limit);
    }
    getItemById(id) {
        return this.datasource.getItemById(id);
    }
    updateItem(updateAutosAlumnosDto) {
        return this.datasource.updateItem(updateAutosAlumnosDto);
    }
    deleteItem(id) {
        return this.datasource.deleteItem(id);
    }
}
exports.AutosAlumnosRepositoryImpl = AutosAlumnosRepositoryImpl;
