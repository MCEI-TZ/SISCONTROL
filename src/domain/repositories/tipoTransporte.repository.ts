import { CreateTipoTransportDto } from "../dtos/tipoTransport/create-tipoTransport.dto";
import { UpdateTipoTransportDto } from "../dtos/tipoTransport/update-tipoTransport.dto";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { TipoTransportEntity } from "../entities/tipoTransport.entity";

export abstract class TipoTransporteRepository {
  abstract createTipoTransporte(
    createTipoPersonaDto: CreateTipoTransportDto
  ): Promise<TipoTransportEntity>;
  abstract getTiposTransportes(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoTransportEntity>>;
  abstract getTipoTransporteByName(name: string): Promise<TipoTransportEntity>;
  abstract updateTipoTransporte(
    updateTipoPersonaDto: UpdateTipoTransportDto
  ): Promise<TipoTransportEntity>;
  abstract deleteTipoTransporte(id: number): Promise<TipoTransportEntity>;
  abstract getTipoTransporteById(id: number): Promise<TipoTransportEntity>;
}
