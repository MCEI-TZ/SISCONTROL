import { UpdateEventoDto } from "../../dtos";
import { EventoEntity } from "../../entities/evento.entity";
import { EventoRepository } from "../../repositories/evento.repository";
export interface IUpdateEventoUseCase {
  execute(dto: UpdateEventoDto): Promise<EventoEntity>;
}

export class UpdateEvento implements IUpdateEventoUseCase {
  constructor(private readonly repository: EventoRepository) {}
  /**
   * Executes the update operation for an Evento.
   *
   * @param dto - The data transfer object containing the updated information for the Evento.
   * @returns A Promise that resolves to the updated EventoEntity.
   *
   * @throws Will throw an error if the Evento does not exist or if there are any validation errors.
   *
   * @remarks
   * This method is responsible for updating an existing Evento in the database.
   * It uses the provided UpdateEventoDto to perform the update operation.
   *
   * @example
   * ```typescript
   * const updateDto: UpdateEventoDto = { id: 1, name: 'New Event Name',... };
   * const updatedEvento = await updateEventoUseCase.execute(updateDto);
   * console.log(updatedEvento); // Output: { id: 1, name: 'New Event Name',... }
   * ```
   */
  execute(dto: UpdateEventoDto): Promise<EventoEntity> {
    return this.repository.updateEvento(dto);
  }
}
