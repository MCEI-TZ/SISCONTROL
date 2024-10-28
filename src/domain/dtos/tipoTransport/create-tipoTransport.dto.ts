export class CreateTipoTransportDto {
  constructor(public Nombre: string) {}

  static create(props: {
    [key: string]: any;
  }): [string?, CreateTipoTransportDto?] {
    const { Nombre } = props;

    if (!Nombre) return ["Missing Nombre", undefined];

    return [undefined, new CreateTipoTransportDto(Nombre)];
  }
}
