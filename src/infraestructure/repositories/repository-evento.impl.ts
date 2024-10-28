import {
  EventoDatasource,
  EventoRepository,
  CreateEventoDto,
  EventoEntity,
  UpdateEventoDto,
  PageReponseDtos,
} from "../../domain";

export class EventoRepositoryImpl implements EventoRepository {
  constructor(private readonly datasource: EventoDatasource) {}
  getEventoById(id: number): Promise<EventoEntity> {
    return this.datasource.getEventoById(id);
  }
  /**
   * Retrieves a paginated list of Eventos from the datasource.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of Eventos to return per page.
   * @returns A Promise that resolves to a PageReponseDtos containing the requested Eventos.
   * @throws Will throw an error if the datasource operation fails.
   */
  getEventos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EventoEntity>> {
    return this.datasource.getEventos(page, limit);
  }
  /**
   * Retrieves an Evento by its name from the datasource.
   *
   * @param name - The name of the Evento to retrieve.
   * @returns A Promise that resolves to the requested EventoEntity.
   * @throws Will throw an error if the datasource operation fails or if no Evento with the given name is found.
   */
  getEventoByName(name: string): Promise<EventoEntity> {
    return this.datasource.getEventoByName(name);
  }
  /**
   * Updates an existing Evento in the datasource.
   *
   * @param item - The UpdateEventoDto containing the updated data for the Evento.
   * @returns A Promise that resolves to the updated EventoEntity.
   * @throws Will throw an error if the datasource operation fails or if no Evento with the given ID is found.
   */
  updateEvento(item: UpdateEventoDto): Promise<EventoEntity> {
    return this.datasource.updateEvento(item);
  }
  /**
   * Deletes an Evento from the datasource by its ID.
   *
   * @param id - The ID of the Evento to delete.
   * @returns A Promise that resolves to the deleted EventoEntity.
   * @throws Will throw an error if the datasource operation fails or if no Evento with the given ID is found.
   */
  deleteEvento(id: number): Promise<EventoEntity> {
    return this.datasource.deleteEvento(id);
  }
  /**
   * Creates a new Evento in the datasource.
   *
   * @param createEventoDto - The CreateEventoDto containing the data for the new Evento.
   * @returns A Promise that resolves to the newly created EventoEntity.
   * @throws Will throw an error if the datasource operation fails.
   */
  createEvento(createEventoDto: CreateEventoDto): Promise<EventoEntity> {
    return this.datasource.createEvento(createEventoDto);
  }
}
