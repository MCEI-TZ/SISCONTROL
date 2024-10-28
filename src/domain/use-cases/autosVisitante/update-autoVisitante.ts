import { UpdateAutosVisitanteDto } from "../../dtos";
import { AutosVisitanteEntity } from "../../entities/autosVisitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface UpdateAutosVisitanteUseCase {
  execute(dto: UpdateAutosVisitanteDto): Promise<AutosVisitanteEntity>;
}

export class UpdateAutosVisitante implements UpdateAutosVisitanteUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosVisitanteEntity>
  ) {}
  execute(dto: UpdateAutosVisitanteDto): Promise<AutosVisitanteEntity> {
    return this.repository.updateItem(dto);
  }
}
