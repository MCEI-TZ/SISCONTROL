import { PageReponseDtos } from "../../dtos";
import { AsuntoEntity } from "../../entities/asunto.entity";
import { AsuntoRepository } from "../../repositories/asunto.repository";

export interface GetAsuntosUseCase {
  execute(page: number, limit: number): Promise<PageReponseDtos<AsuntoEntity>>;
}

export class GetAsuntos implements GetAsuntosUseCase {
  constructor(private readonly repository: AsuntoRepository) {}
  /**
   * Executes the GetAsuntos use case.
   * Fetches a paginated list of Asuntos from the repository.
   *
   * @param page - The page number for pagination.
   * @param limit - The number of items per page.
   * @returns A Promise that resolves to a PageReponseDtos containing AsuntoEntities.
   */
  execute(page: number, limit: number): Promise<PageReponseDtos<AsuntoEntity>> {
    return this.repository.GetAsuntos(page, limit);
  }
}
