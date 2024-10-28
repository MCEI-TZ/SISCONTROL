import { UpdateVehiculoDto } from "../../dtos";
import { VehiculoEntity } from "../../entities/vehiculo.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface UpdateVehiculoUseCase {
  execute(dto: UpdateVehiculoDto): Promise<VehiculoEntity>;
}

export class UpdateVehiculo implements UpdateVehiculoUseCase {
  constructor(private readonly repository: BaseRepository<VehiculoEntity>) {}
  execute(dto: UpdateVehiculoDto): Promise<VehiculoEntity> {
    return this.repository.updateItem(dto);
  }
}
