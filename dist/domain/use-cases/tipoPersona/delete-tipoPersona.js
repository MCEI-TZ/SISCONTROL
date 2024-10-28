"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTipoPersona = void 0;
class DeleteTipoPersona {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the delete operation for a specific tipoPersona by its id.
     *
     * @param id - The unique identifier of the tipoPersona to be deleted.
     * @returns A promise that resolves to the deleted tipoPersona entity.
     * @throws Will throw an error if the tipoPersona with the given id does not exist.
     */
    execute(id) {
        return this.repository.deleteTipoPersona(id);
    }
}
exports.DeleteTipoPersona = DeleteTipoPersona;
