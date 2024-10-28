"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsuntoRepositoryImpl = void 0;
class AsuntoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    /**
     * Retrieves an AsuntoEntity by its unique identifier.
     *
     * @param id - The unique identifier of the AsuntoEntity to retrieve.
     * @returns A Promise that resolves to the AsuntoEntity with the specified id.
     * @throws Will throw an error if the AsuntoEntity with the specified id does not exist.
     */
    getAsuntoById(id) {
        return this.datasource.getAsuntoById(id);
    }
    /**
     * Creates a new AsuntoEntity based on the provided CreateAsuntoDto.
     *
     * @param createAsuntoDto - The data transfer object containing the necessary information to create a new AsuntoEntity.
     * @returns A Promise that resolves to the newly created AsuntoEntity.
     * @throws Will throw an error if the creation fails due to any reason.
     */
    createAsunto(createAsuntoDto) {
        return this.datasource.createAsunto(createAsuntoDto);
    }
    /**
     * Retrieves a paginated list of AsuntoEntities based on the provided page and limit.
     *
     * @param page - The page number to retrieve.
     * @param limit - The maximum number of AsuntoEntities to include in the response.
     * @returns A Promise that resolves to a PageReponseDtos containing the requested AsuntoEntities.
     * @throws Will throw an error if the retrieval fails due to any reason.
     */
    GetAsuntos(page, limit) {
        return this.datasource.GetAsuntos(page, limit);
    }
    /**
     * Retrieves an AsuntoEntity by its unique name.
     *
     * @param name - The unique name of the AsuntoEntity to retrieve.
     * @returns A Promise that resolves to the AsuntoEntity with the specified name.
     * @throws Will throw an error if the AsuntoEntity with the specified name does not exist.
     */
    getAsuntoByName(name) {
        return this.datasource.getAsuntoByName(name);
    }
    /**
     * Updates an existing AsuntoEntity based on the provided UpdateAsuntoDto.
     *
     * @param updateAsuntoDto - The data transfer object containing the necessary information to update an existing AsuntoEntity.
     * @returns A Promise that resolves to the updated AsuntoEntity.
     * @throws Will throw an error if the update fails due to any reason.
     */
    updateAsunto(updateAsuntoDto) {
        return this.datasource.updateAsunto(updateAsuntoDto);
    }
    /**
     * Deletes an AsuntoEntity based on the provided unique identifier.
     *
     * @param id - The unique identifier of the AsuntoEntity to delete.
     * @returns A Promise that resolves to the deleted AsuntoEntity.
     * @throws Will throw an error if the deletion fails due to any reason.
     */
    deleteAsunto(id) {
        return this.datasource.deleteAsunto(id);
    }
}
exports.AsuntoRepositoryImpl = AsuntoRepositoryImpl;
