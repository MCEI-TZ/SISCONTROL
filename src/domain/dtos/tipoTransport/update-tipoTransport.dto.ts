export class UpdateTipoTransportDto {
  constructor(
    public readonly IdTpTransp: number,
    public readonly Nombre: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.Nombre) returnObj.Nombre = this.Nombre;

    return returnObj;
  }

  static create(props: {
    [key: string]: any;
  }): [string?, UpdateTipoTransportDto?] {
    const { IdTpTransp, Nombre } = props;

    if (!IdTpTransp) return ["Missing IdTpTransp", undefined];
    if (!Nombre) return ["Missing Nombre", undefined];

    return [undefined, new UpdateTipoTransportDto(IdTpTransp, Nombre)];
  }
}
