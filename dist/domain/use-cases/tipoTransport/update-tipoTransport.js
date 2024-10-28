"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoTransport = void 0;
class UpdateTipoTransport {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateTipoTransporte(dto);
    }
}
exports.UpdateTipoTransport = UpdateTipoTransport;
