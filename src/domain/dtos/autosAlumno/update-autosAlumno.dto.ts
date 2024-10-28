export class UpdateAutosAlumnoDto {
  constructor(
    public readonly NumControl: number,
    public readonly IdVehiculo: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.IdVehiculo) returnObj.IdVehiculo = this.IdVehiculo;
    if (this.NumControl) returnObj.NumControl = this.NumControl;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateAutosAlumnoDto?] {
    const { NumControl, IdVehiculo } = props;

    if (!NumControl) return ["Missing NumControl", undefined];
    if (!IdVehiculo) return ["Missing IdVehiculo", undefined];

    return [undefined, new UpdateAutosAlumnoDto(NumControl, IdVehiculo)];
  }
}
