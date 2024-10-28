"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAsuntos = void 0;
class GetAsuntos {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the GetAsuntos use case.
     * Fetches a paginated list of Asuntos from the repository.
     *
     * @param page - The page number for pagination.
     * @param limit - The number of items per page.
     * @returns A Promise that resolves to a PageReponseDtos containing AsuntoEntities.
     */
    execute(page, limit) {
        return this.repository.GetAsuntos(page, limit);
    }
}
exports.GetAsuntos = GetAsuntos;
