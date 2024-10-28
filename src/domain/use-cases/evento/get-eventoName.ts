import { EventoEntity } from "../../entities/evento.entity";
import { EventoRepository } from "../../repositories/evento.repository";
export interface GetEventoNameUseCase {
  execute(name: string): Promise<EventoEntity>;
}

export class GetEventoName implements GetEventoNameUseCase {
  constructor(private readonly repository: EventoRepository) {}
  /**
   * Executes the GetEvento use case.
   *
   * @param name - The name of the Evento to retrieve.
   * @returns A Promise that resolves to the EventoEntity if found, otherwise rejects.
   *
   * @throws Will throw an error if the repository method `getEventoByName` fails.
   */
  execute(name: string): Promise<EventoEntity> {
    return this.repository.getEventoByName(name);
  }
}
