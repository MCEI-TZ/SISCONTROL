import { AlumnoEntity } from "../../entities/alumno.entity";
import { AlumnoRepository } from "../../repositories/alumno.repository";
export interface GetAlumnoUseCase {
  execute(id: number): Promise<AlumnoEntity>;
}

export class GetAlumno implements GetAlumnoUseCase {
  constructor(private readonly repository: AlumnoRepository) {}
  execute(id: number): Promise<AlumnoEntity> {
    return this.repository.getAlumnoId(id);
  }
}
