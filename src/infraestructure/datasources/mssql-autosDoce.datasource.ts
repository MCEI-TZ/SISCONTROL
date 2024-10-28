import { prisma } from "../../data/mssql";
import {
  BaseDatasource,
  AutosDoceEntity,
  CreateAutosDoceDto,
  CustomError,
  UpdateAutosDoceDto,
  PageReponseDtos,
} from "../../domain";

export class AutosDoceDatasourceImpl
  implements BaseDatasource<AutosDoceEntity>
{
  async createItem(
    createAutosDoceDto: CreateAutosDoceDto
  ): Promise<AutosDoceEntity> {
    const autoDoce = await prisma.autosDoce.create({
      data: createAutosDoceDto!,
    });
    return AutosDoceEntity.fromObject(autoDoce);
  }
  async getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosDoceEntity>> {
    const skip = (page - 1) * limit;
    const autosDoces = await prisma.autosDoce.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.autosDoce.count();

    const data = autosDoces.map((autoDoce) =>
      AutosDoceEntity.fromObject(autoDoce)
    );

    const res: PageReponseDtos<AutosDoceEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };

    return res;
  }
  async getItemById(id: number): Promise<AutosDoceEntity> {
    const autoDoce = await prisma.autosDoce.findFirst({
      where: { IdVehiculo: id },
    });
    if (!autoDoce)
      throw CustomError.notFound(`AutoDoce with id ${id} not found`);
    return AutosDoceEntity.fromObject(autoDoce);
  }
  //   todo: falta implementar correctamente
  async updateItem(
    updateAutosDoceDto: UpdateAutosDoceDto
  ): Promise<AutosDoceEntity> {
    await this.getItemById(updateAutosDoceDto.IdVehiculo);
    const updateAutosDoce = await prisma.autosDoce.update({
      where: { IdDoce_IdVehiculo: updateAutosDoceDto },
      data: updateAutosDoceDto!.values,
    });
    return AutosDoceEntity.fromObject(updateAutosDoce);
  }
  // todo: Falta implementar correctamente
  async deleteItem(id: number): Promise<AutosDoceEntity> {
    await this.getItemById(id);
    const deleteAutosDoce = await prisma.autosDoce.delete({
      where: { IdDoce_IdVehiculo: undefined },
    });
    return AutosDoceEntity.fromObject(deleteAutosDoce);
  }
}
