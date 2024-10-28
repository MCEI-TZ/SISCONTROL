"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVehiculoDto = void 0;
class UpdateVehiculoDto {
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
    get values() {
        const returnObj = {};
        if (this.Marca)
            returnObj.Marca = this.Marca;
        if (this.Modelo)
            returnObj.Modelo = this.Modelo;
        if (this.Color)
            returnObj.Color = this.Color;
        if (this.Placas)
            returnObj.Placas = this.Placas;
        if (this.Anio)
            returnObj.Anio = this.Anio;
        if (this.idTipo)
            returnObj.idTipo = this.idTipo;
        if (this.IdDoce)
            returnObj.IdDoce = this.IdDoce;
        if (this.idVisitante)
            returnObj.idVisitante = this.idVisitante;
        if (this.NumControl)
            returnObj.NumControl = this.NumControl;
        return returnObj;
    }
    static create(props) {
        const { IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl, } = props;
        if (!IdVehiculo)
            return ["Missing IdVehiculo", undefined];
        if (!Marca)
            return ["Missing Marca", undefined];
        if (!Modelo)
            return ["Missing Modelo", undefined];
        if (!Color)
            return ["Missing Color", undefined];
        if (!Placas)
            return ["Missing Placas", undefined];
        if (!Anio)
            return ["Missing Anio", undefined];
        if (!idTipo)
            return ["Missing idTipo", undefined];
        return [
            undefined,
            new UpdateVehiculoDto(IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl),
        ];
    }
}
exports.UpdateVehiculoDto = UpdateVehiculoDto;
