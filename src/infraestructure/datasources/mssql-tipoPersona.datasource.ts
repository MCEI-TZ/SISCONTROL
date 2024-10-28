import { prisma } from "../../data/mssql";
import {
  TipoPersonaDatasource,
  CreateTipoPersonDto,
  CustomError,
  PageReponseDtos,
  TipoPersonaEntity,
  UpdateTipoPersonaDto,
} from "../../domain";

export class TipoPersonaDatasourceImpl implements TipoPersonaDatasource {
  /**
   * Creates a new TipoPersona in the database.
   *
   * @param createTipoPersonaDto - The data for the new TipoPersona.
   * @returns A promise that resolves to the created TipoPersonaEntity.
   * @throws CustomError if the creation fails.
   */
  async createTipoPersona(
    createTipoPersonaDto: CreateTipoPersonDto
  ): Promise<TipoPersonaEntity> {
    const tipoPersona = await prisma.tipoPersona.create({
      data: createTipoPersonaDto!,
    });
    return TipoPersonaEntity.fromObject(tipoPersona);
  }
  /**
   * Retrieves a paginated list of TipoPersona entities from the database.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of entities to return per page.
   * @returns A promise that resolves to a PageReponseDtos object containing the requested page of TipoPersona entities.
   * @throws CustomError if the retrieval fails.
   */
  async getTiposPersonas(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoPersonaEntity>> {
    // Calculate the number of entities to skip based on the page and limit
    const skip = (page - 1) * limit;

    // Retrieve the requested page of TipoPersona entities from the database
    const tiposPersonas = await prisma.tipoPersona.findMany({
      skip,
      take: limit,
    });

    // Count the total number of TipoPersona entities in the database
    const total = await prisma.tipoPersona.count();

    // Convert the retrieved entities to TipoPersonaEntity objects
    const data = tiposPersonas.map((tipoPersona) =>
      TipoPersonaEntity.fromObject(tipoPersona)
    );

    // Create a PageReponseDtos object with the requested page of entities and additional metadata
    const res: PageReponseDtos<TipoPersonaEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };

    // Return the PageReponseDtos object
    return res;
  }
  /**
   * Retrieves a TipoPersona entity by its name from the database.
   *
   * @param name - The name of the TipoPersona to retrieve.
   * @returns A promise that resolves to the retrieved TipoPersonaEntity.
   * @throws CustomError if the TipoPersona with the given name is not found.
   */
  async getTipoPersonaByName(name: string): Promise<TipoPersonaEntity> {
    // Use Prisma to find the first TipoPersona entity with the given name
    const tipoPersona = await prisma.tipoPersona.findFirst({
      where: { Descripcion: name },
    });

    // If no TipoPersona entity is found, throw a not found error
    if (!tipoPersona) {
      throw CustomError.notFound(`TipoPersona with name ${name} not found`);
    }

    // Convert the retrieved entity to a TipoPersonaEntity object and return it
    return TipoPersonaEntity.fromObject(tipoPersona);
  }
  /**
   * Updates an existing TipoPersona in the database.
   *
   * @param updateTipoPersonaDto - The data for the TipoPersona to update.
   * @returns A promise that resolves to the updated TipoPersonaEntity.
   * @throws CustomError if the TipoPersona with the given id is not found.
   *
   * @remarks
   * This method first checks if a TipoPersona with the given id exists in the database.
   * If it does, it updates the TipoPersona with the provided data and returns the updated entity.
   * If the TipoPersona is not found, it throws a not found error.
   */
  async updateTipoPersona(
    updateTipoPersonaDto: UpdateTipoPersonaDto
  ): Promise<TipoPersonaEntity> {
    await this.getTipoPersonaById(updateTipoPersonaDto.IdTipo); // Ensure the TipoPersona exists before updating

    // Use Prisma to update the TipoPersona entity with the provided data
    const updateTipoPersona = await prisma.tipoPersona.update({
      where: { IdTipo: updateTipoPersonaDto.IdTipo },
      data: updateTipoPersonaDto!.values,
    });

    // Convert the updated entity to a TipoPersonaEntity object and return it
    return TipoPersonaEntity.fromObject(updateTipoPersona);
  }
  /**
   * Deletes a TipoPersona from the database by its id.
   *
   * @param id - The id of the TipoPersona to delete.
   * @returns A promise that resolves to the deleted TipoPersonaEntity.
   * @throws CustomError if the TipoPersona with the given id is not found.
   *
   * @remarks
   * This method first checks if a TipoPersona with the given id exists in the database.
   * If it does, it deletes the TipoPersona and returns the deleted entity.
   * If the TipoPersona is not found, it throws a not found error.
   */
  async deleteTipoPersona(id: number): Promise<TipoPersonaEntity> {
    // Ensure the TipoPersona exists before deleting
    await this.getTipoPersonaById(id);

    // Use Prisma to delete the TipoPersona entity with the given id
    const deleteTipoPersona = await prisma.tipoPersona.delete({
      where: { IdTipo: id },
    });

    // Convert the deleted entity to a TipoPersonaEntity object and return it
    return TipoPersonaEntity.fromObject(deleteTipoPersona);
  }
  /**
   * Retrieves a TipoPersona entity by its id from the database.
   *
   * @param id - The id of the TipoPersona to retrieve.
   * @returns A promise that resolves to the retrieved TipoPersonaEntity.
   * @throws CustomError if the TipoPersona with the given id is not found.
   *
   * @remarks
   * This method first checks if a TipoPersona with the given id exists in the database.
   * If it does, it returns the retrieved entity.
   * If the TipoPersona is not found, it throws a not found error.
   */
  async getTipoPersonaById(id: number): Promise<TipoPersonaEntity> {
    const tipoPersona = await prisma.tipoPersona.findFirst({
      where: { IdTipo: id },
    });

    // If no TipoPersona entity is found, throw a not found error
    if (!tipoPersona) {
      throw CustomError.notFound(`TipoPersona with id ${id} not found`);
    }

    // Convert the retrieved entity to a TipoPersonaEntity object and return it
    return TipoPersonaEntity.fromObject(tipoPersona);
  }
}
