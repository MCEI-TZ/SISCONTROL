"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTiposTransports = void 0;
class GetTiposTransports {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getTiposTransportes(page, limit);
    }
}
exports.GetTiposTransports = GetTiposTransports;
