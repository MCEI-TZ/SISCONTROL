export class ControlAsistenciasDto {
  constructor(
    public IdControlAsis: number,
    public idTipo: number,
    public IdEspacio: number,
    public IdDoce?: number,
    public idVisitante?: number,
    public NumControl?: number,
    public idVehiculo?: number,
    public HoraEntrada?: Date,
    public HoraSalida?: Date,
    public IdTpTransport?: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.IdControlAsis) returnObj.IdControlAsis = this.IdControlAsis;
    if (this.idTipo) returnObj.idTipo = this.idTipo;
    if (this.IdEspacio) returnObj.IdEspacio = this.IdEspacio;
    if (this.IdDoce) returnObj.IdDoce = this.IdDoce;
    if (this.idVisitante) returnObj.idVisitante = this.idVisitante;
    if (this.NumControl) returnObj.NumControl = this.NumControl;
    if (this.idVehiculo) returnObj.idVehiculo = this.idVehiculo;
    if (this.HoraEntrada) returnObj.HoraEntrada = this.HoraEntrada;
    if (this.HoraSalida) returnObj.HoraSalida = this.HoraSalida;
    if (this.IdTpTransport) returnObj.IdTpTransport = this.IdTpTransport;

    return returnObj;
  }

  static createOrUpdate(props: {
    [key: string]: any;
  }): [string?, ControlAsistenciasDto?] {
    const {
      IdControlAsis,
      idTipo,
      IdEspacio,
      IdDoce,
      idVisitante,
      NumControl,
      idVehiculo,
      HoraEntrada,
      HoraSalida,
      IdTpTransport,
    } = props;

    // if (!idTipo) return ["Missing IdTipo", undefined];
    if (!IdEspacio) return ["Missing IdEspacio", undefined];

    return [
      undefined,
      new ControlAsistenciasDto(
        IdControlAsis,
        idTipo,
        IdEspacio,
        IdDoce,
        idVisitante,
        NumControl,
        idVehiculo,
        HoraEntrada,
        HoraSalida,
        IdTpTransport
      ),
    ];
  }
}
