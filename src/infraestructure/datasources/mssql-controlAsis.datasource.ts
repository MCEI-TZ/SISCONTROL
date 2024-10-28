import { prisma } from "../../data/mssql";
import { ControlAsisEntity, CustomError, PageReponseDtos } from "../../domain";
import { ControlAsisDatasource } from "../../domain/datasources/controlAsis.datasource";
import { ControlAsistenciasDto } from "../../domain/dtos/controlasis/asistencia.dto";

export class ControlAsisDatasourceImpl implements ControlAsisDatasource {
  async asitenciaItem(
    asistenciaControlAsisDto: ControlAsistenciasDto
  ): Promise<ControlAsisEntity> {
    const AlumnoAsis = await prisma.controlAsis.findFirst({
      where: {
        NumControl: asistenciaControlAsisDto.NumControl,
        HoraSalida: null,
        IdEspacio: asistenciaControlAsisDto.IdEspacio,
      },
    });

    if (AlumnoAsis == null) {
      const controlAsis = await prisma.controlAsis.create({
        data: {
          ...asistenciaControlAsisDto,
          HoraEntrada: new Date(),
        },
      });
      return ControlAsisEntity.fromObject(controlAsis);
    } else {
      const controlAsis = await prisma.controlAsis.update({
        where: {
          IdControlAsis: AlumnoAsis.IdControlAsis,
          NumControl: AlumnoAsis.NumControl,
          idTipo: AlumnoAsis.idTipo,
          IdEspacio: AlumnoAsis.IdEspacio,
        },
        data: {
          ...asistenciaControlAsisDto.values,
          HoraSalida: new Date(),
        },
      });
      return ControlAsisEntity.fromObject(controlAsis);
    }
  }

  async getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>> {
    const skip = (page - 1) * limit;
    const controlsAsis = await prisma.controlAsis.findMany({
      orderBy: {
        IdControlAsis: "desc",
      },
      skip,
      take: limit,
    });

    const total = await prisma.controlAsis.count();

    const data = controlsAsis.map((control) =>
      ControlAsisEntity.fromObject(control)
    );

    const res: PageReponseDtos<ControlAsisEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };

    return res;
  }

  async getItemById(
    id: number,
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>> {
    const skip = (page - 1) * limit;
    const controlsAsis = await prisma.controlAsis.findMany({
      orderBy: {
        IdControlAsis: "desc",
      },
      skip,
      take: limit,
      where: { NumControl: id },
    });

    const total = await prisma.controlAsis.count();

    const data = controlsAsis.map((control) =>
      ControlAsisEntity.fromObject(control)
    );

    const res: PageReponseDtos<ControlAsisEntity> = {
      data: data,
      limit: limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };

    return res;
  }

  async deleteItem(id: number): Promise<ControlAsisEntity> {
    const deleteControlAsis = await prisma.controlAsis.delete({
      where: { IdControlAsis: id },
    });
    return ControlAsisEntity.fromObject(deleteControlAsis);
  }

  async getAlumnoReport(
    NumControl: number,
    fechaInicio: Date,
    fechaFin: Date
  ): Promise<ControlAsisEntity[]> {
    const AlumnoNumControl = await prisma.controlAsis.findMany({
      where: {
        NumControl: NumControl,
        HoraEntrada: { gte: fechaInicio, lte: fechaFin },
      },
    });
    return AlumnoNumControl.map((alumno) =>
      ControlAsisEntity.fromObject(alumno)
    );
  }
}
