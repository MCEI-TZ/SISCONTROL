"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarreraEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class CarreraEntity {
    constructor(IdCarre, Nombre, NombreCorto, Letra, Situacion, IdDepa, IdJefe, IdNivelEstudio, FechaInicio, FechaTerminacion, PeriodoModulo) {
        this.IdCarre = IdCarre;
        this.Nombre = Nombre;
        this.NombreCorto = NombreCorto;
        this.Letra = Letra;
        this.Situacion = Situacion;
        this.IdDepa = IdDepa;
        this.IdJefe = IdJefe;
        this.IdNivelEstudio = IdNivelEstudio;
        this.FechaInicio = FechaInicio;
        this.FechaTerminacion = FechaTerminacion;
        this.PeriodoModulo = PeriodoModulo;
    }
    // Puedes añadir más métodos aquí si es necesario
    static fromObject(object) {
        const { IdCarre, Nombre, NombreCorto, Letra, Situacion, IdDepa, IdJefe, IdNivelEstudio, FechaInicio, FechaTerminacion, PeriodoModulo, } = object;
        if (IdCarre == null)
            custom_error_1.CustomError.badRequest("Missing IdCarre");
        if (Nombre == null)
            custom_error_1.CustomError.badRequest("Missing Nombre");
        if (NombreCorto == null)
            custom_error_1.CustomError.badRequest("Missing NombreCorto");
        if (Situacion == null)
            custom_error_1.CustomError.badRequest("Missing Situacion");
        if (IdDepa == null)
            custom_error_1.CustomError.badRequest("Missing IdDepa");
        if (IdJefe == null)
            custom_error_1.CustomError.badRequest("Missing IdJefe");
        if (IdNivelEstudio == null)
            custom_error_1.CustomError.badRequest("Missing IdNivelEstudio");
        if (FechaInicio == null)
            custom_error_1.CustomError.badRequest("Missing FechaInicio");
        if (FechaTerminacion == null)
            custom_error_1.CustomError.badRequest("Missing FechaTerminacion");
        if (PeriodoModulo == null)
            custom_error_1.CustomError.badRequest("Missing PeriodoModulo");
        return new CarreraEntity(IdCarre, Nombre, NombreCorto, Letra, Situacion, IdDepa, IdJefe, IdNivelEstudio, FechaInicio, FechaTerminacion, PeriodoModulo);
    }
}
exports.CarreraEntity = CarreraEntity;
