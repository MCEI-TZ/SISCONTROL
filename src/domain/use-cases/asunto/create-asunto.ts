import { CreateAsuntoDto } from "../../dtos";
import { AsuntoEntity } from "../../entities/asunto.entity";
import { AsuntoRepository } from "../../repositories/asunto.repository";

export interface CreateAsuntoUseCase {
  execute(dto: CreateAsuntoDto): Promise<AsuntoEntity>;
}

export class CreateAsunto implements CreateAsuntoUseCase {
  constructor(private readonly repository: AsuntoRepository) {}
  /**
   * Executes the use case to create a new Asunto.
   *
   * @param dto - The data transfer object containing the necessary information to create a new Asunto.
   * @returns A promise that resolves to the newly created AsuntoEntity.
   * @throws An error if the creation fails.
   */
  execute(dto: CreateAsuntoDto): Promise<AsuntoEntity> {
    return this.repository.createAsunto(dto);
  }
}
