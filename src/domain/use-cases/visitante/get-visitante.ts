import { VisitanteEntity } from "../../entities/visitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetVisitanteUseCase {
  execute(id: number): Promise<VisitanteEntity>;
}

export class GetVisitante implements GetVisitanteUseCase {
  constructor(private readonly repository: BaseRepository<VisitanteEntity>) {}
  execute(id: number): Promise<VisitanteEntity> {
    return this.repository.getItemById(id);
  }
}
