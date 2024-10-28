import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { DocenteEntity } from "../entities/docente.entity";

export abstract class DocenteRepository {
  abstract getDocentes(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DocenteEntity>>;
  abstract getDocenteId(id: number): Promise<DocenteEntity>;
}
