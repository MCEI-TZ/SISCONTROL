export class UpdateVehiculoDto {
  constructor(
    public readonly IdVehiculo: number,
    public readonly Marca: string,
    public readonly Modelo: string,
    public readonly Color: string,
    public readonly Placas: string,
    public readonly Anio: number,
    public readonly idTipo: number,
    public readonly IdDoce?: number,
    public readonly idVisitante?: number,
    public readonly NumControl?: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.Marca) returnObj.Marca = this.Marca;
    if (this.Modelo) returnObj.Modelo = this.Modelo;
    if (this.Color) returnObj.Color = this.Color;
    if (this.Placas) returnObj.Placas = this.Placas;
    if (this.Anio) returnObj.Anio = this.Anio;
    if (this.idTipo) returnObj.idTipo = this.idTipo;
    if (this.IdDoce) returnObj.IdDoce = this.IdDoce;
    if (this.idVisitante) returnObj.idVisitante = this.idVisitante;
    if (this.NumControl) returnObj.NumControl = this.NumControl;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateVehiculoDto?] {
    const {
      IdVehiculo,
      Marca,
      Modelo,
      Color,
      Placas,
      Anio,
      idTipo,
      IdDoce,
      idVisitante,
      NumControl,
    } = props;

    if (!IdVehiculo) return ["Missing IdVehiculo", undefined];
    if (!Marca) return ["Missing Marca", undefined];
    if (!Modelo) return ["Missing Modelo", undefined];
    if (!Color) return ["Missing Color", undefined];
    if (!Placas) return ["Missing Placas", undefined];
    if (!Anio) return ["Missing Anio", undefined];
    if (!idTipo) return ["Missing idTipo", undefined];

    return [
      undefined,
      new UpdateVehiculoDto(
        IdVehiculo,
        Marca,
        Modelo,
        Color,
        Placas,
        Anio,
        idTipo,
        IdDoce,
        idVisitante,
        NumControl
      ),
    ];
  }
}
