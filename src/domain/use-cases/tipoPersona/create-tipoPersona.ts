import { CreateTipoPersonDto } from "../../dtos";
import { TipoPersonaEntity } from "../../entities/tipoPersona.entity";
import { TipoPersonaRepository } from "../../repositories/tipoPersona.repository";
export interface CreateTipoPersonaUseCase {
  execute(dto: CreateTipoPersonDto): Promise<TipoPersonaEntity>;
}

export class CreateTipoPersona implements CreateTipoPersonaUseCase {
  constructor(private readonly repository: TipoPersonaRepository) {}
  /**
   * Executes the use case to create a new tipo de persona.
   *
   * @param dto - The data transfer object containing the necessary information to create a new tipo de persona.
   * @returns A promise that resolves to the newly created tipo de persona entity.
   * @throws Throws an error if the creation fails.
   */
  execute(dto: CreateTipoPersonDto): Promise<TipoPersonaEntity> {
    return this.repository.createTipoPersona(dto);
  }
}
