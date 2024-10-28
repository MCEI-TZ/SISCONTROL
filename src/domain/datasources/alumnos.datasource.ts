import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { AlumnoEntity } from "../entities/alumno.entity";

export abstract class AlumnoDatasource {
  abstract getAlumnos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AlumnoEntity>>;
  abstract getAlumnoId(id: number): Promise<AlumnoEntity>;
}
