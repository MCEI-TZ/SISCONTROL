export class UpdateAutosVisitanteDto {
  constructor(
    public readonly idVisitante: number,
    public readonly IdVehiculo: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.IdVehiculo) returnObj.IdVehiculo = this.IdVehiculo;
    if(this.idVisitante) returnObj.IdVisitante = this.idVisitante;

    return returnObj;
  }

  static create(props: {
    [key: string]: any;
  }): [string?, UpdateAutosVisitanteDto?] {
    const { idVisitante, IdVehiculo } = props;

    if (!idVisitante) return ["Missing idVisitante", undefined];
    if (!IdVehiculo) return ["Missing idVehiculo", undefined];

    return [undefined, new UpdateAutosVisitanteDto(idVisitante, IdVehiculo)];
  }
}
