import { UpdateTipoPersonaDto } from "../../dtos";
import { TipoPersonaEntity } from "../../entities/tipoPersona.entity";
import { TipoPersonaRepository } from "../../repositories/tipoPersona.repository";
export interface UpdateTipoPersonaUseCase {
  execute(dto: UpdateTipoPersonaDto): Promise<TipoPersonaEntity>;
}

export class UpdateTipoPersona implements UpdateTipoPersonaUseCase {
  constructor(private readonly repository: TipoPersonaRepository) {}
  /**
   * Executes the update operation for a {@link TipoPersonaEntity} using the provided {@link UpdateTipoPersonaDto}.
   *
   * @param dto - The {@link UpdateTipoPersonaDto} containing the updated data for the {@link TipoPersonaEntity}.
   * @returns A Promise that resolves to the updated {@link TipoPersonaEntity}.
   * @throws Will throw an error if the update operation fails.
   */
  execute(dto: UpdateTipoPersonaDto): Promise<TipoPersonaEntity> {
    return this.repository.updateTipoPersona(dto);
  }
}
