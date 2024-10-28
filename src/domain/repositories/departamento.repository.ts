import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { DepartamentoEntity } from "../entities/departamento.entity";

export abstract class DepartamentoRepository {
  abstract getDepartamentos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DepartamentoEntity>>;
  abstract getDepartamentoId(id: number): Promise<DepartamentoEntity>;
}
