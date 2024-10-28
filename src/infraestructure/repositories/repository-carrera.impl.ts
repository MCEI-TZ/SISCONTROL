import {
  CarreraEntity,
  CarreraDatasource,
  CarreraRepository,
} from "../../domain";
import { PageReponseDtos } from "../../domain/dtos/shared/pagination.response.dto";

export class CarreraRepositoryImpl implements CarreraRepository {
  constructor(private readonly datasource: CarreraDatasource) {}
  getCarreras(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<CarreraEntity>> {
    return this.datasource.getCarreras(page, limit);
  }
  getCarreraId(id: number): Promise<CarreraEntity> {
    return this.datasource.getCarreraId(id);
  }
}
