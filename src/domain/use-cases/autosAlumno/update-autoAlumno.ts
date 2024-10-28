import { UpdateAutosAlumnoDto } from "../../dtos";
import { AutosAlumnosEntity } from "../../entities/autosAlumno.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface UpdateAutosAlumnoUseCase {
  execute(dto: UpdateAutosAlumnoDto): Promise<AutosAlumnosEntity>;
}

export class UpdateAutosAlumno implements UpdateAutosAlumnoUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosAlumnosEntity>
  ) {}
  execute(dto: UpdateAutosAlumnoDto): Promise<AutosAlumnosEntity> {
    return this.repository.updateItem(dto);
  }
}
