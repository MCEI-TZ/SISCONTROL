import { UpdateVisitanteDto } from "../../dtos";
import { VisitanteEntity } from "../../entities/visitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface UpdateVisitanteUseCase {
  execute(dto: UpdateVisitanteDto): Promise<VisitanteEntity>;
}

export class UpdateVisitante implements UpdateVisitanteUseCase {
  constructor(private readonly repository: BaseRepository<VisitanteEntity>) {}
  execute(dto: UpdateVisitanteDto): Promise<VisitanteEntity> {
    return this.repository.updateItem(dto);
  }
}
