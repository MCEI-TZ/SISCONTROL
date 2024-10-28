"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class DocenteEntity {
    constructor(IdDoce, Apellidos, Nombre, NombreCompleto, Genero, Grado, NumNomina, Vigente, IdDepa) {
        this.IdDoce = IdDoce;
        this.Apellidos = Apellidos;
        this.Nombre = Nombre;
        this.NombreCompleto = NombreCompleto;
        this.Genero = Genero;
        this.Grado = Grado;
        this.NumNomina = NumNomina;
        this.Vigente = Vigente;
        this.IdDepa = IdDepa;
    }
    static fromObject(object) {
        const { IdDoce, Apellidos, Nombre, NombreCompleto, Genero, Grado, NumNomina, Vigente, IdDepa, } = object;
        if (IdDoce == null)
            custom_error_1.CustomError.badRequest("Missing IdDoce");
        if (Apellidos == null)
            custom_error_1.CustomError.badRequest("Missing Apellidos");
        if (Nombre == null)
            custom_error_1.CustomError.badRequest("Missing Nombre");
        if (NombreCompleto == null)
            custom_error_1.CustomError.badRequest("Missing NombreCompleto");
        if (Genero == null)
            custom_error_1.CustomError.badRequest("Missing Genero");
        if (Grado == null)
            custom_error_1.CustomError.badRequest("Missing Grado");
        if (NumNomina == null)
            custom_error_1.CustomError.badRequest("Missing NumNomina");
        if (Vigente == null)
            custom_error_1.CustomError.badRequest("Missing Vigente");
        if (IdDepa == null)
            custom_error_1.CustomError.badRequest("Missing IdDepa");
        return new DocenteEntity(IdDoce, Apellidos, Nombre, NombreCompleto, Genero, Grado, NumNomina, Vigente, IdDepa);
    }
}
exports.DocenteEntity = DocenteEntity;
