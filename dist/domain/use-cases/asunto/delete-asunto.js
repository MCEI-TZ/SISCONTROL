"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAsunto = void 0;
class DeleteAsunto {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the delete operation for an AsuntoEntity based on the provided ID.
     *
     * @param id - The unique identifier of the AsuntoEntity to be deleted.
     * @returns A Promise that resolves to the deleted AsuntoEntity.
     * @throws Will throw an error if the AsuntoEntity with the given ID does not exist.
     */
    execute(id) {
        return this.repository.deleteAsunto(id);
    }
}
exports.DeleteAsunto = DeleteAsunto;
