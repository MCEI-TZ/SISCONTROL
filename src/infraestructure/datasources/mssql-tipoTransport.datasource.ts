import { prisma } from "../../data/mssql";
import {
  TipoTransporteDatasource,
  CreateTipoTransportDto,
  CustomError,
  PageReponseDtos,
  TipoTransportEntity,
  UpdateTipoTransportDto,
} from "../../domain";
export class TipoTransportDatasourceImpl implements TipoTransporteDatasource {
  async createTipoTransporte(
    createTipoPersonaDto: CreateTipoTransportDto
  ): Promise<TipoTransportEntity> {
    const tipoTransport = await prisma.tipoTransport.create({
      data: createTipoPersonaDto!,
    });
    return TipoTransportEntity.fromObject(tipoTransport);
  }
  async getTiposTransportes(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoTransportEntity>> {
    const skip = (page - 1) * limit;
    const tipoTransportes = await prisma.tipoTransport.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.tipoTransport.count();

    const data = tipoTransportes.map((tipoTransporte) =>
      TipoTransportEntity.fromObject(tipoTransporte)
    );

    const res: PageReponseDtos<TipoTransportEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };
    return res;
  }
  async getTipoTransporteByName(name: string): Promise<TipoTransportEntity> {
    const tipoTransport = await prisma.tipoTransport.findFirst({
      where: { Nombre: name },
    });
    if (!tipoTransport)
      throw CustomError.notFound(`TipoTransport with name ${name} not found`);
    return TipoTransportEntity.fromObject(tipoTransport);
  }
  async updateTipoTransporte(
    updateTipoPersonaDto: UpdateTipoTransportDto
  ): Promise<TipoTransportEntity> {
    await this.getTipoTransporteById(updateTipoPersonaDto.IdTpTransp);
    const updateTipoTransport = await prisma.tipoTransport.update({
      where: { IdTpTransp: updateTipoPersonaDto.IdTpTransp },
      data: updateTipoPersonaDto!.values,
    });
    return TipoTransportEntity.fromObject(updateTipoTransport);
  }
  async deleteTipoTransporte(id: number): Promise<TipoTransportEntity> {
    await this.getTipoTransporteById(id);
    const deleteTipoTransport = await prisma.tipoTransport.delete({
      where: { IdTpTransp: id },
    });
    return TipoTransportEntity.fromObject(deleteTipoTransport);
  }
  async getTipoTransporteById(id: number): Promise<TipoTransportEntity> {
    const tipoTransport = await prisma.tipoTransport.findFirst({
      where: { IdTpTransp: id },
    });
    if (!tipoTransport)
      throw CustomError.notFound(`TipoTransport with id ${id} not found`);
    return TipoTransportEntity.fromObject(tipoTransport);
  }
}
