import { CreateEventoDto } from "../dtos/evento/create-evento.dto";
import { UpdateEventoDto } from "../dtos/evento/update-evento.dto";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { EventoEntity } from "../entities/evento.entity";

export abstract class EventoDatasource {
  /**
   * Abstract method to create a new event.
   *
   * @param evento - The event data to be created.
   * @returns A Promise that resolves to the newly created event entity.
   */
  abstract createEvento(evento: CreateEventoDto): Promise<EventoEntity>;
  /**
   * Abstract method to retrieve a list of events.
   *
   * @param page - The page number to retrieve.
   * @param limit - The number of events to retrieve per page.
   * @returns A Promise that resolves to a PageResponseDtos object containing the list of events and pagination information.
   */
  abstract getEventos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EventoEntity>>;
  /**
   * Abstract method to retrieve an event by its name.
   *
   * @param name - The name of the event to retrieve.
   * @returns A Promise that resolves to the EventoEntity object representing the event, or undefined if the event is not found.
   */
  abstract getEventoByName(name: string): Promise<EventoEntity>;
  /**
   * Abstract method to update an event.
   *
   * @param item - The updated event data.
   * @returns A Promise that resolves to the updated EventoEntity object.
   */
  abstract updateEvento(item: UpdateEventoDto): Promise<EventoEntity>;
  /**
   * Abstract method to delete an event.
   *
   * @param id - The unique identifier of the event to be deleted.
   * @returns A Promise that resolves to the deleted EventoEntity object.
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
