import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { CarreraEntity } from "../entities/carrera.entity";

export abstract class CarreraRepository {
  abstract getCarreras(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<CarreraEntity>>;
  abstract getCarreraId(id: number): Promise<CarreraEntity>;
}
