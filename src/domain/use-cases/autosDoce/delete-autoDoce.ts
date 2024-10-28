import { AutosDoceEntity } from "../../entities/autosDoce.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface DeleteAutosDoceUseCase {
  execute(id: number): Promise<AutosDoceEntity>;
}

export class DeleteAutosDoce implements DeleteAutosDoceUseCase {
  constructor(private readonly repository: BaseRepository<AutosDoceEntity>) {}
  execute(id: number): Promise<AutosDoceEntity> {
    return this.repository.deleteItem(id);
  }
}
