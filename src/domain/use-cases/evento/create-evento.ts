import { CreateEventoDto } from "../../dtos";
import { EventoEntity } from "../../entities/evento.entity";
import { EventoRepository } from "../../repositories/evento.repository";
export interface CreateEventoUseCase {
  execute(dto: CreateEventoDto): Promise<EventoEntity>;
}

export class CreateEvento implements CreateEventoUseCase {
  constructor(private readonly repository: EventoRepository) {}

  /**
   * Executes the use case to create a new Evento.
   *
   * @param dto - The data transfer object containing the necessary information to create a new Evento.
   * @returns A Promise that resolves to the newly created EventoEntity.
   *
   * @throws Will throw an error if the Evento creation fails.
   */
  execute(dto: CreateEventoDto): Promise<EventoEntity> {
    return this.repository.createEvento(dto);
  }
}
