export class CreateVehiculoDto {
  constructor(
    public IdVehiculo: number,
    public Marca: string,
    public Modelo: string,
    public Color: string,
    public Placas: string,
    public Anio: number,
    public idTipo: number,
    public IdDoce?: number,
    public idVisitante?: number,
    public NumControl?: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateVehiculoDto?] {
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

    if (IdVehiculo == null) return ["Missing IdVehiculo", undefined];
    if (Marca == null) return ["Missing Marca", undefined];
    if (Modelo == null) return ["Missing Modelo", undefined];
    if (Color == null) return ["Missing Color", undefined];
    if (Placas == null) return ["Missing Placas", undefined];
    if (Anio == null) return ["Missing Anio", undefined];
    if (idTipo == null) return ["Missing idTipo", undefined];

    return [
      undefined,
      new CreateVehiculoDto(
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
