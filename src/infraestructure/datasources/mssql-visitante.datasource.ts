import { prisma } from "../../data/mssql";
import {
  BaseDatasource,
  CreateVisitanteDto,
  CustomError,
  PageReponseDtos,
  UpdateVisitanteDto,
  VisitanteEntity,
} from "../../domain";

export class VisitanteDatasourceImpl
  implements BaseDatasource<VisitanteEntity>
{
  async createItem(
    createVisitanteDto: CreateVisitanteDto
  ): Promise<VisitanteEntity> {
    const visitante = await prisma.visitante.create({
      data: createVisitanteDto!,
    });
    return VisitanteEntity.fromObject(visitante);
  }
  async getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VisitanteEntity>> {
    const skip = (page - 1) * limit;
    const visitantes = await prisma.visitante.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.visitante.count();

    const data: VisitanteEntity[] = visitantes.map(
      (visitante: any) => VisitanteEntity.fromObject(visitante)
    );

    const res: PageReponseDtos<VisitanteEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };
    return res;
  }
  async getItemById(id: number): Promise<VisitanteEntity> {
    const visitante = await prisma.visitante.findFirst({
      where: { idVisitante: id },
    });
    if (!visitante)
      throw CustomError.notFound(`Visitante with id ${id} not found`);
    return VisitanteEntity.fromObject(visitante);
  }
  async updateItem(
    updateVisitanteDto: UpdateVisitanteDto
  ): Promise<VisitanteEntity> {
    await this.getItemById(updateVisitanteDto.idVisitante);
    const updateVisitante = await prisma.visitante.update({
      where: { idVisitante: updateVisitanteDto.idVisitante },
      data: updateVisitanteDto!.values,
    });
    return VisitanteEntity.fromObject(updateVisitante);
  }
  async deleteItem(id: number): Promise<VisitanteEntity> {
    await this.getItemById(id);
    const deleteVisitante = await prisma.visitante.delete({
      where: { idVisitante: id },
    });
    return VisitanteEntity.fromObject(deleteVisitante);
  }
}
