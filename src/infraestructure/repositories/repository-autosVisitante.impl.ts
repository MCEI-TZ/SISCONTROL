import {
  BaseRepository,
  AutosVisitanteEntity,
  BaseDatasource,
  CreateAutosVisitanteDto,
  UpdateAutosVisitanteDto,
  PageReponseDtos,
} from "../../domain";

export class AutosVisitanteRepositoryImpl
  implements BaseRepository<AutosVisitanteEntity>
{
  constructor(
    private readonly datasource: BaseDatasource<AutosVisitanteEntity>
  ) {}
  createItem(
    createAutosVisitanteDto: CreateAutosVisitanteDto
  ): Promise<AutosVisitanteEntity> {
    return this.datasource.createItem(createAutosVisitanteDto);
  }
  getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosVisitanteEntity>> {
    return this.datasource.getItems(page, limit);
  }
  getItemById(id: number): Promise<AutosVisitanteEntity> {
    return this.datasource.getItemById(id);
  }
  updateItem(
    updateAutosVisitanteDto: UpdateAutosVisitanteDto
  ): Promise<AutosVisitanteEntity> {
    return this.datasource.updateItem(updateAutosVisitanteDto);
  }
  deleteItem(id: number): Promise<AutosVisitanteEntity> {
    return this.datasource.deleteItem(id);
  }
}
