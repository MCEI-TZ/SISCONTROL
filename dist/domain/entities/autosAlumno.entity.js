"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosAlumnosEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
//!-AutosAlumnos
class AutosAlumnosEntity {
    constructor(NumControl, IdVehiculo) {
        this.NumControl = NumControl;
        this.IdVehiculo = IdVehiculo;
    }
    static fromObject(object) {
        const { NumControl, IdVehiculo } = object;
        if (NumControl == null)
            custom_error_1.CustomError.badRequest("Missing NumControl");
        if (IdVehiculo == null)
            custom_error_1.CustomError.badRequest("Missing IdVehiculo");
        return new AutosAlumnosEntity(NumControl, IdVehiculo);
    }
}
exports.AutosAlumnosEntity = AutosAlumnosEntity;
