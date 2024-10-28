export class UpdateEspaciosDeClaseDto {
  constructor(
    public readonly Id: number,
    public readonly Nombre: string,
    public readonly Abreviatura: string,
    public readonly Capacidad: number,
    public readonly IdSituacion: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.Nombre) returnObj.Nombre = this.Nombre;
    if (this.Abreviatura) returnObj.Abreviatura = this.Abreviatura;
    if (this.Capacidad) returnObj.Capacidad = this.Capacidad;
    if (this.IdSituacion) returnObj.IdSituacion = this.IdSituacion;

    return returnObj;
  }

  static create(props: {
    [key: string]: any;
  }): [string?, UpdateEspaciosDeClaseDto?] {
    const { Id, Nombre, Abreviatura, Capacidad, IdSituacion } = props;

    if (!Id) return ["Missing id", undefined];
    if (!Nombre) return ["Missing nombre", undefined];
    if (!Abreviatura) return ["Missing abreviatura", undefined];
    if (!Capacidad) return ["Missing capacidad", undefined];
    if (!IdSituacion) return ["Missing IdSituacion", undefined];

    return [
      undefined,
      new UpdateEspaciosDeClaseDto(
        Id,
        Nombre,
        Abreviatura,
        Capacidad,
        IdSituacion
      ),
    ];
  }
}
