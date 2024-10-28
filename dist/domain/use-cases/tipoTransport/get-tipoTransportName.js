"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTipoTransportName = void 0;
class GetTipoTransportName {
    constructor(repository) {
        this.repository = repository;
    }
    execute(name) {
        return this.repository.getTipoTransporteByName(name);
    }
}
exports.GetTipoTransportName = GetTipoTransportName;
