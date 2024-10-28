import { CreateAutosDoceDto } from "../../dtos";
import { AutosDoceEntity } from "../../entities/autosDoce.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface CreateAutosDoceUseCase {
  execute(dto: CreateAutosDoceDto): Promise<AutosDoceEntity>;
}

export class CreateAutosDoce implements CreateAutosDoceUseCase {
  constructor(private readonly repository: BaseRepository<AutosDoceEntity>) {}
  execute(dto: CreateAutosDoceDto): Promise<AutosDoceEntity> {
    return this.repository.createItem(dto);
  }
}
