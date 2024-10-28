"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventos = void 0;
class GetEventos {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the GetEventos use case.
     * Fetches a paginated list of EventoEntities from the repository.
     *
     * @param page - The page number for pagination.
     * @param limit - The number of records per page.
     *
     * @returns A Promise that resolves to a PageReponseDtos containing EventoEntities.
     *
     * @throws Will throw an error if the repository fails to fetch the data.
     */
    execute(page, limit) {
        return this.repository.getEventos(page, limit);
    }
}
exports.GetEventos = GetEventos;
