import { AutosAlumnosEntity } from "../../entities/autosAlumno.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface DeleteAutoAlumnoUseCase {
  execute(id: number): Promise<AutosAlumnosEntity>;
}

export class DeleteAutosAlumno implements DeleteAutoAlumnoUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosAlumnosEntity>
  ) {}

  execute(id: number): Promise<AutosAlumnosEntity> {
    return this.repository.deleteItem(id);
  }
}
