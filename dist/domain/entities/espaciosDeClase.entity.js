"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspaciosDeClaseEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class EspaciosDeClaseEntity {
    constructor(Id, Nombre, Abreviatura, Capacidad, IdSituacion) {
        this.Id = Id;
        this.Nombre = Nombre;
        this.Abreviatura = Abreviatura;
        this.Capacidad = Capacidad;
        this.IdSituacion = IdSituacion;
    }
    static fromObject(object) {
        const { Id, Nombre, Abreviatura, Capacidad, IdSituacion } = object;
        if (Nombre == null)
            custom_error_1.CustomError.badRequest('Missing Nombre');
        if (Abreviatura == null)
            custom_error_1.CustomError.badRequest('Missing Abreviatura');
        if (Capacidad == null)
            custom_error_1.CustomError.badRequest('Missing Capacidad');
        if (IdSituacion == null)
            custom_error_1.CustomError.badRequest('Missing IdSituacion');
        return new EspaciosDeClaseEntity(Id, Nombre, Abreviatura, Capacidad, IdSituacion);
    }
}
exports.EspaciosDeClaseEntity = EspaciosDeClaseEntity;
