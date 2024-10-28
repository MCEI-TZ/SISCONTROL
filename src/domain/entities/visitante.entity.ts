import { CustomError } from "../errors/custom.error";
export class VisitanteEntity {
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

  public static fromObject(object: { [key: string]: any }): VisitanteEntity {
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
    } = object;

    if (idVisitante == null) CustomError.badRequest("Missing idVisitante");
    if (Nombre == null) CustomError.badRequest("Missing Nombre");
    if (Ape_Mat == null) CustomError.badRequest("Missing Ape_Mat");
    if (Ape_Pa == null) CustomError.badRequest("Missing Ape_Pa");
    if (IdAsunto == null) CustomError.badRequest("Missing IdAsunto");
    if (Genero == null) CustomError.badRequest("Missing Genero");

    return new VisitanteEntity(
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
    );
  }
}
