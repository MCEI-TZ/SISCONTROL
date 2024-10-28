import { PageReponseDtos } from "../../dtos";
import { ControlAsisEntity } from "../../entities/controlasis.entity";
import { AsistenciaRepository } from "../../repositories/controlAsis.repository";
export interface GetControlAsisUseCase {
  execute(
    id: number,
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>>;
}

export class GetControlAsis implements GetControlAsisUseCase {
  constructor(private readonly repository: AsistenciaRepository) {}
  execute(
    id: number,
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>> {
    return this.repository.getItemById(id, page, limit);
  }
}
