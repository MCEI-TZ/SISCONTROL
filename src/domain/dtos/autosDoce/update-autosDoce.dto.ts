export class UpdateAutosDoceDto {
  constructor(
    public readonly IdDoce: number,
    public readonly IdVehiculo: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.IdVehiculo) returnObj.IdVehiculo = this.IdVehiculo;
    if(this.IdDoce) returnObj.IdDoce = this.IdDoce;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateAutosDoceDto?] {
    const { IdDoce, IdVehiculo } = props;

    if (!IdDoce) return ["Missing IdDoce", undefined];
    if (!IdVehiculo) return ["Missing IdVehiculo", undefined];


    return [undefined, new UpdateAutosDoceDto(IdDoce, IdVehiculo)];
  }
}
