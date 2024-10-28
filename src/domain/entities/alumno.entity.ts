import { CustomError } from "../errors/custom.error";
export class AlumnoEntity {
  constructor(
    public NumControl: number,
    public APaterno: string,
    public AMaterno: string,
    public Nombre: string,
    public NombreCompleto: string,
    public Genero: string,
    public FNacimiento: Date,
    public CURP: string,
    public Situacion: number,
    public Clave: Buffer,
    public Semestre: number,
    public IdCarre: number,
    public PeriodoIngreso: number,
    public PeriodosConvalidados: number,
    public IdPlanEstudio: number,
    public IdModalidadEstudio: number,
    public IdTipoIngreso: number,
    public IdBachillerato: number,
    public IdEspecialidadBachillerato: number,
    public PromedioBachillerato: number,
    public AnioEgresoBachillerato: number,
    public NumFicha?: string,
    public Edad?: number,
    public AnioIngreso?: number,
    public CorreoE?: string,
    public PeriodoEgreso?: number,
    public IdModuloEspecialidad?: number
  ) {}

  // Puedes añadir más métodos aquí si es necesario
  public static fromObject(object: { [key: string]: any }): AlumnoEntity {
    const {
      NumControl,
      APaterno,
      AMaterno,
      Nombre,
      NombreCompleto,
      Genero,
      FNacimiento,
      CURP,
      Situacion,
      Clave,
      Semestre,
      IdCarre,
      PeriodoIngreso,
      PeriodosConvalidados,
      IdPlanEstudio,
      IdModalidadEstudio,
      IdTipoIngreso,
      IdBachillerato,
      IdEspecialidadBachillerato,
      PromedioBachillerato,
      AnioEgresoBachillerato,
      NumFicha,
      Edad,
      AnioIngreso,
      CorreoE,
      PeriodoEgreso,
      IdModuloEspecialidad,
    } = object;

    if (NumControl == null) CustomError.badRequest("Missing Numcontrol");
    if (APaterno == null) CustomError.badRequest("Missing APaterno");
    if (AMaterno == null) CustomError.badRequest("Missing AMaterno");
    if (Nombre == null) CustomError.badRequest("Missing Nombre");
    if (NombreCompleto == null)
      CustomError.badRequest("Missing NombreCompleto");
    if (Genero == null) CustomError.badRequest("Missing Genero");
    if (FNacimiento == null) CustomError.badRequest("Missing FNacimiento");
    if (CURP == null) CustomError.badRequest("Missing CURP");
    if (Situacion == null) CustomError.badRequest("Missing Situacion");
    if (Clave == null) CustomError.badRequest("Missing Clave");
    if (Semestre == null) CustomError.badRequest("Missing Semestre");
    if (IdCarre == null) CustomError.badRequest("Missing IdCarre");
    if (PeriodoIngreso == null)
      CustomError.badRequest("Missing PeriodoIngreso");
    if (PeriodosConvalidados == null)
      CustomError.badRequest("Missing PeriodosConvalidados");
    if (IdPlanEstudio == null) CustomError.badRequest("Missing IdPlanEstudio");
    if (IdModalidadEstudio == null)
      CustomError.badRequest("Missing IdModalidadEstudio");
    if (IdTipoIngreso == null) CustomError.badRequest("Missing IdTipoIngreso");
    if (IdBachillerato == null)
      CustomError.badRequest("Missing IdBachillerato");
    if (IdEspecialidadBachillerato == null)
      CustomError.badRequest("Missing IdEspecialidadBachillerato");
    if (PromedioBachillerato == null)
      CustomError.badRequest("Missing PromedioBachillerato");
    if (AnioEgresoBachillerato == null)
      CustomError.badRequest("Missing AnioEgresoBachillerato");

    return new AlumnoEntity(
      NumControl,
      APaterno,
      AMaterno,
      Nombre,
      NombreCompleto,
      Genero,
      FNacimiento,
      CURP,
      Situacion,
      Clave,
      Semestre,
      IdCarre,
      PeriodoIngreso,
      PeriodosConvalidados,
      IdPlanEstudio,
      IdModalidadEstudio,
      IdTipoIngreso,
      IdBachillerato,
      IdEspecialidadBachillerato,
      PromedioBachillerato,
      AnioEgresoBachillerato,
      NumFicha,
      Edad,
      AnioIngreso,
      CorreoE,
      PeriodoEgreso,
      IdModuloEspecialidad
    );
  }
}
