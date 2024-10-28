import { CustomError } from "../errors/custom.error";

export class CarreraEntity {
  constructor(
    public IdCarre: number,
    public Nombre: string,
    public NombreCorto: string,
    public Letra: string | null,
    public Situacion: number,
    public IdDepa: number,
    public IdJefe: number,
    public IdNivelEstudio: number,
    public FechaInicio: Date,
    public FechaTerminacion: Date,
    public PeriodoModulo: number
  ) {}

  // Puedes añadir más métodos aquí si es necesario
  public static fromObject(object: { [key: string]: any }): CarreraEntity {
    const {
      IdCarre,
      Nombre,
      NombreCorto,
      Letra,
      Situacion,
      IdDepa,
      IdJefe,
      IdNivelEstudio,
      FechaInicio,
      FechaTerminacion,
      PeriodoModulo,
    } = object;

    if (IdCarre == null) CustomError.badRequest("Missing IdCarre");
    if (Nombre == null) CustomError.badRequest("Missing Nombre");
    if (NombreCorto == null) CustomError.badRequest("Missing NombreCorto");
    if (Situacion == null) CustomError.badRequest("Missing Situacion");
    if (IdDepa == null) CustomError.badRequest("Missing IdDepa");
    if (IdJefe == null) CustomError.badRequest("Missing IdJefe");
    if (IdNivelEstudio == null)
      CustomError.badRequest("Missing IdNivelEstudio");
    if (FechaInicio == null) CustomError.badRequest("Missing FechaInicio");
    if (FechaTerminacion == null)
      CustomError.badRequest("Missing FechaTerminacion");
    if (PeriodoModulo == null) CustomError.badRequest("Missing PeriodoModulo");

    return new CarreraEntity(
      IdCarre,
      Nombre,
      NombreCorto,
      Letra,
      Situacion,
      IdDepa,
      IdJefe,
      IdNivelEstudio,
      FechaInicio,
      FechaTerminacion,
      PeriodoModulo
    );
  }
}
