import { AsuntoRepository } from "../../repositories/asunto.repository";
import { AsuntoEntity } from "../../entities/asunto.entity";
export interface GetAsuntoIdUseCase {
  execute(id: number): Promise<AsuntoEntity>;
}
/**
 * A class that implements the GetAsuntoIdUseCase interface.
 * This class is responsible for retrieving a single AsuntoEntity by its ID.
 */
export class GetAsuntoId implements GetAsuntoIdUseCase {
  /**
   * Constructor for the GetAsuntoId class.
   *
   * @param repository - An instance of AsuntoRepository, used to interact with the database.
   */
  constructor(private readonly repository: AsuntoRepository) {}

  /**
   * Executes the use case to retrieve a single AsuntoEntity by its ID.
   *
   * @param id - The ID of the AsuntoEntity to retrieve.
   * @returns A Promise that resolves to the retrieved AsuntoEntity.
   */
  execute(id: number): Promise<AsuntoEntity> {
    return this.repository.getAsuntoById(id);
  }
}
