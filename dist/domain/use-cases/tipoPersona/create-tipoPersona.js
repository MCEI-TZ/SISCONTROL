"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTipoPersona = void 0;
class CreateTipoPersona {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to create a new tipo de persona.
     *
     * @param dto - The data transfer object containing the necessary information to create a new tipo de persona.
     * @returns A promise that resolves to the newly created tipo de persona entity.
     * @throws Throws an error if the creation fails.
     */
    execute(dto) {
        return this.repository.createTipoPersona(dto);
    }
}
exports.CreateTipoPersona = CreateTipoPersona;
