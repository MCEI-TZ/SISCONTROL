"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehiculoDto = void 0;
class CreateVehiculoDto {
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
    static create(props) {
        const { IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl, } = props;
        if (IdVehiculo == null)
            return ["Missing IdVehiculo", undefined];
        if (Marca == null)
            return ["Missing Marca", undefined];
        if (Modelo == null)
            return ["Missing Modelo", undefined];
        if (Color == null)
            return ["Missing Color", undefined];
        if (Placas == null)
            return ["Missing Placas", undefined];
        if (Anio == null)
            return ["Missing Anio", undefined];
        if (idTipo == null)
            return ["Missing idTipo", undefined];
        return [
            undefined,
            new CreateVehiculoDto(IdVehiculo, Marca, Modelo, Color, Placas, Anio, idTipo, IdDoce, idVisitante, NumControl),
        ];
    }
}
exports.CreateVehiculoDto = CreateVehiculoDto;
