import { AutosVisitanteEntity } from "../../entities/autosVisitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetAutoVisitanteUseCase {
  execute(id: number): Promise<AutosVisitanteEntity>;
}

export class GetAutoVisitante implements GetAutoVisitanteUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosVisitanteEntity>
  ) {}
  execute(id: number): Promise<AutosVisitanteEntity> {
    return this.repository.getItemById(id);
  }
}
