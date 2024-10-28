import { prisma } from "../../data/mssql";
import {
  DocenteDatasource,
  CustomError,
  DocenteEntity,
  PageReponseDtos,
} from "../../domain";

export class DocenteDatasourceImpl implements DocenteDatasource {
  async getDocentes(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<DocenteEntity>> {
    const skip = (page - 1) * limit;
    const docentes = await prisma.docente.findMany({
      skip,
      take: limit,
    });
    const total = await prisma.docente.count();

    const data = docentes.map((docente) => DocenteEntity.fromObject(docente));

    const res: PageReponseDtos<DocenteEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };
    return res;
  }
  async getDocenteId(id: number): Promise<DocenteEntity> {
    const docente = await prisma.docente.findFirst({
      where: { NumNomina: id },
    });
    if (!docente) throw CustomError.notFound(`Docente with id ${id} not found`);
    return DocenteEntity.fromObject(docente);
  }
}
