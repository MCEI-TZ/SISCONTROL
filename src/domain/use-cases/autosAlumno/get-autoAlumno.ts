import { AutosAlumnosEntity } from "../../entities/autosAlumno.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";

export interface GetAutosAlumnoUseCase {
  execute(id: number): Promise<AutosAlumnosEntity>;
}

export class GetAutosAlumno implements GetAutosAlumnoUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosAlumnosEntity>
  ) {}
  execute(id: number): Promise<AutosAlumnosEntity> {
    return this.repository.getItemById(id);
  }
}
