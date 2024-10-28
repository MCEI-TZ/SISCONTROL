"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class DepartamentoEntity {
    constructor(IdDepa, Nombre, NombreCorto, Carreras, Docentes, Empleados, Materias) {
        this.IdDepa = IdDepa;
        this.Nombre = Nombre;
        this.NombreCorto = NombreCorto;
        this.Carreras = Carreras;
        this.Docentes = Docentes;
        this.Empleados = Empleados;
        this.Materias = Materias;
    }
    // Puedes añadir más métodos aquí si es necesario
    static fromObject(object) {
        const { IdDepa, Nombre, NombreCorto, Carreras, Docentes, Empleados, Materias, } = object;
        if (IdDepa == null)
            custom_error_1.CustomError.badRequest("Missing IdDepa");
        if (Nombre == null)
            custom_error_1.CustomError.badRequest("Missing Nombre");
        if (NombreCorto == null)
            custom_error_1.CustomError.badRequest("Missing NombreCorto");
        return new DepartamentoEntity(IdDepa, Nombre, NombreCorto, Carreras, Docentes, Empleados, Materias);
    }
}
exports.DepartamentoEntity = DepartamentoEntity;
