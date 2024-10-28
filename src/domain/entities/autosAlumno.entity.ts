import { CustomError } from "../errors/custom.error";
//!-AutosAlumnos
export class AutosAlumnosEntity {
  constructor(public NumControl: number, public IdVehiculo: number) {}

  public static fromObject(object: { [key: string]: any }): AutosAlumnosEntity {
    const { NumControl, IdVehiculo } = object;

    if (NumControl == null) CustomError.badRequest("Missing NumControl");
    if (IdVehiculo == null) CustomError.badRequest("Missing IdVehiculo");

    return new AutosAlumnosEntity(NumControl, IdVehiculo);
  }
}
