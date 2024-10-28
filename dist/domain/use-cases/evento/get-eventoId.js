"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventoId = void 0;
class GetEventoId {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the GetEventoId use case.
     *
     * @param id - The id of the Evento to retrieve.
     * @returns A Promise that resolves to the EventoEntity if found, otherwise rejects.
     *
     * @throws Will throw an error if the repository method `getEventoById` fails.
     */
    execute(id) {
        return this.repository.getEventoById(id);
    }
}
exports.GetEventoId = GetEventoId;
