import { CustomError } from "../errors/custom.error";
//!-AutosDoce
export class AutosDoceEntity {
  constructor(public IdDoce: number, public IdVehiculo: number) {}

  public static fromObject(object: { [key: string]: any }): AutosDoceEntity {
    const { IdDoce, IdVehiculo } = object;

    if (IdDoce == null) CustomError.badRequest("Missing IdDoce.");
    if (IdVehiculo == null) CustomError.badRequest("Missing IdVehiculo.");

    return new AutosDoceEntity(IdDoce, IdVehiculo);
  }
}
