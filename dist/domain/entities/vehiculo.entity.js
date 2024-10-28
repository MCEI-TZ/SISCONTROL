"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class VehiculoEntity {
    constructor(IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl) {
        this.IdVehiculo = IdVehiculo;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Color = Color;
        this.Placas = Placas;
        this.Anio = Anio;
        this.idTipo = idTipo;
        this.IdDoce = IdDoce;
        this.idVisitante = idVisitante;
        this.NumControl = NumControl;
    }
    static fromObject(object) {
        const { IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl, } = object;
        if (IdVehiculo == null)
            custom_error_1.CustomError.badRequest("Missing IdVehiculo");
        if (Marca == null)
            custom_error_1.CustomError.badRequest("Missing Marca");
        if (Modelo == null)
            custom_error_1.CustomError.badRequest("Missing Modelo");
        if (Color == null)
            custom_error_1.CustomError.badRequest("Missing Color");
        if (Placas == null)
            custom_error_1.CustomError.badRequest("Missing Placas");
        if (Anio == null)
            custom_error_1.CustomError.badRequest("Missing Anio");
        if (idTipo == null)
            custom_error_1.CustomError.badRequest("Missing IdTipo");
        return new VehiculoEntity(IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl);
    }
}
exports.VehiculoEntity = VehiculoEntity;
