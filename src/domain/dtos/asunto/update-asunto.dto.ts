/**
 * A class representing a DTO for updating an Asunto.
 * It contains properties for IdAsunto, Descripcion, and IdEvento.
 * It also provides methods for creating a new instance and validating the input data.
 */
export class UpdateAsuntoDto {
  constructor(
    public readonly IdAsunto: number,
    public readonly Descripcion: string,
    public readonly IdEvento: number
  ) {}

  /**
   * Returns an object containing only the properties that have been set.
   * This is useful for updating only specific fields in the database.
   */
  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.Descripcion) returnObj.Descripcion = this.Descripcion;
    if (this.IdEvento) returnObj.IdEvento = this.IdEvento;

    return returnObj;
  }

  /**
   * Creates a new UpdateAsuntoDto instance from the provided properties.
   * Validates the input data and returns an error message if any required property is missing.
   * @param props - An object containing the properties for the new instance.
   * @returns - An array containing an error message (if any) and the new instance (if valid).
   */
  static create(props: { [key: string]: any }): [string?, UpdateAsuntoDto?] {
    const { IdAsunto, Descripcion, IdEvento } = props;

    if (!IdAsunto) return ["Missing IdAsunto", undefined];
    if (!Descripcion) return ["Missing Descripcion", undefined];
    if (!IdEvento) return ["Missing IdEvento", undefined];

    return [undefined, new UpdateAsuntoDto(IdAsunto, Descripcion, IdEvento)];
  }
}
