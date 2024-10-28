import { TipoPersonaEntity } from "../../entities/tipoPersona.entity";
import { TipoPersonaRepository } from "../../repositories/tipoPersona.repository";
export interface GetTipoPersonaIdUseCase {
  execute(id: number): Promise<TipoPersonaEntity>;
}

export class GetTipoPersonaId implements GetTipoPersonaIdUseCase {
  constructor(private readonly repository: TipoPersonaRepository) {}
  /**
   * Executes the use case to retrieve a specific `TipoPersonaEntity` by its ID.
   *
   * @param id - The unique identifier of the `TipoPersonaEntity` to retrieve.
   * @returns A Promise that resolves to the retrieved `TipoPersonaEntity`.
   * @throws Will throw an error if the `TipoPersonaEntity` with the given ID does not exist.
   */
  execute(id: number): Promise<TipoPersonaEntity> {
    return this.repository.getTipoPersonaById(id);
  }
}
