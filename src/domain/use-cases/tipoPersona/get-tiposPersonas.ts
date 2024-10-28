import { PageReponseDtos } from "../../dtos";
import { TipoPersonaEntity } from "../../entities/tipoPersona.entity";
import { TipoPersonaRepository } from "../../repositories/tipoPersona.repository";
export interface GetTiposPersonasUseCase {
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoPersonaEntity>>;
}

export class GetTiposPersonas implements GetTiposPersonasUseCase {
  constructor(private readonly repository: TipoPersonaRepository) {}
  /**
   * Executes the use case to retrieve a paginated list of {@link TipoPersonaEntity} instances.
   *
   * @param page - The page number to retrieve.
   * @param limit - The maximum number of items to include in each page.
   *
   * @returns A promise that resolves to a {@link PageReponseDtos} containing the requested page of {@link TipoPersonaEntity} instances.
   */
  execute(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<TipoPersonaEntity>> {
    return this.repository.getTiposPersonas(page, limit);
  }
}
