"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAsunto = void 0;
class CreateAsunto {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the use case to create a new Asunto.
     *
     * @param dto - The data transfer object containing the necessary information to create a new Asunto.
     * @returns A promise that resolves to the newly created AsuntoEntity.
     * @throws An error if the creation fails.
     */
    execute(dto) {
        return this.repository.createAsunto(dto);
    }
}
exports.CreateAsunto = CreateAsunto;
