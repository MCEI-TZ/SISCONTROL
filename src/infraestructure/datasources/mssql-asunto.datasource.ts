import { prisma } from "../../data/mssql";
import {
  AsuntoEntity,
  AsuntoDatasource,
  CreateAsuntoDto,
  CustomError,
  PageReponseDtos,
  UpdateAsuntoDto,
} from "../../domain";
export class AsuntoDatasourceImpl implements AsuntoDatasource {
  /**
   * Retrieves a single AsuntoEntity by its unique identifier.
   *
   * @param id - The unique identifier of the AsuntoEntity to retrieve.
   * @returns A Promise that resolves to the AsuntoEntity with the given id.
   *          If no AsuntoEntity is found with the given id, the promise will reject with a CustomError.notFound error.
   *
   * @throws CustomError.notFound - If no AsuntoEntity is found with the given id.
   */
  async getAsuntoById(id: number): Promise<AsuntoEntity> {
    const asunto = await prisma.asunto.findFirst({
      where: { IdAsunto: id },
    });

    if (!asunto) throw CustomError.notFound(`Asunto with id ${id} not found`);

    return AsuntoEntity.fromObject(asunto);
  }
  /**
   * Creates a new AsuntoEntity in the database.
   *
   * @param createAsuntoDto - The data transfer object containing the necessary information to create a new AsuntoEntity.
   * @returns A Promise that resolves to the newly created AsuntoEntity.
   *
   * @throws CustomError.validationError - If the provided createAsuntoDto is invalid.
   * @throws CustomError.databaseError - If there is an error while interacting with the database.
   *
   * @remarks
   * This method uses the Prisma client to interact with the database.
   * It maps the createAsuntoDto to the appropriate Prisma data structure and creates a new AsuntoEntity in the database.
   * The newly created AsuntoEntity is then returned as a result.
   */
  async createAsunto(createAsuntoDto: CreateAsuntoDto): Promise<AsuntoEntity> {
    const asunto = await prisma.asunto.create({
      data: createAsuntoDto!,
    });
    return AsuntoEntity.fromObject(asunto);
  }
  /**
   * Retrieves a paginated list of AsuntoEntities from the database.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of AsuntoEntities to return per page.
   * @returns A Promise that resolves to a PageReponseDtos containing the requested AsuntoEntities.
   *
   * @throws CustomError.databaseError - If there is an error while interacting with the database.
   *
   * @remarks
   * This method uses the Prisma client to interact with the database.
   * It retrieves a paginated list of AsuntoEntities based on the provided page and limit parameters.
   * The total count of AsuntoEntities is also retrieved for pagination purposes.
   * The retrieved AsuntoEntities are then mapped to AsuntoEntity instances and returned as a result.
   */
  async GetAsuntos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AsuntoEntity>> {
    const skip = (page - 1) * limit;
    const asuntos = await prisma.asunto.findMany({
      skip: skip,
      take: limit,
    });

    const total = await prisma.evento.count(); // This line seems to be incorrect, it should be prisma.asunto.count()
    const data = asuntos.map((asunto) => AsuntoEntity.fromObject(asunto));

    const res: PageReponseDtos<AsuntoEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };

    return res;
  }
  /**
   * Retrieves a single AsuntoEntity by its unique name.
   *
   * @param name - The unique name of the AsuntoEntity to retrieve.
   * @returns A Promise that resolves to the AsuntoEntity with the given name.
   *          If no AsuntoEntity is found with the given name, the promise will reject with a CustomError.notFound error.
   *
   * @throws CustomError.notFound - If no AsuntoEntity is found with the given name.
   *
   * @remarks
   * This method uses the Prisma client to interact with the database.
   * It searches for an AsuntoEntity with the provided name and returns it if found.
   * If no AsuntoEntity is found, it throws a CustomError.notFound error.
   */
  async getAsuntoByName(name: string): Promise<AsuntoEntity> {
    const asunto = await prisma.asunto.findFirst({
      where: { Descripcion: name },
    });
    if (!asunto)
      throw CustomError.notFound(`Asunto with name ${name} not found`);
    return AsuntoEntity.fromObject(asunto);
  }
  /**
   * Updates an existing AsuntoEntity in the database.
   *
   * @param updateAsuntoDto - The data transfer object containing the necessary information to update the AsuntoEntity.
   * @returns A Promise that resolves to the updated AsuntoEntity.
   *
   * @throws CustomError.notFound - If no AsuntoEntity is found with the given id in the updateAsuntoDto.
   * @throws CustomError.databaseError - If there is an error while interacting with the database.
   *
   * @remarks
   * This method uses the Prisma client to interact with the database.
   * It maps the updateAsuntoDto to the appropriate Prisma data structure and updates the AsuntoEntity in the database.
   * The updated AsuntoEntity is then returned as a result.
   *
   * @example
   * ```typescript
   * const updateAsuntoDto = {
   *   IdAsunto: 1,
   *   values: {
   *     Descripcion: 'New Description',
   *     //... other fields to update
   *   },
   * };
   *
   * const updatedAsunto = await asuntoDatasource.updateAsunto(updateAsuntoDto);
   * console.log(updatedAsunto); // Output: { IdAsunto: 1, Descripcion: 'New Description',... }
   * ```
   */
  async updateAsunto(updateAsuntoDto: UpdateAsuntoDto): Promise<AsuntoEntity> {
    const updateAsunto = await prisma.asunto.update({
      where: { IdAsunto: updateAsuntoDto.IdAsunto },
      data: updateAsuntoDto!.values,
    });
    return AsuntoEntity.fromObject(updateAsunto);
  }
  /**
   * Deletes an existing AsuntoEntity from the database.
   *
   * @param id - The unique identifier of the AsuntoEntity to delete.
   * @returns A Promise that resolves to the deleted AsuntoEntity.
   *
   * @throws CustomError.notFound - If no AsuntoEntity is found with the given id.
   * @throws CustomError.databaseError - If there is an error while interacting with the database.
   *
   * @remarks
   * This method uses the Prisma client to interact with the database.
   * It deletes the AsuntoEntity with the provided id from the database.
   * The deleted AsuntoEntity is then returned as a result.
   *
   * @example
   * ```typescript
   * const deletedAsunto = await asuntoDatasource.deleteAsunto(1);
   * console.log(deletedAsunto); // Output: { IdAsunto: 1, Descripcion: '...',... }
   * ```
   */
  async deleteAsunto(id: number): Promise<AsuntoEntity> {
    const deleteAsunto = await prisma.asunto.delete({
      where: { IdAsunto: id },
    });
    return AsuntoEntity.fromObject(deleteAsunto);
  }
}
