import { CustomError } from "../errors/custom.error";
export class TipoTransportEntity {
  constructor(public IdTpTransp: number, public Nombre: string) {}

  public static fromObject(object: {
    [key: string]: any;
  }): TipoTransportEntity {
    const { IdTpTransp, Nombre } = object;

    if (Nombre == null) CustomError.badRequest("Missing Nombre");

    return new TipoTransportEntity(IdTpTransp, Nombre);
  }
}
