import { PageReponseDtos } from "../../dtos";
import { AutosDoceEntity as AutosDoceEntity } from "../../entities/autosDoce.entity";
import { BaseRepository } from "../../repositories/siscontrol.repository";
export interface GetAutosDoceUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosDoceEntity>>;
}

export class GetAutosDoces implements GetAutosDoceUseCase {
  constructor(private readonly respository: BaseRepository<AutosDoceEntity>) {}
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<AutosDoceEntity>> {
    return this.respository.getItems(page, limit);
  }
}
