import { CustomError } from "../errors/custom.error";

export class DepartamentoEntity {
  constructor(
    public IdDepa: number,
    public Nombre: string,
    public NombreCorto: string,
    public Carreras?: any[],
    public Docentes?: any[],
    public Empleados?: any[],
    public Materias?: any[]
  ) {}

  // Puedes añadir más métodos aquí si es necesario
  public static fromObject(object: { [key: string]: any }): DepartamentoEntity {
    const {
      IdDepa,
      Nombre,
      NombreCorto,
      Carreras,
      Docentes,
      Empleados,
      Materias,
    } = object;

    if (IdDepa == null) CustomError.badRequest("Missing IdDepa");
    if (Nombre == null) CustomError.badRequest("Missing Nombre");
    if (NombreCorto == null) CustomError.badRequest("Missing NombreCorto");

    return new DepartamentoEntity(
      IdDepa,
      Nombre,
      NombreCorto,
      Carreras,
      Docentes,
      Empleados,
      Materias
    );
  }
}
