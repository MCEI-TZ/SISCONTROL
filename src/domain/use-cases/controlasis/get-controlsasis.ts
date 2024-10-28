import { PageReponseDtos } from "../../dtos";
import { ControlAsisEntity } from "../../entities/controlasis.entity";
import { AsistenciaRepository } from "../../repositories/controlAsis.repository";
export interface GetControlsAsisUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>>;
}

export class GetControlsAsis implements GetControlsAsisUseCase {
  constructor(private readonly repository: AsistenciaRepository) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>> {
    return this.repository.getItems(page, limit);
  }
}
