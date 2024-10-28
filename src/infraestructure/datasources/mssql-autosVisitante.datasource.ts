import { prisma } from "../../data/mssql";
import {
  BaseDatasource,
  AutosVisitanteEntity,
  CreateAutosVisitanteDto,
  CustomError,
  UpdateAutosVisitanteDto,
  PageReponseDtos,
} from "../../domain";

export class AutosVisitanteDatasourceImpl
  implements BaseDatasource<AutosVisitanteEntity>
{
  async createItem(
    createAutoVisitanteDto: CreateAutosVisitanteDto
  ): Promise<AutosVisitanteEntity> {
    const autoVisitante = await prisma.autosVisitante.create({
      data: createAutoVisitanteDto!,
    });
    return AutosVisitanteEntity.fromObject(autoVisitante);
  }
  async getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosVisitanteEntity>> {
    const skip = (page - 1) * limit;
    const autosVisitantes = await prisma.autosVisitante.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.autosVisitante.count();

    const data = autosVisitantes.map((autoVisitante) =>
      AutosVisitanteEntity.fromObject(autoVisitante)
    );

    const res: PageReponseDtos<AutosVisitanteEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };

    return res;
  }
  //   todo: Falta implementar correctamente
  async getItemById(id: number): Promise<AutosVisitanteEntity> {
    const autoVisitante = await prisma.autosVisitante.findFirst({
      where: { idVisitante: id },
    });
    if (!autoVisitante)
      throw CustomError.notFound(`AutoVisitante with id ${id} not found`);
    return AutosVisitanteEntity.fromObject(autoVisitante);
  }
  //   todo: Falta implementar correctamente
  async updateItem(
    updateAutosVisitanteDto: UpdateAutosVisitanteDto
  ): Promise<AutosVisitanteEntity> {
    await this.getItemById(updateAutosVisitanteDto.idVisitante);
    const updateAutosVistante = await prisma.autosVisitante.update({
      where: { idVisitante_IdVehiculo: updateAutosVisitanteDto },
      data: updateAutosVisitanteDto!.values,
    });
    return AutosVisitanteEntity.fromObject(updateAutosVistante);
  }
  async deleteItem(id: number): Promise<AutosVisitanteEntity> {
    await this.getItemById(id);
    const deleteAutoVisitante = await prisma.autosVisitante.delete({
      where: { idVisitante_IdVehiculo: undefined },
    });
    return AutosVisitanteEntity.fromObject(deleteAutoVisitante);
  }
}
