"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAsuntoName = void 0;
/**
 * This class implements the GetAsuntoNameUseCase interface.
 * It is responsible for retrieving an AsuntoEntity by its name.
 */
class GetAsuntoName {
    /**
     * Constructor for the GetAsuntoName class.
     *
     * @param repository - An instance of AsuntoRepository to interact with the database.
     */
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to retrieve an AsuntoEntity by its name.
     *
     * @param name - The name of the AsuntoEntity to retrieve.
     * @returns A Promise that resolves to the AsuntoEntity with the given name.
     */
    execute(name) {
        return this.repository.getAsuntoByName(name);
    }
}
exports.GetAsuntoName = GetAsuntoName;
