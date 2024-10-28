import { AutosDoceEntity } from "../../entities/autosDoce.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetAutoDoceUseCase {
  execute(id: number): Promise<AutosDoceEntity>;
}
export class GetAutosDoce implements GetAutoDoceUseCase {
  constructor(private readonly repository: BaseRepository<AutosDoceEntity>) {}
  execute(id: number): Promise<AutosDoceEntity> {
    return this.repository.getItemById(id);
  }
}
