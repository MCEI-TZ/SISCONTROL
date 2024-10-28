import { TipoTransportEntity } from "../../entities/tipoTransport.entity";
import { TipoTransporteRepository } from "../../repositories/tipoTransporte.repository";
export interface DeleteTipoTranspotUseCase {
  execute(id: number): Promise<TipoTransportEntity>;
}

export class DeleteTipoTransport implements DeleteTipoTranspotUseCase {
  constructor(private readonly repository: TipoTransporteRepository) {}
  execute(id: number): Promise<TipoTransportEntity> {
    return this.repository.deleteTipoTransporte(id);
  }
}
