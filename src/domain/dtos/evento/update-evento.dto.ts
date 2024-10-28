/**
 * A class representing an update event DTO.
 * This class is used to encapsulate the data required for updating an existing event.
 */
export class UpdateEventoDto {
  constructor(
    public readonly IdEvento: number,
    public readonly Nombre_Evento: string,
    public readonly fecha_inicio: Date,
    public readonly fecha_fin: Date,
    public readonly Habilitado: boolean
  ) {}

  /**
   * Returns an object containing only the properties that have been set.
   * This method is useful for creating a partial update object.
   */
  get values() {
    const returnObj: { [key: string]: any } = {};
    if (this.Nombre_Evento!== undefined)
      returnObj.Nombre_Evento = this.Nombre_Evento;
    if (this.fecha_inicio!== undefined)
      returnObj.fecha_inicio = this.fecha_inicio;
    if (this.fecha_fin!== undefined) returnObj.fecha_fin = this.fecha_fin;
    if (this.Habilitado!== undefined) returnObj.Habilitado = this.Habilitado;

    return returnObj;
  }

  /**
   * Creates a new UpdateEventoDto instance from the provided properties.
   * If any required property is missing, it returns an error message and undefined.
   *
   * @param props - An object containing the properties for the new instance.
   * @returns - An array containing an error message (if any) and the new instance (if valid).
   */
  static create(props: { [key: string]: any }): [string?, UpdateEventoDto?] {
    const { IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado } =
      props;

    if (IdEvento == null) return ["Missing IdEvento", undefined];
    if (Nombre_Evento == null) return ["Missing Nombre_Evento", undefined];
    if (fecha_inicio == null) return ["Missing fecha_inicio", undefined];
    if (fecha_fin == null) return ["Missing fecha_fin", undefined];
    if (Habilitado == null) return ["Missing Habilitado", undefined];

    return [
      undefined,
      new UpdateEventoDto(
        IdEvento,
        Nombre_Evento,
        fecha_inicio,
        fecha_fin,
        Habilitado
      ),
    ];
  }
}
