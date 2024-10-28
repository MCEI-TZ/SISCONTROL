import {
  AlumnoEntity,
  AlumnoDatasource,
  AlumnoRepository,
} from "../../domain";
import { PageReponseDtos } from "../../domain/dtos/shared/pagination.response.dto";

export class AlumnoRepositoryImpl implements AlumnoRepository {
  constructor(private readonly datasource: AlumnoDatasource) {}
  getAlumnos(page: number, limit: number): Promise<PageReponseDtos<AlumnoEntity>> {
    return this.datasource.getAlumnos(page,limit);
  }
  getAlumnoId(id: number): Promise<AlumnoEntity> {
    return this.datasource.getAlumnoId(id);
  }
}
