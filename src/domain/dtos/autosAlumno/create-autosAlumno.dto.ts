export class CreateAutosAlumnoDto {
  constructor(public NumControl: number, public IdVehiculo: number) {}

  static create(props: {
    [key: string]: any;
  }): [string?, CreateAutosAlumnoDto?] {
    const { NumControl, IdVehiculo } = props;

    if (NumControl == null) return ["Missing NumControl", undefined];
    if (IdVehiculo == null) return ["Missing IdVehiculo", undefined];

    return [undefined, new CreateAutosAlumnoDto(NumControl, IdVehiculo)];
  }
}
