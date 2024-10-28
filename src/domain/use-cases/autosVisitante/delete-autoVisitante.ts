import { AutosVisitanteEntity } from "../../entities/autosVisitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface DeleteAutoVisitanteUseCase {
  execute(id: number): Promise<AutosVisitanteEntity>;
}

export class DeleteAutosVisitante implements DeleteAutoVisitanteUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosVisitanteEntity>
  ) {}
  execute(id: number): Promise<AutosVisitanteEntity> {
    return this.repository.deleteItem(id);
  }
}
