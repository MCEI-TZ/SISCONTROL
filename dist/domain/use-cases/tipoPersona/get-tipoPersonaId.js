"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTipoPersonaId = void 0;
class GetTipoPersonaId {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to retrieve a specific `TipoPersonaEntity` by its ID.
     *
     * @param id - The unique identifier of the `TipoPersonaEntity` to retrieve.
     * @returns A Promise that resolves to the retrieved `TipoPersonaEntity`.
     * @throws Will throw an error if the `TipoPersonaEntity` with the given ID does not exist.
     */
    execute(id) {
        return this.repository.getTipoPersonaById(id);
    }
}
exports.GetTipoPersonaId = GetTipoPersonaId;
