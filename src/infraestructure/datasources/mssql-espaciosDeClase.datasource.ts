import { prisma } from "../../data/mssql";
import {
  EspaciosClaseDatasource,
  CreateEspacioDto,
  CustomError,
  EspaciosDeClaseEntity,
  PageReponseDtos,
  UpdateEspaciosDeClaseDto,
} from "../../domain";
export class EspaciosDeClaseDatasourceImpl implements EspaciosClaseDatasource {
  async createEspacioDeClase(
    createEspacioDto: CreateEspacioDto
  ): Promise<EspaciosDeClaseEntity> {
    const espacioDeClase = await prisma.espaciosDeClase.create({
      data: createEspacioDto!,
    });
    return EspaciosDeClaseEntity.fromObject(espacioDeClase);
  }
  async getEspaciosDeClases(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EspaciosDeClaseEntity>> {
    const skip = (page - 1) * limit;
    const espaciosClases = await prisma.espaciosDeClase.findMany({
      orderBy:{
        Id: "desc"
      },
      skip,
      take: limit,
    });

    const total = await prisma.espaciosDeClase.count();

    const data = espaciosClases.map((espacio) =>
      EspaciosDeClaseEntity.fromObject(espacio)
    );

    const res: PageReponseDtos<EspaciosDeClaseEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };
    return res;
  }
  async getEspacioDeClaseByName(name: string): Promise<EspaciosDeClaseEntity> {
    const espacioClase = await prisma.espaciosDeClase.findFirst({
      where: { Abreviatura: name },
    });
    if (!espacioClase)
      throw CustomError.notFound(`EspaciosDeClase with Name ${name} not found`);
    return EspaciosDeClaseEntity.fromObject(espacioClase);
  }
  async updateEspacioDeClase(
    updateEspacioDto: UpdateEspaciosDeClaseDto
  ): Promise<EspaciosDeClaseEntity> {
    await this.getEspaciosDeClaseById(updateEspacioDto.Id);
    const updateEspacioDeClase = await prisma.espaciosDeClase.update({
      where: { Id: updateEspacioDto.Id },
      data: updateEspacioDto!.values,
    });
    return EspaciosDeClaseEntity.fromObject(updateEspacioDeClase);
  }
  async deleteEspacioDeClase(id: number): Promise<EspaciosDeClaseEntity> {
    await this.getEspaciosDeClaseById(id);
    const deleteEspacioClase = await prisma.espaciosDeClase.delete({
      where: { Id: id },
    });
    return EspaciosDeClaseEntity.fromObject(deleteEspacioClase);
  }
  async getEspaciosDeClaseById(id: number): Promise<EspaciosDeClaseEntity> {
    const espacioClase = await prisma.espaciosDeClase.findFirst({
      where: { Id: id },
    });
    if (!espacioClase)
      throw CustomError.notFound(`EspaciosDeClase with Id ${id} not found`);
    return EspaciosDeClaseEntity.fromObject(espacioClase);
  }
}
