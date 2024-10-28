import { UpdateAutosDoceDto } from "../../dtos";
import { AutosDoceEntity } from "../../entities/autosDoce.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface UpdateAutosDOceUseCase {
  execute(dto: UpdateAutosDoceDto): Promise<AutosDoceEntity>;
}

export class UpdateAutoDoce implements UpdateAutosDOceUseCase {
  constructor(private readonly repository: BaseRepository<AutosDoceEntity>) {}
  execute(dto: UpdateAutosDoceDto): Promise<AutosDoceEntity> {
    return this.repository.updateItem(dto);
  }
}
