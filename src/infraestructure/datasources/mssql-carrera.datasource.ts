import { prisma } from "../../data/mssql";
import {
  CarreraEntity,
  CarreraDatasource,
  CustomError,
  PageReponseDtos,
} from "../../domain";
export class CarreraDatasourceImpl implements CarreraDatasource {
  async getCarreras(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<CarreraEntity>> {
    const skip = (page - 1) * limit;
    const carreras = await prisma.carrera.findMany({
      skip: skip,
      take: limit,
    });
    const total = await prisma.carrera.count();
    const data = carreras.map((carrera) => CarreraEntity.fromObject(carrera));

    const res: PageReponseDtos<CarreraEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page: page,
      total: total,
    };
    return res;
  }
  async getCarreraId(id: number): Promise<CarreraEntity> {
    const alumno = await prisma.carrera.findFirst({
      where: { IdCarre: id },
    });
    if (!alumno) throw CustomError.notFound(`Todo with id ${id} not found`);
    return CarreraEntity.fromObject(alumno);
  }
}
