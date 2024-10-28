import { TipoTransportEntity } from "../../entities/tipoTransport.entity";
import { TipoTransporteRepository } from "../../repositories/tipoTransporte.repository";
export interface GetTipoTransportIdUseCase {
  execute(id: number): Promise<TipoTransportEntity>;
}

export class GetTipoTransportId implements GetTipoTransportIdUseCase {
  constructor(private readonly repository: TipoTransporteRepository) {}
  execute(id: number): Promise<TipoTransportEntity> {
    return this.repository.getTipoTransporteById(id);
  }
}
