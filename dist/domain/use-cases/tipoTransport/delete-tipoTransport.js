"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTipoTransport = void 0;
class DeleteTipoTransport {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteTipoTransporte(id);
    }
}
exports.DeleteTipoTransport = DeleteTipoTransport;
