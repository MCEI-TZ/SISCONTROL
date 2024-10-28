import { PageReponseDtos } from "../../dtos/shared/pagination.response.dto";
import { CarreraEntity } from "../../entities/carrera.entity";
import { CarreraRepository } from "../../repositories/carrera.repository";
export interface GetCarrerasUseCase {
  execute(page: number, limit: number): Promise<PageReponseDtos<CarreraEntity>>;
}

export class GetCarreas implements GetCarrerasUseCase {
  constructor(private readonly repository: CarreraRepository) {}
  execute(page: number, limit: number): Promise<PageReponseDtos<CarreraEntity>> {
    return this.repository.getCarreras(page, limit);
  }
}
