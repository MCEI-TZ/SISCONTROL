import {
  TipoPersonaRepository,
  TipoPersonaDatasource,
  TipoPersonaEntity,
  CreateTipoPersonDto,
  UpdateTipoPersonaDto,
  PageReponseDtos,
} from "../../domain";
export class TipoPersonaRepositoryImpl implements TipoPersonaRepository {
  constructor(private readonly datasource: TipoPersonaDatasource) {}
  /**
   * Creates a new TipoPersonaEntity in the database.
   *
   * @param createTipoPersonaDto - The data required to create a new TipoPersonaEntity.
   * @returns A Promise that resolves to the newly created TipoPersonaEntity.
   * @throws Throws an error if the creation fails.
   */
  createTipoPersona(
    createTipoPersonaDto: CreateTipoPersonDto
  ): Promise<TipoPersonaEntity> {
    return this.datasource.createTipoPersona(createTipoPersonaDto);
  }
  /**
   * Retrieves a paginated list of TipoPersonaEntity from the database.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of records to return per page.
   * @returns A Promise that resolves to a PageReponseDtos containing the list of TipoPersonaEntity and pagination metadata.
   * @throws Throws an error if the retrieval fails.
   */
  getTiposPersonas(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoPersonaEntity>> {
    return this.datasource.getTiposPersonas(page, limit);
  }
  /**
   * Retrieves a TipoPersonaEntity by its name from the database.
   *
   * @param name - The name of the TipoPersonaEntity to retrieve.
   * @returns A Promise that resolves to the retrieved TipoPersonaEntity.
   * @throws Throws an error if the retrieval fails or if no TipoPersonaEntity with the given name exists.
   */
  getTipoPersonaByName(name: string): Promise<TipoPersonaEntity> {
    return this.datasource.getTipoPersonaByName(name);
  }
  /**
   * Updates an existing TipoPersonaEntity in the database.
   *
   * @param updateTipoPersonaDto - The data required to update the existing TipoPersonaEntity.
   * @returns A Promise that resolves to the updated TipoPersonaEntity.
   * @throws Throws an error if the update fails or if no TipoPersonaEntity with the given ID exists.
   */
  updateTipoPersona(
    updateTipoPersonaDto: UpdateTipoPersonaDto
  ): Promise<TipoPersonaEntity> {
    return this.datasource.updateTipoPersona(updateTipoPersonaDto);
  }
  /**
   * Deletes a TipoPersonaEntity from the database by its ID.
   *
   * @param id - The ID of the TipoPersonaEntity to delete.
   * @returns A Promise that resolves to the deleted TipoPersonaEntity.
   * @throws Throws an error if the deletion fails or if no TipoPersonaEntity with the given ID exists.
   */
  deleteTipoPersona(id: number): Promise<TipoPersonaEntity> {
    return this.datasource.deleteTipoPersona(id);
  }
  /**
   * Retrieves a TipoPersonaEntity by its ID from the database.
   *
   * @param id - The ID of the TipoPersonaEntity to retrieve.
   * @returns A Promise that resolves to the retrieved TipoPersonaEntity.
   * @throws Throws an error if the retrieval fails or if no TipoPersonaEntity with the given ID exists.
   */
  getTipoPersonaById(id: number): Promise<TipoPersonaEntity> {
    return this.datasource.getTipoPersonaById(id);
  }
}
