"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoPersona = void 0;
class UpdateTipoPersona {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the update operation for a {@link TipoPersonaEntity} using the provided {@link UpdateTipoPersonaDto}.
     *
     * @param dto - The {@link UpdateTipoPersonaDto} containing the updated data for the {@link TipoPersonaEntity}.
     * @returns A Promise that resolves to the updated {@link TipoPersonaEntity}.
     * @throws Will throw an error if the update operation fails.
     */
    execute(dto) {
        return this.repository.updateTipoPersona(dto);
    }
}
exports.UpdateTipoPersona = UpdateTipoPersona;
