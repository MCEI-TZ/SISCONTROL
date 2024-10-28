"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTiposPersonas = void 0;
class GetTiposPersonas {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to retrieve a paginated list of {@link TipoPersonaEntity} instances.
     *
     * @param page - The page number to retrieve.
     * @param limit - The maximum number of items to include in each page.
     *
     * @returns A promise that resolves to a {@link PageReponseDtos} containing the requested page of {@link TipoPersonaEntity} instances.
     */
    execute(page, limit) {
        return this.repository.getTiposPersonas(page, limit);
    }
}
exports.GetTiposPersonas = GetTiposPersonas;
