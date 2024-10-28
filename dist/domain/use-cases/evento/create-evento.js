"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvento = void 0;
class CreateEvento {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to create a new Evento.
     *
     * @param dto - The data transfer object containing the necessary information to create a new Evento.
     * @returns A Promise that resolves to the newly created EventoEntity.
     *
     * @throws Will throw an error if the Evento creation fails.
     */
    execute(dto) {
        return this.repository.createEvento(dto);
    }
}
exports.CreateEvento = CreateEvento;
