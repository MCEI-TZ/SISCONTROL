"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisitanteDto = void 0;
class CreateVisitanteDto {
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
    static create(props) {
        const { idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono, } = props;
        if (idVisitante == null)
            return ["Missing idVisitante", undefined];
        if (Nombre == null)
            return ["Missing Nombre", undefined];
        if (Ape_Mat == null)
            return ["Missing Ape_Mat", undefined];
        if (Ape_Pa == null)
            return ["Missing Ape_Pa", undefined];
        if (IdAsunto == null)
            return ["Missing IdAsunto", undefined];
        if (Genero == null)
            return ["Missing Genero", undefined];
        return [
            undefined,
            new CreateVisitanteDto(idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono),
        ];
    }
}
exports.CreateVisitanteDto = CreateVisitanteDto;
