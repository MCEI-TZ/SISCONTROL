"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitanteDto = void 0;
class UpdateVisitanteDto {
    constructor(idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono) {
        this.idVisitante = idVisitante;
        this.Nombre = Nombre;
        this.Ape_Mat = Ape_Mat;
        this.Ape_Pa = Ape_Pa;
        this.IdAsunto = IdAsunto;
        this.Genero = Genero;
        this.FechaNacimiento = FechaNacimiento;
        this.Direccion = Direccion;
        this.Email = Email;
        this.Telefono = Telefono;
    }
    get values() {
        const returnObj = {};
        if (this.Nombre)
            returnObj.Nombre = this.Nombre;
        if (this.Ape_Mat)
            returnObj.Ape_Mat = this.Ape_Mat;
        if (this.Ape_Pa)
            returnObj.Ape_Pa = this.Ape_Pa;
        if (this.IdAsunto)
            returnObj.IdAsunto = this.IdAsunto;
        if (this.Genero)
            returnObj.Genero = this.Genero;
        if (this.FechaNacimiento)
            returnObj.FechaNacimiento = this.FechaNacimiento;
        if (this.Direccion)
            returnObj.Direccion = this.Direccion;
        if (this.Email)
            returnObj.Email = this.Email;
        if (this.Telefono)
            returnObj.Telefono = this.Telefono;
        return returnObj;
    }
    static create(props) {
        const { idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono, } = props;
        if (!idVisitante)
            return ["Missing idVisitante", undefined];
        if (!Nombre)
            return ["Missing Nombre", undefined];
        if (!Ape_Mat)
            return ["Missing Ape_Mat", undefined];
        if (!Ape_Pa)
            return ["Missing Ape_Pa", undefined];
        if (!IdAsunto)
            return ["Missing IdAsunto", undefined];
        if (!Genero)
            return ["Missing Genero", undefined];
        return [
            undefined,
            new UpdateVisitanteDto(idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono),
        ];
    }
}
exports.UpdateVisitanteDto = UpdateVisitanteDto;
