import { CustomError } from "../errors/custom.error";
// !-Asunto
export class AsuntoEntity {
  constructor(
    public IdAsunto: number,
    public Descripcion: string,
    public IdEvento: number
  ) {}

  /**
   * Creates an instance of AsuntoEntity from a plain object.
   *
   * @param object - The plain object to create an instance from.
   * @throws Will throw a `CustomError` if `IdAsunto` or `Descripcion` is missing.
   * @returns A new instance of AsuntoEntity.
   */
  public static fromObject(object: { [key: string]: any }): AsuntoEntity {
    const { IdAsunto, Descripcion, IdEvento } = object;

    // Check if IdAsunto is provided, otherwise throw a CustomError
    if (IdAsunto == null) CustomError.badRequest("Missing IdAsunto.");

    // Check if Descripcion is provided, otherwise throw a CustomError
    if (Descripcion == null) CustomError.badRequest("Missing Descripcion");

    // Return a new instance of AsuntoEntity
    return new AsuntoEntity(IdAsunto, Descripcion, IdEvento);
  }
}
