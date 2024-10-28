import { TipoPersonaEntity } from "../../entities/tipoPersona.entity";
import { TipoPersonaRepository } from "../../repositories/tipoPersona.repository";
export interface DeleteTipoPersonaUseCase {
  execute(id: number): Promise<TipoPersonaEntity>;
}

export class DeleteTipoPersona implements DeleteTipoPersonaUseCase {
  constructor(private readonly repository: TipoPersonaRepository) {}
  /**
   * Executes the delete operation for a specific tipoPersona by its id.
   *
   * @param id - The unique identifier of the tipoPersona to be deleted.
   * @returns A promise that resolves to the deleted tipoPersona entity.
   * @throws Will throw an error if the tipoPersona with the given id does not exist.
   */
  execute(id: number): Promise<TipoPersonaEntity> {
    return this.repository.deleteTipoPersona(id);
  }
}
