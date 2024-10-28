import { CustomError } from "../errors/custom.error";
export class VehiculoEntity {
  constructor(
    public IdVehiculo: number,
    public Marca: string,
    public Modelo: string,
    public Color: string,
    public Placas: string,
    public Anio: number,
    public idTipo: number,
    public IdDoce?: number,
    public idVisitante?: number,
    public NumControl?: number
  ) {}

  public static fromObject(object: { [key: string]: any }): VehiculoEntity {
    const {
      IdVehiculo,
      Marca,
      Modelo,
      Color,
      Placas,
      Anio,
      idTipo,
      IdDoce,
      idVisitante,
      NumControl,
    } = object;

    if (IdVehiculo == null) CustomError.badRequest("Missing IdVehiculo");
    if (Marca == null) CustomError.badRequest("Missing Marca");
    if (Modelo == null) CustomError.badRequest("Missing Modelo");
    if (Color == null) CustomError.badRequest("Missing Color");
    if (Placas == null) CustomError.badRequest("Missing Placas");
    if (Anio == null) CustomError.badRequest("Missing Anio");
    if (idTipo == null) CustomError.badRequest("Missing IdTipo");

    return new VehiculoEntity(
      IdVehiculo,
      Marca,
      Modelo,
      Color,
      Placas,
      Anio,
      idTipo,
      IdDoce,
      idVisitante,
      NumControl
    );
  }
}
