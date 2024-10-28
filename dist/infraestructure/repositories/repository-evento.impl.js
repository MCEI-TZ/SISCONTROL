"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoRepositoryImpl = void 0;
class EventoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    getEventoById(id) {
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
    getEventos(page, limit) {
        return this.datasource.getEventos(page, limit);
    }
    /**
     * Retrieves an Evento by its name from the datasource.
     *
     * @param name - The name of the Evento to retrieve.
     * @returns A Promise that resolves to the requested EventoEntity.
     * @throws Will throw an error if the datasource operation fails or if no Evento with the given name is found.
     */
    getEventoByName(name) {
        return this.datasource.getEventoByName(name);
    }
    /**
     * Updates an existing Evento in the datasource.
     *
     * @param item - The UpdateEventoDto containing the updated data for the Evento.
     * @returns A Promise that resolves to the updated EventoEntity.
     * @throws Will throw an error if the datasource operation fails or if no Evento with the given ID is found.
     */
    updateEvento(item) {
        return this.datasource.updateEvento(item);
    }
    /**
     * Deletes an Evento from the datasource by its ID.
     *
     * @param id - The ID of the Evento to delete.
     * @returns A Promise that resolves to the deleted EventoEntity.
     * @throws Will throw an error if the datasource operation fails or if no Evento with the given ID is found.
     */
    deleteEvento(id) {
        return this.datasource.deleteEvento(id);
    }
    /**
     * Creates a new Evento in the datasource.
     *
     * @param createEventoDto - The CreateEventoDto containing the data for the new Evento.
     * @returns A Promise that resolves to the newly created EventoEntity.
     * @throws Will throw an error if the datasource operation fails.
     */
    createEvento(createEventoDto) {
        return this.datasource.createEvento(createEventoDto);
    }
}
exports.EventoRepositoryImpl = EventoRepositoryImpl;
