import { CreateTipoTransportDto } from "../../dtos";
import { TipoTransportEntity } from "../../entities/tipoTransport.entity";
import { TipoTransporteRepository } from "../../repositories/tipoTransporte.repository";

export interface CreateTipoTransportUseCase {
  execute(dto: CreateTipoTransportDto): Promise<TipoTransportEntity>;
}

export class CreateTipoTransp implements CreateTipoTransportUseCase {
  constructor(private readonly repository: TipoTransporteRepository) {}
  execute(dto: CreateTipoTransportDto): Promise<TipoTransportEntity> {
    return this.repository.createTipoTransporte(dto);
  }
}
