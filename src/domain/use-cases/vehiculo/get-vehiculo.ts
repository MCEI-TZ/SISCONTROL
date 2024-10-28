import { VehiculoEntity } from "../../entities/vehiculo.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetVehiculoUseCase {
  execute(id: number): Promise<VehiculoEntity>;
}

export class GetVehiculo implements GetVehiculoUseCase {
  constructor(private readonly repository: BaseRepository<VehiculoEntity>) {}
  execute(id: number): Promise<VehiculoEntity> {
    return this.repository.getItemById(id);
  }
}
