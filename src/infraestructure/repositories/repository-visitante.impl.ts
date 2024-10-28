import {
  BaseDatasource,
  BaseRepository,
  CreateVisitanteDto,
  PageReponseDtos,
  UpdateVisitanteDto,
  VisitanteEntity,
} from "../../domain";

export class VisitanteRepositoryImpl
  implements BaseRepository<VisitanteEntity>
{
  constructor(private readonly datasource: BaseDatasource<VisitanteEntity>) {}
  createItem(createVisitanteDto: CreateVisitanteDto): Promise<VisitanteEntity> {
    return this.datasource.createItem(createVisitanteDto);
  }
  getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<VisitanteEntity>> {
    return this.datasource.getItems(page, limit);
  }
  getItemById(id: number): Promise<VisitanteEntity> {
    return this.datasource.getItemById(id);
  }
  updateItem(updateVisitanteDto: UpdateVisitanteDto): Promise<VisitanteEntity> {
    return this.datasource.updateItem(updateVisitanteDto);
  }
  deleteItem(id: number): Promise<VisitanteEntity> {
    return this.datasource.deleteItem(id);
  }
}
