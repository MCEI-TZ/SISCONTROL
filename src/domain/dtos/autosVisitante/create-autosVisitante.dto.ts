export class CreateAutosVisitanteDto {
  constructor(public idVisitante: number, public IdVehiculo: number) {}

  static create(props: {
    [key: string]: any;
  }): [string?, CreateAutosVisitanteDto?] {
    const { idVisitante, IdVehiculo } = props;

    if (!idVisitante) return ["Missing idVisitante", undefined];
    if (!IdVehiculo) return ["Missing idVehiculo", undefined];

    return [undefined, new CreateAutosVisitanteDto(idVisitante, IdVehiculo)];
  }
}
