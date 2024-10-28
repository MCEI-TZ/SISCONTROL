export class CreateEventoDto {
  constructor(
    public Nombre_Evento: string,
    public fecha_inicio: Date,
    public fecha_fin: Date,
    public Habilitado: boolean
  ) {}

  /**
 * A static method to create a new instance of CreateEventoDto.
 * Validates the input properties and returns a tuple containing an error message and the instance if valid.
 *
 * @param props - An object containing the properties to initialize the CreateEventoDto instance.
 * @returns A tuple containing an error message (string) and the CreateEventoDto instance (or undefined if there was an error).
 *
 * @example
 * ```typescript
 * const [error, evento] = CreateEventoDto.create({
 *   Nombre_Evento: 'My Event',
 *   fecha_inicio: new Date('2022-01-01'),
 *   fecha_fin: new Date('2022-01-02'),
 *   Habilitado: true,
 * });
 * if (error) {
 *   console.error(error);
 * } else {
 *   console.log(evento);
 * }
 * ```
 */
static create(props: { [key: string]: any }): [string?, CreateEventoDto?] {
  const { Nombre_Evento, fecha_inicio, fecha_fin, Habilitado } = props;

  if (Nombre_Evento == null) return ["Missing Nombre_Evento", undefined];
  if (fecha_inicio == null) return ["Missing fecha_inicio", undefined];
  if (fecha_fin == null) return ["Missing fecha_fin", undefined];
  if (Habilitado == null) return ["Missing Habilitado", undefined];

  return [
    undefined,
    new CreateEventoDto(
      Nombre_Evento,
      fecha_inicio,
      fecha_fin,
      Habilitado
    ),
  ];
}
}
