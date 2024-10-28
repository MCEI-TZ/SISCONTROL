import { PageReponseDtos } from "../../dtos";
import { DocenteEntity } from "../../entities/docente.entity";
import { DocenteRepository } from "../../repositories/docente.repository";
export interface GetDocentesUseCase {
  execute(page: number, limit: number): Promise<PageReponseDtos<DocenteEntity>>;
}

export class GetDocentes implements GetDocentesUseCase {
  constructor(private readonly repository: DocenteRepository) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DocenteEntity>> {
    return this.repository.getDocentes(page, limit);
  }
}
