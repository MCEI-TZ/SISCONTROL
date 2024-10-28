"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class AlumnoEntity {
    constructor(NumControl, APaterno, AMaterno, Nombre, NombreCompleto, Genero, FNacimiento, CURP, Situacion, Clave, Semestre, IdCarre, PeriodoIngreso, PeriodosConvalidados, IdPlanEstudio, IdModalidadEstudio, IdTipoIngreso, IdBachillerato, IdEspecialidadBachillerato, PromedioBachillerato, AnioEgresoBachillerato, NumFicha, Edad, AnioIngreso, CorreoE, PeriodoEgreso, IdModuloEspecialidad) {
        this.NumControl = NumControl;
        this.APaterno = APaterno;
        this.AMaterno = AMaterno;
        this.Nombre = Nombre;
        this.NombreCompleto = NombreCompleto;
        this.Genero = Genero;
        this.FNacimiento = FNacimiento;
        this.CURP = CURP;
        this.Situacion = Situacion;
        this.Clave = Clave;
        this.Semestre = Semestre;
        this.IdCarre = IdCarre;
        this.PeriodoIngreso = PeriodoIngreso;
        this.PeriodosConvalidados = PeriodosConvalidados;
        this.IdPlanEstudio = IdPlanEstudio;
        this.IdModalidadEstudio = IdModalidadEstudio;
        this.IdTipoIngreso = IdTipoIngreso;
        this.IdBachillerato = IdBachillerato;
        this.IdEspecialidadBachillerato = IdEspecialidadBachillerato;
        this.PromedioBachillerato = PromedioBachillerato;
        this.AnioEgresoBachillerato = AnioEgresoBachillerato;
        this.NumFicha = NumFicha;
        this.Edad = Edad;
        this.AnioIngreso = AnioIngreso;
        this.CorreoE = CorreoE;
        this.PeriodoEgreso = PeriodoEgreso;
        this.IdModuloEspecialidad = IdModuloEspecialidad;
    }
    // Puedes añadir más métodos aquí si es necesario
    static fromObject(object) {
        const { NumControl, APaterno, AMaterno, Nombre, NombreCompleto, Genero, FNacimiento, CURP, Situacion, Clave, Semestre, IdCarre, PeriodoIngreso, PeriodosConvalidados, IdPlanEstudio, IdModalidadEstudio, IdTipoIngreso, IdBachillerato, IdEspecialidadBachillerato, PromedioBachillerato, AnioEgresoBachillerato, NumFicha, Edad, AnioIngreso, CorreoE, PeriodoEgreso, IdModuloEspecialidad, } = object;
        if (NumControl == null)
            custom_error_1.CustomError.badRequest("Missing Numcontrol");
        if (APaterno == null)
            custom_error_1.CustomError.badRequest("Missing APaterno");
        if (AMaterno == null)
            custom_error_1.CustomError.badRequest("Missing AMaterno");
        if (Nombre == null)
            custom_error_1.CustomError.badRequest("Missing Nombre");
        if (NombreCompleto == null)
            custom_error_1.CustomError.badRequest("Missing NombreCompleto");
        if (Genero == null)
            custom_error_1.CustomError.badRequest("Missing Genero");
        if (FNacimiento == null)
            custom_error_1.CustomError.badRequest("Missing FNacimiento");
        if (CURP == null)
            custom_error_1.CustomError.badRequest("Missing CURP");
        if (Situacion == null)
            custom_error_1.CustomError.badRequest("Missing Situacion");
        if (Clave == null)
            custom_error_1.CustomError.badRequest("Missing Clave");
        if (Semestre == null)
            custom_error_1.CustomError.badRequest("Missing Semestre");
        if (IdCarre == null)
            custom_error_1.CustomError.badRequest("Missing IdCarre");
        if (PeriodoIngreso == null)
            custom_error_1.CustomError.badRequest("Missing PeriodoIngreso");
        if (PeriodosConvalidados == null)
            custom_error_1.CustomError.badRequest("Missing PeriodosConvalidados");
        if (IdPlanEstudio == null)
            custom_error_1.CustomError.badRequest("Missing IdPlanEstudio");
        if (IdModalidadEstudio == null)
            custom_error_1.CustomError.badRequest("Missing IdModalidadEstudio");
        if (IdTipoIngreso == null)
            custom_error_1.CustomError.badRequest("Missing IdTipoIngreso");
        if (IdBachillerato == null)
            custom_error_1.CustomError.badRequest("Missing IdBachillerato");
        if (IdEspecialidadBachillerato == null)
            custom_error_1.CustomError.badRequest("Missing IdEspecialidadBachillerato");
        if (PromedioBachillerato == null)
            custom_error_1.CustomError.badRequest("Missing PromedioBachillerato");
        if (AnioEgresoBachillerato == null)
            custom_error_1.CustomError.badRequest("Missing AnioEgresoBachillerato");
        return new AlumnoEntity(NumControl, APaterno, AMaterno, Nombre, NombreCompleto, Genero, FNacimiento, CURP, Situacion, Clave, Semestre, IdCarre, PeriodoIngreso, PeriodosConvalidados, IdPlanEstudio, IdModalidadEstudio, IdTipoIngreso, IdBachillerato, IdEspecialidadBachillerato, PromedioBachillerato, AnioEgresoBachillerato, NumFicha, Edad, AnioIngreso, CorreoE, PeriodoEgreso, IdModuloEspecialidad);
    }
}
exports.AlumnoEntity = AlumnoEntity;
