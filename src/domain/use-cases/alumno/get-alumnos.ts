import { PageReponseDtos } from "../../dtos/shared/pagination.response.dto";
import { AlumnoEntity } from "../../entities/alumno.entity";
import { AlumnoRepository } from "../../repositories/alumno.repository";
export interface GetAlumnosUseCase {
  execute(page: number, limit: number): Promise<PageReponseDtos<AlumnoEntity>>;
}

export class GetAlumnos implements GetAlumnosUseCase {
  constructor(private readonly repository: AlumnoRepository) {}
  execute(page: number, limit: number): Promise<PageReponseDtos<AlumnoEntity>> {
    return this.repository.getAlumnos(page, limit);
  }
}
