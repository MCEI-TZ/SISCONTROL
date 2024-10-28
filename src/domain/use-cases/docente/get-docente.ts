import { DocenteEntity } from "../../entities/docente.entity";
import { DocenteRepository } from "../../repositories/docente.repository";
export interface GetDocenteUseCase {
  execute(id: number): Promise<DocenteEntity>;
}

export class GetDocente implements GetDocenteUseCase {
  constructor(private readonly repository: DocenteRepository) {}
  execute(id: number): Promise<DocenteEntity> {
    return this.repository.getDocenteId(id);
  }
}
