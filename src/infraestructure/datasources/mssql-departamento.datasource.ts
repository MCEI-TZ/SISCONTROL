import { prisma } from "../../data/mssql";
import {
  DepartamentoEntity,
  DepartamentoDatasource,
  CustomError,
  PageReponseDtos,
} from "../../domain";
export class DepartamentoDatasourceImpl implements DepartamentoDatasource {
  async getDepartamentos(page: number, limit: number): Promise<PageReponseDtos<DepartamentoEntity>> {
    const skip = (page - 1) * limit;
    const departamentos = await prisma.departamento.findMany({
      skip: skip,
      take: limit,
    });
    const total = await prisma.departamento.count();
    const data = departamentos.map((carrera) => DepartamentoEntity.fromObject(carrera));

    const res: PageReponseDtos<DepartamentoEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page: page,
      total: total,
    };
    return res;
  }
  async getDepartamentoId(id: number): Promise<DepartamentoEntity> {
    const departamento = await prisma.departamento.findFirst({
        where: { IdDepa: id },
      });
      if (!departamento) throw CustomError.notFound(`Todo with id ${id} not found`);
      return DepartamentoEntity.fromObject(departamento);
  }
}
