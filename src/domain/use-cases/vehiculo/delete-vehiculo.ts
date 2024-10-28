import { VehiculoEntity } from "../../entities/vehiculo.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface DeleteVehiculoUseCase {
  execute(id: number): Promise<VehiculoEntity>;
}

export class DeleteVehiculo implements DeleteVehiculoUseCase {
  constructor(private readonly repository: BaseRepository<VehiculoEntity>) {}
  execute(id: number): Promise<VehiculoEntity> {
    return this.repository.deleteItem(id);
  }
}
