import { prisma } from "../../data/mssql";
import {
  CreateEventoDto,
  CustomError,
  EventoDatasource,
  EventoEntity,
  PageReponseDtos,
  UpdateEventoDto,
} from "../../domain";

export class EventoDatasourceImpl implements EventoDatasource {
  /**
   * Retrieves an Evento by its unique identifier.
   *
   * @param id - The unique identifier of the Evento to retrieve.
   * @returns A Promise that resolves to the EventoEntity if found, otherwise throws a CustomError.
   * @throws CustomError - If the Evento with the given id is not found.
   *
   * @remarks
   * This method uses the Prisma client to fetch the Evento from the database.
   * It takes the unique identifier `id` as a parameter and returns the corresponding EventoEntity.
   * If the Evento with the given id is not found in the database, it throws a CustomError with a not found message.
   *
   * @example
   * ```typescript
   * const eventoId = 1;
   *
   * try {
   *   const evento = await eventoDatasource.getEventoById(eventoId);
   *   console.log(evento);
   * } catch (error) {
   *   console.error(error.message);
   * }
   * ```
   */
  async getEventoById(id: number): Promise<EventoEntity> {
    const evento = await prisma.evento.findFirst({
      where: {
        IdEvento: id,
      },
    });

    if (!evento) throw CustomError.notFound(`Evento with id ${id} not found`);

    return EventoEntity.fromObject(evento);
  }
  /**
   * Retrieves an Evento by its name.
   *
   * @param name - The name of the Evento to retrieve.
   * @returns A Promise that resolves to the EventoEntity if found, otherwise throws a CustomError.
   * @throws CustomError - If the Evento with the given name is not found.
   */
  async getEventoByName(name: string): Promise<EventoEntity> {
    const evento = await prisma.evento.findFirst({
      where: {
        Nombre_Evento: name,
      },
    });

    if (!evento)
      throw CustomError.notFound(`Evento with name ${name} not found`);

    return EventoEntity.fromObject(evento);
  }

  /**
   * Updates an existing Evento in the database.
   *
   * @param updateEventoDto - The UpdateEventoDto object containing the updated data and the IdEvento to identify the Evento.
   * @returns A Promise that resolves to the updated EventoEntity.
   * @throws CustomError - If the Evento with the given IdEvento is not found.
   *
   * @remarks
   * This method uses the Prisma client to update the Evento in the database.
   * It takes the UpdateEventoDto object, which contains the updated data and the IdEvento,
   * and returns the updated EventoEntity.
   *
   * If the Evento with the given IdEvento is not found in the database,
   * it throws a CustomError with a not found message.
   *
   * @example
   * ```typescript
   * const updateEventoDto = {
   *   IdEvento: 1,
   *   values: {
   *     Nombre_Evento: 'New Event Name',
   *     //... other updated fields
   *   },
   * };
   *
   * const updatedEvento = await eventoDatasource.updateEvento(updateEventoDto);
   * console.log(updatedEvento);
   * ```
   */
  async updateEvento(updateEventoDto: UpdateEventoDto): Promise<EventoEntity> {
    const updateEvento = await prisma.evento.update({
      where: { IdEvento: updateEventoDto.IdEvento },
      data: updateEventoDto.values,
    });
    return EventoEntity.fromObject(updateEvento);
  }

  async deleteEvento(id: number): Promise<EventoEntity> {
    const deleteEvento = await prisma.evento.delete({
      where: { IdEvento: id },
    });
    return EventoEntity.fromObject(deleteEvento);
  }

  /**
   * Creates a new Evento in the database.
   *
   * @param createEventoDto - The CreateEventoDto object containing the data for the new Evento.
   * @returns A Promise that resolves to the newly created EventoEntity.
   *
   * @remarks
   * This method uses the Prisma client to create a new Evento in the database.
   * It takes the CreateEventoDto object, which contains the data for the new Evento,
   * and returns the newly created EventoEntity.
   *
   * If any required fields are missing in the CreateEventoDto object,
   * the Prisma client will throw an error.
   *
   * @example
   * ```typescript
   * const createEventoDto = {
   *   Nombre_Evento: 'New Event',
   *   //... other required fields
   * };
   *
   * const newEvento = await eventoDatasource.createEvento(createEventoDto);
   * console.log(newEvento);
   * ```
   */
  async createEvento(createEventoDto: CreateEventoDto): Promise<EventoEntity> {
    const evento = await prisma.evento.create({
      data: createEventoDto!,
    });
    return EventoEntity.fromObject(evento);
  }

  /**
   * Retrieves a paginated list of Eventos from the database.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of Eventos to return per page.
   * @returns A Promise that resolves to a PageReponseDtos object containing the requested Eventos.
   *
   * @remarks
   * This method uses the Prisma client to retrieve a paginated list of Eventos from the database.
   * It takes two parameters: `page` and `limit`, which represent the page number and the maximum number of Eventos to return per page.
   * The method calculates the `skip` value based on the provided `page` and `limit`, and then uses these values to fetch the Eventos from the database.
   * It also retrieves the total count of Eventos using the Prisma client's `count` method.
   * Finally, it maps the fetched Eventos to EventoEntity objects and constructs a PageReponseDtos object with the requested data.
   *
   * @example
   * ```typescript
   * const page = 1;
   * const limit = 10;
   *
   * const eventosPage = await eventoDatasource.getEventos(page, limit);
   * console.log(eventosPage);
   * ```
   */
  async getEventos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EventoEntity>> {
    const skip = (page - 1) * limit;
    const eventos = await prisma.evento.findMany({
      skip: skip,
      take: limit,
    });

    const total = await prisma.evento.count();

    const data = eventos.map((evento) => EventoEntity.fromObject(evento));

    const res: PageReponseDtos<EventoEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page,
      total: total,
    };
    return res;
  }
}
