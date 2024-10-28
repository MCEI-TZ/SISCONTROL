import { PageReponseDtos } from "../../dtos/shared/pagination.response.dto";
import { DepartamentoEntity } from "../../entities/departamento.entity";
import { DepartamentoRepository } from "../../repositories/departamento.repository";
export interface GetDepartamentosUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DepartamentoEntity>>;
}

export class GetDepartamentos implements GetDepartamentosUseCase {
  constructor(private readonly repository: DepartamentoRepository) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DepartamentoEntity>> {
    return this.repository.getDepartamentos(page, limit);
  }
}
