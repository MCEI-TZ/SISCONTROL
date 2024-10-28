import { TipoTransportEntity } from "../../entities/tipoTransport.entity";
import { TipoTransporteRepository } from "../../repositories/tipoTransporte.repository";
export interface GetTipoTransportNameUseCase {
  execute(name: string): Promise<TipoTransportEntity>;
}

export class GetTipoTransportName implements GetTipoTransportNameUseCase {
  constructor(private readonly repository: TipoTransporteRepository) {}
  execute(name: string): Promise<TipoTransportEntity> {
    return this.repository.getTipoTransporteByName(name);
  }
}
