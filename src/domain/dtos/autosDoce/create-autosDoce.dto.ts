export class CreateAutosDoceDto {
  constructor(public IdDoce: number, public IdVehiculo: number) {}

  static create(props: { [key: string]: any }): [string?, CreateAutosDoceDto?] {
    const { IdDoce, IdVehiculo } = props;

    if (!IdDoce) return ["Missing IdDoce", undefined];
    if (!IdVehiculo) return ["Missing IdVehiculo", undefined];

    return [undefined, new CreateAutosDoceDto(IdDoce, IdVehiculo)];
  }
}
