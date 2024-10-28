import { UpdateTipoTransportDto } from "../../dtos";
import { TipoTransportEntity } from "../../entities/tipoTransport.entity";
import { TipoTransporteRepository } from "../../repositories/tipoTransporte.repository";
export interface UpdateTipoTransportUseCase {
  execute(dto: UpdateTipoTransportDto): Promise<TipoTransportEntity>;
}

export class UpdateTipoTransport implements UpdateTipoTransportUseCase {
  constructor(private readonly repository: TipoTransporteRepository) {}
  execute(dto: UpdateTipoTransportDto): Promise<TipoTransportEntity> {
    return this.repository.updateTipoTransporte(dto);
  }
}
