import {
  BaseRepository,
  BaseDatasource,
  VehiculoEntity,
  CreateVehiculoDto,
  UpdateVehiculoDto,
  PageReponseDtos,
} from "../../domain";
export class VehiculoRepositoryImpl implements BaseRepository<VehiculoEntity> {
  constructor(private readonly datasource: BaseDatasource<VehiculoEntity>) {}
  createItem(createVehiculoDto: CreateVehiculoDto): Promise<VehiculoEntity> {
    return this.datasource.createItem(createVehiculoDto);
  }
  getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VehiculoEntity>> {
    return this.datasource.getItems(page, limit);
  }
  getItemById(id: number): Promise<VehiculoEntity> {
    return this.datasource.getItemById(id);
  }
  updateItem(updateVehiculoDto: UpdateVehiculoDto): Promise<VehiculoEntity> {
    return this.datasource.updateItem(updateVehiculoDto);
  }
  deleteItem(id: number): Promise<VehiculoEntity> {
    return this.datasource.deleteItem(id);
  }
}
