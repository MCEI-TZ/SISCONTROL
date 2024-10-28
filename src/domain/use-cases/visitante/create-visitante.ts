import { CreateVisitanteDto } from "../../dtos";
import { VisitanteEntity } from "../../entities/visitante.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface CreateVisitanteUseCase {
  execute(dto: CreateVisitanteDto): Promise<VisitanteEntity>;
}

export class CreateVisitante implements CreateVisitanteUseCase {
  constructor(private readonly repository: BaseRepository<VisitanteEntity>) {}
  execute(dto: CreateVisitanteDto): Promise<VisitanteEntity> {
    return this.repository.createItem(dto);
  }
}
