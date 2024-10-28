import { prisma } from "../../data/mssql";
import {
  BaseDatasource,
  CreateVehiculoDto,
  CustomError,
  PageReponseDtos,
  UpdateVehiculoDto,
  VehiculoEntity,
} from "../../domain";

export class VehiculoDatasourceImpl implements BaseDatasource<VehiculoEntity> {
  async createItem(
    createVehiculoDto: CreateVehiculoDto
  ): Promise<VehiculoEntity> {
    const vehiculo = await prisma.vehiculo.create({
      data: createVehiculoDto!,
    });
    return VehiculoEntity.fromObject(vehiculo);
  }
  async getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VehiculoEntity>> {
    const skip = (page - 1) * limit;
    const vehiculos = await prisma.vehiculo.findMany({
      skip,
      take: limit,
    });

    const total = await prisma.vehiculo.count();

    const data = vehiculos.map((vehiculo) =>
      VehiculoEntity.fromObject(vehiculo)
    );

    const res: PageReponseDtos<VehiculoEntity> = {
      data,
      limit,
      next: page + 1,
      prev: page - 1,
      page,
      total,
    };
    return res;
  }
  async getItemById(id: number): Promise<VehiculoEntity> {
    const vehiculo = await prisma.vehiculo.findFirst({
      where: { IdVehiculo: id },
    });
    if (!vehiculo) throw CustomError.notFound(`Vehiculo ${id} not found`);
    return VehiculoEntity.fromObject(vehiculo);
  }
  async updateItem(
    updateVehiculoDto: UpdateVehiculoDto
  ): Promise<VehiculoEntity> {
    await this.getItemById(updateVehiculoDto.IdVehiculo);
    const updateVehiculo = await prisma.vehiculo.update({
      where: { IdVehiculo: updateVehiculoDto.IdVehiculo },
      data: updateVehiculoDto!.values,
    });
    return VehiculoEntity.fromObject(updateVehiculo);
  }
  async deleteItem(id: number): Promise<VehiculoEntity> {
    await this.getItemById(id);
    const deleteVehiculo = await prisma.vehiculo.delete({
      where: { IdVehiculo: id },
    });
    return VehiculoEntity.fromObject(deleteVehiculo);
  }
}
