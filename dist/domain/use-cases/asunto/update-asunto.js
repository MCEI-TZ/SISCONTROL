"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsunto = void 0;
class UpdateAsunto {
    constructor(repository) {
        this.repository = repository;
    }
    /**
     * Executes the update operation for an AsuntoEntity using the provided UpdateAsuntoDto.
     *
     * @param dto - The data transfer object containing the updated information for the AsuntoEntity.
     * @returns A Promise that resolves to the updated AsuntoEntity.
     * @throws Will throw an error if the update operation fails.
     */
    execute(dto) {
        return this.repository.updateAsunto(dto);
    }
}
exports.UpdateAsunto = UpdateAsunto;
