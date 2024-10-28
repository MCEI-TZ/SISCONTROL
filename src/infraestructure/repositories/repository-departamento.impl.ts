import {
  DepartamentoEntity,
  DepartamentoDatasource,
  DepartamentoRepository,
} from "../../domain";
import { PageReponseDtos } from "../../domain/dtos/shared/pagination.response.dto";

export class DepartamentoRepositoryImpl implements DepartamentoRepository {
  constructor(private readonly datasource: DepartamentoDatasource) {}
  getDepartamentos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DepartamentoEntity>> {
    return this.datasource.getDepartamentos(page, limit);
  }
  getDepartamentoId(id: number): Promise<DepartamentoEntity> {
    return this.datasource.getDepartamentoId(id);
  }
}
