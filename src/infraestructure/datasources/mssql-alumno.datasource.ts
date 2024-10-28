import { prisma } from "../../data/mssql";
import {
  AlumnoEntity,
  AlumnoDatasource,
  CustomError,
  PageReponseDtos,
} from "../../domain";
export class AlumnoDatasourceImpl implements AlumnoDatasource {
  async getAlumnos(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AlumnoEntity>> {
    const skip = (page - 1) * limit;
    const alumnos = await prisma.alumno.findMany({
      skip: skip,
      take: limit,
    });
    const total = await prisma.alumno.count();
    const data = alumnos.map((alumno: { [key: string]: any; }) => AlumnoEntity.fromObject(alumno));

    const res: PageReponseDtos<AlumnoEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page: page,
      total: total,
    };
    return res;
  }
  async getAlumnoId(id: number): Promise<AlumnoEntity> {
    const alumno = await prisma.alumno.findFirst({
      where: { NumControl: id },
    });
    if (!alumno) throw CustomError.notFound(`Todo with id ${id} not found`);
    return AlumnoEntity.fromObject(alumno);
  }
}
