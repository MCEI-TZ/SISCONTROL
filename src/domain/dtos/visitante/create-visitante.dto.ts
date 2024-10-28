export class CreateVisitanteDto {
  constructor(
    public idVisitante: number,
    public Nombre: string,
    public Ape_Mat: string,
    public Ape_Pa: string,
    public IdAsunto: number,
    public Genero: string,
    public FechaNacimiento?: Date,
    public Direccion?: string,
    public Email?: string,
    public Telefono?: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateVisitanteDto?] {
    const {
      idVisitante,
      Nombre,
      Ape_Mat,
      Ape_Pa,
      IdAsunto,
      Genero,
      FechaNacimiento,
      Direccion,
      Email,
      Telefono,
    } = props;

    if (idVisitante == null) return ["Missing idVisitante", undefined];
    if (Nombre == null) return ["Missing Nombre", undefined];
    if (Ape_Mat == null) return ["Missing Ape_Mat", undefined];
    if (Ape_Pa == null) return ["Missing Ape_Pa", undefined];
    if (IdAsunto == null) return ["Missing IdAsunto", undefined];
    if (Genero == null) return ["Missing Genero", undefined];

    return [
      undefined,
      new CreateVisitanteDto(
        idVisitante,
        Nombre,
        Ape_Mat,
        Ape_Pa,
        IdAsunto,
        Genero,
        FechaNacimiento,
        Direccion,
        Email,
        Telefono
      ),
    ];
  }
}
