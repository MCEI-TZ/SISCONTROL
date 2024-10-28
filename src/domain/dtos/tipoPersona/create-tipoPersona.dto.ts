/**
 * A class representing a DTO for creating a new TipoPerson.
 */
export class CreateTipoPersonDto {
  constructor(public Descripcion: string) {}

  /**
   * Creates a new instance of CreateTipoPersonDto from the provided properties.
   *
   * @param props - An object containing the properties to create the DTO.
   * @returns - An array containing an error message (if any) and the created DTO (if successful).
   *
   * @example
   * ```typescript
   * const [error, dto] = CreateTipoPersonDto.create({ Descripcion: 'New Type' });
   * if (error) {
   *   console.error(error);
   * } else {
   *   console.log(dto);
   * }
   * ```
   */
  static create(props: {
    [key: string]: any;
  }): [string?, CreateTipoPersonDto?] {
    const { Descripcion } = props;

    if (!Descripcion) return ["Missing Descripcion", undefined];

    return [undefined, new CreateTipoPersonDto(Descripcion)];
  }
}
