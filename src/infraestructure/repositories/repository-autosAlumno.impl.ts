import {
  BaseRepository,
  AutosAlumnosEntity,
  CreateAutosAlumnoDto,
  UpdateAutosAlumnoDto,
  BaseDatasource,
  PageReponseDtos,
} from "../../domain";
export class AutosAlumnosRepositoryImpl
  implements BaseRepository<AutosAlumnosEntity>
{
  constructor(
    private readonly datasource: BaseDatasource<AutosAlumnosEntity>
  ) {}
  createItem(
    createAutosAlumnosDto: CreateAutosAlumnoDto
  ): Promise<AutosAlumnosEntity> {
    return this.datasource.createItem(createAutosAlumnosDto);
  }
  getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosAlumnosEntity>> {
    return this.datasource.getItems(page, limit);
  }
  getItemById(id: number): Promise<AutosAlumnosEntity> {
    return this.datasource.getItemById(id);
  }
  updateItem(
    updateAutosAlumnosDto: UpdateAutosAlumnoDto
  ): Promise<AutosAlumnosEntity> {
    return this.datasource.updateItem(updateAutosAlumnosDto);
  }
  deleteItem(id: number): Promise<AutosAlumnosEntity> {
    return this.datasource.deleteItem(id);
  }
}
