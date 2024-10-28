import { prisma } from "../../data/mssql";
import {
  AlumnoEntity,
  AutosAlumnosEntity,
  BaseDatasource,
  CreateAutosAlumnoDto,
  CustomError,
  PageReponseDtos,
  UpdateAutosAlumnoDto,
} from "../../domain";

export class AutosAlumnoDatasourceImpl
  implements BaseDatasource<AutosAlumnosEntity>
{
  async createItem(
    createAutosAlumnoDto: CreateAutosAlumnoDto
  ): Promise<AutosAlumnosEntity> {
    const autoAumno = await prisma.autosAlumnos.create({
      data: createAutosAlumnoDto!,
    });
    return AutosAlumnosEntity.fromObject(autoAumno);
  }
  async getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosAlumnosEntity>> {
    const skip = (page - 1) * limit;
    const autosAlumnos = await prisma.autosAlumnos.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.autosAlumnos.count();

    const data = autosAlumnos.map((autoAlumno) =>
      AutosAlumnosEntity.fromObject(autoAlumno)
    );
    const res: PageReponseDtos<AutosAlumnosEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };
    return res;
  }
  async getItemById(id: number): Promise<AutosAlumnosEntity> {
    const autoAlumno = await prisma.autosAlumnos.findFirst({
      where: { NumControl: id },
    });
    if (!autoAlumno)
      throw CustomError.notFound(`AutoAlumno with id ${id} not found`);
    return AutosAlumnosEntity.fromObject(autoAlumno);
  }
  async updateItem(
    updateAutoAlumnoDto: UpdateAutosAlumnoDto
  ): Promise<AutosAlumnosEntity> {
    await this.getItemById(updateAutoAlumnoDto.IdVehiculo);
    const updateAutoAlumno = await prisma.autosAlumnos.update({
      where: {
        NumControl_IdVehiculo: updateAutoAlumnoDto,
      },
      data: updateAutoAlumnoDto!.values,
    });
    return AutosAlumnosEntity.fromObject(updateAutoAlumno);
  }
  //   todo: Falta implementar correctamente
  async deleteItem(id: number): Promise<AutosAlumnosEntity> {
    await this.getItemById(id);
    const deleteAutoAlumno = await prisma.autosAlumnos.delete({
      where: { NumControl_IdVehiculo: undefined },
    });
    return AutosAlumnosEntity.fromObject(deleteAutoAlumno);
  }
}
