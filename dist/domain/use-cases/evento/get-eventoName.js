"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventoName = void 0;
class GetEventoName {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the GetEvento use case.
     *
     * @param name - The name of the Evento to retrieve.
     * @returns A Promise that resolves to the EventoEntity if found, otherwise rejects.
     *
     * @throws Will throw an error if the repository method `getEventoByName` fails.
     */
    execute(name) {
        return this.repository.getEventoByName(name);
    }
}
exports.GetEventoName = GetEventoName;
