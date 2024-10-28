"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEspacioDto = void 0;
class CreateEspacioDto {
    constructor(Nombre, Abreviatura, Capacidad, IdSituacion) {
        this.Nombre = Nombre;
        this.Abreviatura = Abreviatura;
        this.Capacidad = Capacidad;
        this.IdSituacion = IdSituacion;
    }
    static create(props) {
        const { Nombre, Abreviatura, Capacidad, IdSituacion } = props;
        if (Nombre == null)
            return ["Missing nombre", undefined];
        if (Abreviatura == null)
            return ["Missing abreviatura", undefined];
        if (Capacidad == null)
            return ["Missing capacidad", undefined];
        if (IdSituacion == null)
            return ["Missing IdSituacion", undefined];
        return [
            undefined,
            new CreateEspacioDto(Nombre, Abreviatura, Capacidad, IdSituacion),
        ];
    }
}
exports.CreateEspacioDto = CreateEspacioDto;
