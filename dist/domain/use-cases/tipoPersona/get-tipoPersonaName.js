"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTipoPersonaName = void 0;
class GetTipoPersonaName {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to get a {@link TipoPersonaEntity} by its name.
     *
     * @param name - The name of the {@link TipoPersonaEntity} to retrieve.
     * @returns A promise that resolves to the {@link TipoPersonaEntity} with the given name.
     * @throws Throws an error if no {@link TipoPersonaEntity} is found with the given name.
     */
    execute(name) {
        return this.repository.getTipoPersonaByName(name);
    }
}
exports.GetTipoPersonaName = GetTipoPersonaName;
