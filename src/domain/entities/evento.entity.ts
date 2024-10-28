import { CustomError } from "../errors/custom.error";
export class EventoEntity {
  constructor(
    public IdEvento: number,
    public Nombre_Evento: string,
    public fecha_inicio: Date,
    public fecha_fin: Date,
    public Habilitado: boolean
  ) {}

  /**
   * Static method to create an EventoEntity instance from an object.
   * Validates the object properties and throws a CustomError if any required property is missing.
   *
   * @param object - The object to create the EventoEntity from.
   * @returns A new EventoEntity instance.
   * @throws CustomError - If any required property is missing.
   */
  public static fromObject(object: { [key: string]: any }): EventoEntity {
    const { IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado } =
      object;

    // Validate required properties
    if (Nombre_Evento == null) CustomError.badRequest("Misssing Nombre Evento");
    if (fecha_inicio == null) CustomError.badRequest("Misssing fecha Inicio");
    if (fecha_fin == null) CustomError.badRequest("Misssing fecha Fin");
    if (Habilitado == null) CustomError.badRequest("Misssing Habilitado");

    // Create and return a new EventoEntity instance
    return new EventoEntity(
      IdEvento,
      Nombre_Evento,
      fecha_inicio,
      fecha_fin,
      Habilitado
    );
  }
}
