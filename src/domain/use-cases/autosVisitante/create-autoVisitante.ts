import { CreateAutosVisitanteDto } from "../../dtos";
import { AutosVisitanteEntity } from "../../entities/autosVisitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface CreateAutosVisitanteUseCase {
  execute(dto: CreateAutosVisitanteDto): Promise<AutosVisitanteEntity>;
}

export class CreateAutosVisitante implements CreateAutosVisitanteUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosVisitanteEntity>
  ) {}
  execute(dto: CreateAutosVisitanteDto): Promise<AutosVisitanteEntity> {
    return this.repository.createItem(dto);
  }
}
