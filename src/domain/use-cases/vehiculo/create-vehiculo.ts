import { CreateVehiculoDto } from "../../dtos";
import { VehiculoEntity } from "../../entities/vehiculo.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface CreateVehiculoUseCase {
  execute(dto: CreateVehiculoDto): Promise<VehiculoEntity>;
}

export class CreateVehiculo implements CreateVehiculoUseCase {
  constructor(private readonly repository: BaseRepository<VehiculoEntity>) {}
  execute(dto: CreateVehiculoDto): Promise<VehiculoEntity> {
    return this.repository.createItem(dto);
  }
}
