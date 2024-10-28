import { PageReponseDtos } from "../../dtos";
import { AutosAlumnosEntity } from "../../entities/autosAlumno.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetAutosAlumnosUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosAlumnosEntity>>;
}

export class GetAutosAlumnos implements GetAutosAlumnosUseCase {
  constructor(
    private readonly repository: BaseRepository<AutosAlumnosEntity>
  ) {}

  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosAlumnosEntity>> {
    return this.repository.getItems(page, limit);
  }
}
