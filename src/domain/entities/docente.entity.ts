import { CustomError } from "../errors/custom.error";
export class DocenteEntity {
  constructor(
    public IdDoce: number,
    public Apellidos: string,
    public Nombre: string,
    public NombreCompleto: string,
    public Genero: string,
    public Grado: string,
    public NumNomina: number,
    public Vigente?: boolean,
    public IdDepa?: number
  ) {}
  public static fromObject(object: { [key: string]: any }): DocenteEntity {
    const {
      IdDoce,
      Apellidos,
      Nombre,
      NombreCompleto,
      Genero,
      Grado,
      NumNomina,
      Vigente,
      IdDepa,
    } = object;

    if (IdDoce == null) CustomError.badRequest("Missing IdDoce");
    if (Apellidos == null) CustomError.badRequest("Missing Apellidos");
    if (Nombre == null) CustomError.badRequest("Missing Nombre");
    if (NombreCompleto == null)
      CustomError.badRequest("Missing NombreCompleto");
    if (Genero == null) CustomError.badRequest("Missing Genero");
    if (Grado == null) CustomError.badRequest("Missing Grado");
    if (NumNomina == null) CustomError.badRequest("Missing NumNomina");
    if (Vigente == null) CustomError.badRequest("Missing Vigente");
    if (IdDepa == null) CustomError.badRequest("Missing IdDepa");

    return new DocenteEntity(
      IdDoce,
      Apellidos,
      Nombre,
      NombreCompleto,
      Genero,
      Grado,
      NumNomina,
      Vigente,
      IdDepa
    );
  }
}
