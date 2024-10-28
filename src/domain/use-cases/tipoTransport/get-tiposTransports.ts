import { PageReponseDtos } from "../../dtos";
import { TipoTransportEntity } from "../../entities/tipoTransport.entity";
import { TipoTransporteRepository } from "../../repositories/tipoTransporte.repository";
export interface GetTiposTransportsUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoTransportEntity>>;
}

export class GetTiposTransports implements GetTiposTransportsUseCase {
  constructor(private readonly repository: TipoTransporteRepository) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoTransportEntity>> {
    return this.repository.getTiposTransportes(page, limit);
  }
}
