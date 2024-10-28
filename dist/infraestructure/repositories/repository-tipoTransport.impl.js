"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransportReporsitoryImpl = void 0;
class TipoTransportReporsitoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    createTipoTransporte(createTipoPersonaDto) {
        return this.datasource.createTipoTransporte(createTipoPersonaDto);
    }
    getTiposTransportes(page, limit) {
        return this.datasource.getTiposTransportes(page, limit);
    }
    getTipoTransporteByName(name) {
        return this.datasource.getTipoTransporteByName(name);
    }
    updateTipoTransporte(updateTipoPersonaDto) {
        return this.datasource.updateTipoTransporte(updateTipoPersonaDto);
    }
    deleteTipoTransporte(id) {
        return this.datasource.deleteTipoTransporte(id);
    }
    getTipoTransporteById(id) {
        return this.datasource.getTipoTransporteById(id);
    }
}
exports.TipoTransportReporsitoryImpl = TipoTransportReporsitoryImpl;
