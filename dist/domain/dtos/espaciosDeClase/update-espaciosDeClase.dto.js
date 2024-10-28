"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEspaciosDeClaseDto = void 0;
class UpdateEspaciosDeClaseDto {
    constructor(Id, Nombre, Abreviatura, Capacidad, IdSituacion) {
        this.Id = Id;
        this.Nombre = Nombre;
        this.Abreviatura = Abreviatura;
        this.Capacidad = Capacidad;
        this.IdSituacion = IdSituacion;
    }
    get values() {
        const returnObj = {};
        if (this.Nombre)
            returnObj.Nombre = this.Nombre;
        if (this.Abreviatura)
            returnObj.Abreviatura = this.Abreviatura;
        if (this.Capacidad)
            returnObj.Capacidad = this.Capacidad;
        if (this.IdSituacion)
            returnObj.IdSituacion = this.IdSituacion;
        return returnObj;
    }
    static create(props) {
        const { Id, Nombre, Abreviatura, Capacidad, IdSituacion } = props;
        if (!Id)
            return ["Missing id", undefined];
        if (!Nombre)
            return ["Missing nombre", undefined];
        if (!Abreviatura)
            return ["Missing abreviatura", undefined];
        if (!Capacidad)
            return ["Missing capacidad", undefined];
        if (!IdSituacion)
            return ["Missing IdSituacion", undefined];
        return [
            undefined,
            new UpdateEspaciosDeClaseDto(Id, Nombre, Abreviatura, Capacidad, IdSituacion),
        ];
    }
}
exports.UpdateEspaciosDeClaseDto = UpdateEspaciosDeClaseDto;
