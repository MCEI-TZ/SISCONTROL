import { PageReponseDtos } from "../../dtos";
import { VehiculoEntity } from "../../entities/vehiculo.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetVehiculosUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VehiculoEntity>>;
}

export class GetVehiculos implements GetVehiculosUseCase {
  constructor(private readonly repository: BaseRepository<VehiculoEntity>) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VehiculoEntity>> {
    return this.repository.getItems(page, limit);
  }
}
