import { CustomError } from "../errors/custom.error";
export class TipoPersonaEntity {
  constructor(public IdTipo: number, public Descripcion: string) {}

  /**
   * Creates a new instance of `TipoPersonaEntity` from an object.
   *
   * @param object - The object to create the instance from.
   * @throws Will throw a `CustomError` if `IdTipo` or `Descripcion` is missing in the object.
   * @returns A new instance of `TipoPersonaEntity`.
   */
  public static fromObject(object: { [key: string]: any }): TipoPersonaEntity {
    const { IdTipo, Descripcion } = object;

    // Check if IdTipo is present, if not throw a CustomError
    if (IdTipo == null) CustomError.badRequest("Missing IdTipo");

    // Check if Descripcion is present, if not throw a CustomError
    if (Descripcion == null) CustomError.badRequest("Missing Descripcion");

    // Return a new instance of TipoPersonaEntity
    return new TipoPersonaEntity(IdTipo, Descripcion);
  }
}
