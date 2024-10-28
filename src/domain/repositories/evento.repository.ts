import { CreateEventoDto } from "../dtos/evento/create-evento.dto";
import { UpdateEventoDto } from "../dtos/evento/update-evento.dto";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { EventoEntity } from "../entities/evento.entity";

export abstract class EventoRepository {
  /**
   * Creates a new Evento based on the provided CreateEventoDto.
   *
   * @param evento - The CreateEventoDto containing the necessary data to create a new Evento.
   * @returns A Promise that resolves to the newly created EventoEntity.
   */
  abstract createEvento(evento: CreateEventoDto): Promise<EventoEntity>;
  /**
   * Retrieves a paginated list of Eventos based on the provided page and limit.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of Eventos to return per page.
   * @returns A Promise that resolves to a PageReponseDtos containing the requested Eventos.
   * @throws Will throw an error if the page or limit is invalid.
   */
  abstract getEventos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EventoEntity>>;
  /**
   * Retrieves an Evento based on the provided name.
   *
   * @param name - The name of the Evento to retrieve.
   * @returns A Promise that resolves to the EventoEntity with the matching name.
   * @throws Will throw an error if no Evento is found with the provided name.
   */
  abstract getEventoByName(name: string): Promise<EventoEntity>;
  /**
   * Updates an existing Evento based on the provided UpdateEventoDto.
   *
   * @param item - The UpdateEventoDto containing the necessary data to update an existing Evento.
   * @returns A Promise that resolves to the updated EventoEntity.
   * @throws Will throw an error if no Evento is found with the provided id in the UpdateEventoDto.
   */
  abstract updateEvento(item: UpdateEventoDto): Promise<EventoEntity>;
  /**
   * Deletes an existing Evento based on the provided id.
   *
   * @param id - The unique identifier of the Evento to delete.
   * @returns A Promise that resolves to the deleted EventoEntity.
   * @throws Will throw an error if no Evento is found with the provided id.
   */
  abstract deleteEvento(id: number): Promise<EventoEntity>;

  /**
   * Abstract method to retrieve an event by its unique identifier.
   *
   * @param id - The unique identifier of the event to retrieve.
   * @returns A Promise that resolves to the EventoEntity object representing the event, or undefined if the event is not found.
   */
  abstract getEventoById(id: number): Promise<EventoEntity>;
}
