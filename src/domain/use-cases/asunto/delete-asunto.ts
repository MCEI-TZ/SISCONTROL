import { AsuntoEntity } from "../../entities/asunto.entity";
import { AsuntoRepository } from "../../repositories/asunto.repository";

export interface DeleteAsuntoUseCase {
  execute(id: number): Promise<AsuntoEntity>;
}

export class DeleteAsunto implements DeleteAsuntoUseCase {
  constructor(private readonly repository: AsuntoRepository) {}
  /**
   * Executes the delete operation for an AsuntoEntity based on the provided ID.
   *
   * @param id - The unique identifier of the AsuntoEntity to be deleted.
   * @returns A Promise that resolves to the deleted AsuntoEntity.
   * @throws Will throw an error if the AsuntoEntity with the given ID does not exist.
   */
  execute(id: number): Promise<AsuntoEntity> {
    return this.repository.deleteAsunto(id);
  }
}
