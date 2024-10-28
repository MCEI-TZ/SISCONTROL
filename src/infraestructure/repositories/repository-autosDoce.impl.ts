import {
  BaseRepository,
  AutosDoceEntity,
  CreateAutosDoceDto,
  UpdateAutosDoceDto,
  BaseDatasource,
  PageReponseDtos,
} from "../../domain";
export class AutosDoceRepositoryimpl
  implements BaseDatasource<AutosDoceEntity>
{
  constructor(private readonly datasource: BaseRepository<AutosDoceEntity>) {}
  createItem(createAutosDoceDto: CreateAutosDoceDto): Promise<AutosDoceEntity> {
    return this.datasource.createItem(createAutosDoceDto);
  }
  getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosDoceEntity>> {
    return this.datasource.getItems(page, limit);
  }
  getItemById(id: number): Promise<AutosDoceEntity> {
    return this.datasource.getItemById(id);
  }
  updateItem(updateAutosDoceDto: UpdateAutosDoceDto): Promise<AutosDoceEntity> {
    return this.datasource.updateItem(updateAutosDoceDto);
  }
  deleteItem(id: number): Promise<AutosDoceEntity> {
    return this.datasource.deleteItem(id);
  }
}
