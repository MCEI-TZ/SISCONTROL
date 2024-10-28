import {
  DocenteDatasource,
  DocenteRepository,
  DocenteEntity,
  PageReponseDtos,
} from "../../domain";

export class DocenteRepositoryImpl implements DocenteRepository {
  constructor(private readonly datasource: DocenteDatasource) {}
  getDocentes(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DocenteEntity>> {
    return this.datasource.getDocentes(page, limit);
  }
  getDocenteId(id: number): Promise<DocenteEntity> {
    return this.datasource.getDocenteId(id);
  }
}
