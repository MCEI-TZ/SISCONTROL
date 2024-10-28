import { AsuntoRepository } from "../../repositories/asunto.repository";
import { AsuntoEntity } from "../../entities/asunto.entity";
export interface GetAsuntoNameUseCase {
  execute(name: string): Promise<AsuntoEntity>;
}
/**
 * This class implements the GetAsuntoNameUseCase interface.
 * It is responsible for retrieving an AsuntoEntity by its name.
 */
export class GetAsuntoName implements GetAsuntoNameUseCase {
  /**
   * Constructor for the GetAsuntoName class.
   *
   * @param repository - An instance of AsuntoRepository to interact with the database.
   */
  constructor(private readonly repository: AsuntoRepository) {}

  /**
   * Executes the use case to retrieve an AsuntoEntity by its name.
   *
   * @param name - The name of the AsuntoEntity to retrieve.
   * @returns A Promise that resolves to the AsuntoEntity with the given name.
   */
  execute(name: string): Promise<AsuntoEntity> {
    return this.repository.getAsuntoByName(name);
  }
}
