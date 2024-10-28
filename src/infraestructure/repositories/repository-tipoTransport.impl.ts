import {
  TipoTransporteDatasource,
  TipoTransporteRepository,
  CreateTipoTransportDto,
  PageReponseDtos,
  TipoTransportEntity,
  UpdateTipoTransportDto,
} from "../../domain";

export class TipoTransportReporsitoryImpl implements TipoTransporteRepository {
  constructor(private readonly datasource: TipoTransporteDatasource) {}
  createTipoTransporte(
    createTipoPersonaDto: CreateTipoTransportDto
  ): Promise<TipoTransportEntity> {
    return this.datasource.createTipoTransporte(createTipoPersonaDto);
  }
  getTiposTransportes(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoTransportEntity>> {
    return this.datasource.getTiposTransportes(page, limit);
  }
  getTipoTransporteByName(name: string): Promise<TipoTransportEntity> {
    return this.datasource.getTipoTransporteByName(name);
  }
  updateTipoTransporte(
    updateTipoPersonaDto: UpdateTipoTransportDto
  ): Promise<TipoTransportEntity> {
    return this.datasource.updateTipoTransporte(updateTipoPersonaDto);
  }
  deleteTipoTransporte(id: number): Promise<TipoTransportEntity> {
    return this.datasource.deleteTipoTransporte(id);
  }
  getTipoTransporteById(id: number): Promise<TipoTransportEntity> {
    return this.datasource.getTipoTransporteById(id);
  }
}
