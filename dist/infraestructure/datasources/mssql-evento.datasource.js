"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class EventoDatasourceImpl {
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
    getEventoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const evento = yield mssql_1.prisma.evento.findFirst({
                where: {
                    IdEvento: id,
                },
            });
            if (!evento)
                throw domain_1.CustomError.notFound(`Evento with id ${id} not found`);
            return domain_1.EventoEntity.fromObject(evento);
        });
    }
    /**
     * Retrieves an Evento by its name.
     *
     * @param name - The name of the Evento to retrieve.
     * @returns A Promise that resolves to the EventoEntity if found, otherwise throws a CustomError.
     * @throws CustomError - If the Evento with the given name is not found.
     */
    getEventoByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const evento = yield mssql_1.prisma.evento.findFirst({
                where: {
                    Nombre_Evento: name,
                },
            });
            if (!evento)
                throw domain_1.CustomError.notFound(`Evento with name ${name} not found`);
            return domain_1.EventoEntity.fromObject(evento);
        });
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
    updateEvento(updateEventoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateEvento = yield mssql_1.prisma.evento.update({
                where: { IdEvento: updateEventoDto.IdEvento },
                data: updateEventoDto.values,
            });
            return domain_1.EventoEntity.fromObject(updateEvento);
        });
    }
    deleteEvento(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteEvento = yield mssql_1.prisma.evento.delete({
                where: { IdEvento: id },
            });
            return domain_1.EventoEntity.fromObject(deleteEvento);
        });
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
    createEvento(createEventoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const evento = yield mssql_1.prisma.evento.create({
                data: createEventoDto,
            });
            return domain_1.EventoEntity.fromObject(evento);
        });
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
    getEventos(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const eventos = yield mssql_1.prisma.evento.findMany({
                skip: skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.evento.count();
            const data = eventos.map((evento) => domain_1.EventoEntity.fromObject(evento));
            const res = {
                data: data,
                limit: limit,
                next: page + 1,
                prev: page - 1,
                page,
                total: total,
            };
            return res;
        });
    }
}
exports.EventoDatasourceImpl = EventoDatasourceImpl;
