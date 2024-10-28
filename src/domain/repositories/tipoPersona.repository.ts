import { CreateTipoPersonDto } from "../dtos/tipoPersona/create-tipoPersona.dto";
import { UpdateTipoPersonaDto } from "../dtos/tipoPersona/update-tipoPersona.dto";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { TipoPersonaEntity } from "../entities/tipoPersona.entity";

export abstract class TipoPersonaRepository {
  /**
   * Creates a new TipoPersonaEntity based on the provided CreateTipoPersonDto.
   *
   * @param createTipoPersonDto - The data transfer object containing the necessary information to create a new TipoPersonaEntity.
   * @returns A promise that resolves to the newly created TipoPersonaEntity.
   */
  abstract createTipoPersona(
    createTipoPersonaDto: CreateTipoPersonDto
  ): Promise<TipoPersonaEntity>;
  /**
   * Retrieves a paginated list of TipoPersonaEntity instances based on the provided page and limit.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of TipoPersonaEntity instances to include in the response.
   * @returns A promise that resolves to a PageReponseDtos object containing the requested TipoPersonaEntity instances and pagination metadata.
   */
  /**
   * Retrieves a paginated list of TipoPersonaEntity instances based on the provided page and limit.
   *
   * @param page - The page number to retrieve. Must be a positive integer.
   * @param limit - The maximum number of TipoPersonaEntity instances to include in the response. Must be a positive integer.
   * @returns A promise that resolves to a PageReponseDtos object containing the requested TipoPersonaEntity instances and pagination metadata.
   * The PageReponseDtos object includes the following properties:
   * - `data`: An array of TipoPersonaEntity instances.
   * - `page`: The current page number.
   * - `limit`: The maximum number of TipoPersonaEntity instances per page.
   * - `total`: The total number of TipoPersonaEntity instances.
   * - `pages`: The total number of pages.
   */
  abstract getTiposPersonas(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoPersonaEntity>>;
  /**
   * Retrieves a TipoPersonaEntity instance based on the provided name.
   *
   * @param name - The name of the TipoPersonaEntity to retrieve.
   * @returns A promise that resolves to the requested TipoPersonaEntity instance.
   *
   * @throws {Error} If an error occurs during the retrieval process.
   *
   * @example
   * ```typescript
   * const tipoPersonaDatasource = new MyTipoPersonaDatasource();
   * const tipoPersona = await tipoPersonaDatasource.getTipoPersonaByName('Cliente');
   * console.log(tipoPersona); // Output: { id: 1, name: 'Cliente',... }
   * ```
   */
  abstract getTipoPersonaByName(name: string): Promise<TipoPersonaEntity>;
  /**
   * Updates an existing TipoPersonaEntity based on the provided UpdateTipoPersonaDto.
   *
   * @param updateTipoPersonaDto - The data transfer object containing the necessary information to update an existing TipoPersonaEntity.
   * @returns A promise that resolves to the updated TipoPersonaEntity.
   *
   * @throws {Error} If an error occurs during the update process.
   *
   * @example
   * ```typescript
   * const tipoPersonaDatasource = new MyTipoPersonaDatasource();
   * const updatedTipoPersona = await tipoPersonaDatasource.updateTipoPersona({ id: 1, name: 'Cliente Nuevo',... });
   * console.log(updatedTipoPersona); // Output: { id: 1, name: 'Cliente Nuevo',... }
   * ```
   */
  abstract updateTipoPersona(
    updateTipoPersonaDto: UpdateTipoPersonaDto
  ): Promise<TipoPersonaEntity>;
  /**
   * Deletes a TipoPersonaEntity based on the provided ID.
   *
   * @param id - The ID of the TipoPersonaEntity to delete.
   * @returns A promise that resolves to the deleted TipoPersonaEntity.
   *
   * @throws {Error} If an error occurs during the deletion process.
   *
   * @example
   * ```typescript
   * const tipoPersonaDatasource = new MyTipoPersonaDatasource();
   * const deletedTipoPersona = await tipoPersonaDatasource.deleteTipoPersona(1);
   * console.log(deletedTipoPersona); // Output: { id: 1, name: 'Cliente',... }
   * ```
   */
  abstract deleteTipoPersona(id: number): Promise<TipoPersonaEntity>;
  /**
   * Retrieves a TipoPersonaEntity instance based on the provided ID.
   *
   * @param id - The ID of the TipoPersonaEntity to retrieve. Must be a positive integer.
   * @returns A promise that resolves to the requested TipoPersonaEntity instance.
   *
   * @throws {Error} If an error occurs during the retrieval process.
   *
   * @example
   * ```typescript
   * const tipoPersonaDatasource = new MyTipoPersonaDatasource();
   * const tipoPersona = await tipoPersonaDatasource.getTipoPersonaById(1);
   * console.log(tipoPersona); // Output: { id: 1, name: 'Cliente',... }
   * ```
   */
  abstract getTipoPersonaById(id: number): Promise<TipoPersonaEntity>;
}
