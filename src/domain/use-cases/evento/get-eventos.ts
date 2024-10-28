import { PageReponseDtos } from "../../dtos/shared/pagination.response.dto";
import { EventoEntity } from "../../entities/evento.entity";
import { EventoRepository } from "../../repositories/evento.repository";

export interface GetEventosUseCase {
  execute(page: number, limit: number): Promise<PageReponseDtos<EventoEntity>>;
}

export class GetEventos implements GetEventosUseCase {
  constructor(private readonly repository: EventoRepository) {}
  /**
   * Executes the GetEventos use case.
   * Fetches a paginated list of EventoEntities from the repository.
   *
   * @param page - The page number for pagination.
   * @param limit - The number of records per page.
   *
   * @returns A Promise that resolves to a PageReponseDtos containing EventoEntities.
   *
   * @throws Will throw an error if the repository fails to fetch the data.
   */
  execute(page: number, limit: number): Promise<PageReponseDtos<EventoEntity>> {
    return this.repository.getEventos(page, limit);
  }
}
