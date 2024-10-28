"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosVisitanteEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
//!-AutosVIsitante
class AutosVisitanteEntity {
    constructor(idVisitante, IdVehiculo) {
        this.idVisitante = idVisitante;
        this.IdVehiculo = IdVehiculo;
    }
    static fromObject(object) {
        const { idVisitante, IdVehiculo } = object;
        if (idVisitante == null)
            custom_error_1.CustomError.badRequest("Missing idVisitante");
        if (IdVehiculo == null)
            custom_error_1.CustomError.badRequest("Missing idVehiculo");
        return new AutosVisitanteEntity(idVisitante, IdVehiculo);
    }
}
exports.AutosVisitanteEntity = AutosVisitanteEntity;
