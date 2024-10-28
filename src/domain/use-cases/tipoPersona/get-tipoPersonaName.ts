import { TipoPersonaEntity } from "../../entities/tipoPersona.entity";
import { TipoPersonaRepository } from "../../repositories/tipoPersona.repository";
export interface GetTipoPersonaNameUseCase {
  execute(name: string): Promise<TipoPersonaEntity>;
}

export class GetTipoPersonaName implements GetTipoPersonaNameUseCase {
  constructor(private readonly repository: TipoPersonaRepository) {}
  /**
   * Executes the use case to get a {@link TipoPersonaEntity} by its name.
   *
   * @param name - The name of the {@link TipoPersonaEntity} to retrieve.
   * @returns A promise that resolves to the {@link TipoPersonaEntity} with the given name.
   * @throws Throws an error if no {@link TipoPersonaEntity} is found with the given name.
   */
  execute(name: string): Promise<TipoPersonaEntity> {
    return this.repository.getTipoPersonaByName(name);
  }
}
