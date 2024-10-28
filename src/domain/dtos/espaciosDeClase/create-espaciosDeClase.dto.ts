export class CreateEspacioDto {
  constructor(
    public Nombre: string,
    public Abreviatura: string,
    public Capacidad: number,
    public IdSituacion: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateEspacioDto?] {
    const { Nombre, Abreviatura, Capacidad, IdSituacion } = props;

    if (Nombre == null) return ["Missing nombre", undefined];
    if (Abreviatura == null) return ["Missing abreviatura", undefined];
    if (Capacidad == null) return ["Missing capacidad", undefined];
    if (IdSituacion == null) return ["Missing IdSituacion", undefined];

    return [
      undefined,
      new CreateEspacioDto(Nombre, Abreviatura, Capacidad, IdSituacion),
    ];
  }
}
