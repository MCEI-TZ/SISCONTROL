export class UpdateVisitanteDto {
  constructor(
    public readonly idVisitante: number,
    public readonly Nombre: string,
    public readonly Ape_Mat: string,
    public readonly Ape_Pa: string,
    public readonly IdAsunto: number,
    public readonly Genero: string,
    public readonly FechaNacimiento?: Date,
    public readonly Direccion?: string,
    public readonly Email?: string,
    public readonly Telefono?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.Nombre) returnObj.Nombre = this.Nombre;
    if (this.Ape_Mat) returnObj.Ape_Mat = this.Ape_Mat;
    if (this.Ape_Pa) returnObj.Ape_Pa = this.Ape_Pa;
    if (this.IdAsunto) returnObj.IdAsunto = this.IdAsunto;
    if (this.Genero) returnObj.Genero = this.Genero;
    if (this.FechaNacimiento) returnObj.FechaNacimiento = this.FechaNacimiento;
    if (this.Direccion) returnObj.Direccion = this.Direccion;
    if (this.Email) returnObj.Email = this.Email;
    if (this.Telefono) returnObj.Telefono = this.Telefono;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateVisitanteDto?] {
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

    if (!idVisitante) return ["Missing idVisitante", undefined];
    if (!Nombre) return ["Missing Nombre", undefined];
    if (!Ape_Mat) return ["Missing Ape_Mat", undefined];
    if (!Ape_Pa) return ["Missing Ape_Pa", undefined];
    if (!IdAsunto) return ["Missing IdAsunto", undefined];
    if (!Genero) return ["Missing Genero", undefined];

    return [
      undefined,
      new UpdateVisitanteDto(
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
