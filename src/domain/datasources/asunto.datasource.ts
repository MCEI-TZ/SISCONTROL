import { CreateAsuntoDto, UpdateAsuntoDto } from "../dtos";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { AsuntoEntity } from "../entities/asunto.entity";

export abstract class AsuntoDatasource {
  /**
   * Creates a new Asunto based on the provided CreateAsuntoDto.
   *
   * @param createAsuntoDto - The data transfer object containing the necessary information to create a new Asunto.
   * @returns A Promise that resolves to the newly created AsuntoEntity.
   */
  abstract createAsunto(
    createAsuntoDto: CreateAsuntoDto
  ): Promise<AsuntoEntity>;
  /**
   * Retrieves a paginated list of Asuntos based on the provided page and limit.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of Asuntos to include in each page.
   * @returns A Promise that resolves to a PageReponseDtos containing the requested Asuntos.
   *
   * @remarks
   * This method is used to retrieve a list of Asuntos for display purposes.
   * The returned PageReponseDtos contains the requested Asuntos, as well as pagination information.
   *
   * @throws Will throw an error if the page or limit is invalid.
   *
   * @example
   * ```typescript
   * const page = 1;
   * const limit = 10;
   * const asuntosPage = await asuntoDatasource.getAsuntos(page, limit);
   * console.log(asuntosPage.data); // Prints the Asuntos in the current page
   * console.log(asuntosPage.total); // Prints the total number of Asuntos
   * ```
   */
  abstract GetAsuntos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AsuntoEntity>>;
  /**
   * Retrieves an Asunto by its name.
   *
   * @param name - The name of the Asunto to retrieve.
   * @returns A Promise that resolves to the AsuntoEntity with the specified name.
   *
   * @remarks
   * This method is used to retrieve a specific Asunto by its name.
   * It is assumed that the name is unique within the Asuntos.
   *
   * @throws Will throw an error if no Asunto with the specified name is found.
   *
   * @example
   * ```typescript
   * const asuntoName = "Example Asunto";
   * const asunto = await asuntoDatasource.getAsuntoByName(asuntoName);
   * console.log(asunto); // Prints the Asunto with the specified name
   * ```
   */
  abstract getAsuntoByName(name: string): Promise<AsuntoEntity>;
  /**
   * Updates an existing Asunto based on the provided UpdateAsuntoDto.
   *
   * @param updateAsuntoDto - The data transfer object containing the necessary information to update an existing Asunto.
   * @returns A Promise that resolves to the updated AsuntoEntity.
   *
   * @remarks
   * This method is used to modify the details of an existing Asunto.
   * The UpdateAsuntoDto should contain the updated information for the Asunto.
   *
   * @throws Will throw an error if no Asunto with the specified ID is found.
   *
   * @example
   * ```typescript
   * const updateAsuntoDto: UpdateAsuntoDto = {
   *   id: 1,
   *   name: "Updated Asunto",
   *   //... other updated fields
   * };
   * const updatedAsunto = await asuntoDatasource.updateAsunto(updateAsuntoDto);
   * console.log(updatedAsunto); // Prints the updated Asunto
   * ```
   */
  abstract updateAsunto(
    updateAsuntoDto: UpdateAsuntoDto
  ): Promise<AsuntoEntity>;
  /**
   * Deletes an existing Asunto based on the provided ID.
   *
   * @param id - The unique identifier of the Asunto to delete.
   * @returns A Promise that resolves to the deleted AsuntoEntity.
   *
   * @remarks
   * This method is used to remove an existing Asunto from the system.
   * It is assumed that the Asunto with the specified ID exists.
   *
   * @throws Will throw an error if no Asunto with the specified ID is found.
   *
   * @example
   * ```typescript
   * const asuntoId = 1;
   * const deletedAsunto = await asuntoDatasource.deleteAsunto(asuntoId);
   * console.log(deletedAsunto); // Prints the deleted Asunto
   * ```
   */
  abstract deleteAsunto(id: number): Promise<AsuntoEntity>;
  /**
   * Retrieves an Asunto by its unique identifier.
   *
   * @param id - The unique identifier of the Asunto to retrieve.
   * @returns A Promise that resolves to the AsuntoEntity with the specified ID.
   *
   * @remarks
   * This method is used to retrieve a specific Asunto by its unique identifier.
   * It is assumed that the ID is unique within the Asuntos.
   *
   * @throws Will throw an error if no Asunto with the specified ID is found.
   *
   * @example
   * ```typescript
   * const asuntoId = 1;
   * const asunto = await asuntoDatasource.getAsuntoById(asuntoId);
   * console.log(asunto); // Prints the Asunto with the specified ID
   * ```
   */
  abstract getAsuntoById(id: number): Promise<AsuntoEntity>;
}
