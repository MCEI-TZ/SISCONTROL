export class ControlAsisEntity {
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

  public static fromObject(object: { [key: string]: any }): ControlAsisEntity {
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
    } = object;

    if (IdControlAsis == null) throw new Error("Missing IdControlAsis");
    if (idTipo == null) throw new Error("Missing idTipo");
    if (IdEspacio == null) throw new Error("Missing IdEspacio");

    return new ControlAsisEntity(
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
    );
  }
}
