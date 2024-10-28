import { CustomError } from "../errors/custom.error";
//!-AutosVIsitante
export class AutosVisitanteEntity {
  constructor(public idVisitante: number, public IdVehiculo: number) {}

  public static fromObject(object: {
    [key: string]: any;
  }): AutosVisitanteEntity {
    const { idVisitante, IdVehiculo } = object;

    if (idVisitante == null) CustomError.badRequest("Missing idVisitante");
    if (IdVehiculo == null) CustomError.badRequest("Missing idVehiculo");

    return new AutosVisitanteEntity(idVisitante, IdVehiculo);
  }
}
