"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEvento = void 0;
class DeleteEvento {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the delete operation for a specific Evento by its ID.
     *
     * @param id - The unique identifier of the Evento to be deleted.
     * @returns A Promise that resolves to the deleted Evento entity.
     * @throws Will throw an error if the Evento with the given ID does not exist.
     */
    execute(id) {
        return this.repository.deleteEvento(id);
    }
}
exports.DeleteEvento = DeleteEvento;
