import { PageReponseDtos } from "../../dtos";
import { AutosVisitanteEntity } from "../../entities/autosVisitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetAutosVisitanteUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosVisitanteEntity>>;
}

export class GetAutosVisitante implements GetAutosVisitanteUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosVisitanteEntity>
  ) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosVisitanteEntity>> {
    return this.repository.getItems(page, limit);
  }
}
