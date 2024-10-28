import { UpdateAsuntoDto } from "../../dtos";
import { AsuntoEntity } from "../../entities/asunto.entity";
import { AsuntoRepository } from "../../repositories/asunto.repository";

export interface UpdateAsuntoUseCase {
  execute(dto: UpdateAsuntoDto): Promise<AsuntoEntity>;
}
export class UpdateAsunto implements UpdateAsuntoUseCase {
  constructor(private readonly repository: AsuntoRepository) {}

  /**
   * Executes the update operation for an AsuntoEntity using the provided UpdateAsuntoDto.
   *
   * @param dto - The data transfer object containing the updated information for the AsuntoEntity.
   * @returns A Promise that resolves to the updated AsuntoEntity.
   * @throws Will throw an error if the update operation fails.
   */
  execute(dto: UpdateAsuntoDto): Promise<AsuntoEntity> {
    return this.repository.updateAsunto(dto);
  }
}
