"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosDoceEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
//!-AutosDoce
class AutosDoceEntity {
    constructor(IdDoce, IdVehiculo) {
        this.IdDoce = IdDoce;
        this.IdVehiculo = IdVehiculo;
    }
    static fromObject(object) {
        const { IdDoce, IdVehiculo } = object;
        if (IdDoce == null)
            custom_error_1.CustomError.badRequest("Missing IdDoce.");
        if (IdVehiculo == null)
            custom_error_1.CustomError.badRequest("Missing IdVehiculo.");
        return new AutosDoceEntity(IdDoce, IdVehiculo);
    }
}
exports.AutosDoceEntity = AutosDoceEntity;
