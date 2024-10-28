import { EventoEntity } from "../../entities/evento.entity";
import { EventoRepository } from "../../repositories/evento.repository";
export interface DeleteEventoUseCase {
  execute(id: number): Promise<EventoEntity>;
}

export class DeleteEvento implements DeleteEventoUseCase {
  constructor(private readonly repository: EventoRepository) {}
  /**
   * Executes the delete operation for a specific Evento by its ID.
   *
   * @param id - The unique identifier of the Evento to be deleted.
   * @returns A Promise that resolves to the deleted Evento entity.
   * @throws Will throw an error if the Evento with the given ID does not exist.
   */
  execute(id: number): Promise<EventoEntity> {
    return this.repository.deleteEvento(id);
  }
}
