import { PageReponseDtos } from "../../dtos";
import { EspaciosDeClaseEntity } from "../../entities/espaciosDeClase.entity";
import { EspaciosClaseRepository } from "../../repositories/espaciosDeClase.repository";
export interface GetEspaciosDeClaseUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EspaciosDeClaseEntity>>;
}

export class GetEspaciosDeClase implements GetEspaciosDeClaseUseCase {
  constructor(private readonly repository: EspaciosClaseRepository) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EspaciosDeClaseEntity>> {
    return this.repository.getEspaciosDeClases(page, limit);
  }
}
