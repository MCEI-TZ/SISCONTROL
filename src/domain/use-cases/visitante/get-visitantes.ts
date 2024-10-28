import { PageReponseDtos } from "../../dtos";
import { VisitanteEntity } from "../../entities/visitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetVisitantesUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VisitanteEntity>>;
}

export class GetVisitantes implements GetVisitantesUseCase {
  constructor(private readonly repository: BaseRepository<VisitanteEntity>) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VisitanteEntity>> {
    return this.repository.getItems(page, limit);
  }
}
