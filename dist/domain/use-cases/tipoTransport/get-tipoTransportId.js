"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTipoTransportId = void 0;
class GetTipoTransportId {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getTipoTransporteById(id);
    }
}
exports.GetTipoTransportId = GetTipoTransportId;
