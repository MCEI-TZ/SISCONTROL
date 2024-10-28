"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAsuntoId = void 0;
/**
 * A class that implements the GetAsuntoIdUseCase interface.
 * This class is responsible for retrieving a single AsuntoEntity by its ID.
 */
class GetAsuntoId {
    /**
     * Constructor for the GetAsuntoId class.
     *
     * @param repository - An instance of AsuntoRepository, used to interact with the database.
     */
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to retrieve a single AsuntoEntity by its ID.
     *
     * @param id - The ID of the AsuntoEntity to retrieve.
     * @returns A Promise that resolves to the retrieved AsuntoEntity.
     */
    execute(id) {
        return this.repository.getAsuntoById(id);
    }
}
exports.GetAsuntoId = GetAsuntoId;
