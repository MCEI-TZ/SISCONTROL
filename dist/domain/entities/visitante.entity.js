"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitanteEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class VisitanteEntity {
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
    static fromObject(object) {
        const { idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono, } = object;
        if (idVisitante == null)
            custom_error_1.CustomError.badRequest("Missing idVisitante");
        if (Nombre == null)
            custom_error_1.CustomError.badRequest("Missing Nombre");
        if (Ape_Mat == null)
            custom_error_1.CustomError.badRequest("Missing Ape_Mat");
        if (Ape_Pa == null)
            custom_error_1.CustomError.badRequest("Missing Ape_Pa");
        if (IdAsunto == null)
            custom_error_1.CustomError.badRequest("Missing IdAsunto");
        if (Genero == null)
            custom_error_1.CustomError.badRequest("Missing Genero");
        return new VisitanteEntity(idVisitante, Nombre, Ape_Mat, Ape_Pa, IdAsunto, Genero, FechaNacimiento, Direccion, Email, Telefono);
    }
}
exports.VisitanteEntity = VisitanteEntity;
