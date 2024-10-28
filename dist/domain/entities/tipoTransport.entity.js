"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransportEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class TipoTransportEntity {
    constructor(IdTpTransp, Nombre) {
        this.IdTpTransp = IdTpTransp;
        this.Nombre = Nombre;
    }
    static fromObject(object) {
        const { IdTpTransp, Nombre } = object;
        if (Nombre == null)
            custom_error_1.CustomError.badRequest("Missing Nombre");
        return new TipoTransportEntity(IdTpTransp, Nombre);
    }
}
exports.TipoTransportEntity = TipoTransportEntity;
