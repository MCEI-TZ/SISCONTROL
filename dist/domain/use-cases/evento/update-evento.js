"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEvento = void 0;
class UpdateEvento {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the update operation for an Evento.
     *
     * @param dto - The data transfer object containing the updated information for the Evento.
     * @returns A Promise that resolves to the updated EventoEntity.
     *
     * @throws Will throw an error if the Evento does not exist or if there are any validation errors.
     *
     * @remarks
     * This method is responsible for updating an existing Evento in the database.
     * It uses the provided UpdateEventoDto to perform the update operation.
     *
     * @example
     * ```typescript
     * const updateDto: UpdateEventoDto = { id: 1, name: 'New Event Name',... };
     * const updatedEvento = await updateEventoUseCase.execute(updateDto);
     * console.log(updatedEvento); // Output: { id: 1, name: 'New Event Name',... }
     * ```
     */
    execute(dto) {
        return this.repository.updateEvento(dto);
    }
}
exports.UpdateEvento = UpdateEvento;
