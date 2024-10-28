import { EventoEntity } from "../../entities/evento.entity";
import { EventoRepository } from "../../repositories/evento.repository";
export interface GetEventoIdUseCase {
  execute(id: number): Promise<EventoEntity>;
}

export class GetEventoId implements GetEventoIdUseCase {
  constructor(private readonly repository: EventoRepository) {}
  /**
   * Executes the GetEventoId use case.
   *
   * @param id - The id of the Evento to retrieve.
   * @returns A Promise that resolves to the EventoEntity if found, otherwise rejects.
   *
   * @throws Will throw an error if the repository method `getEventoById` fails.
   */
  execute(id: number): Promise<EventoEntity> {
    return this.repository.getEventoById(id);
  }
}
