import { ControlAsisEntity } from "../../entities/controlasis.entity";
import { AsistenciaRepository } from "../../repositories/controlAsis.repository";
export interface DeleteControlAsisUseCase {
  execute(id: number): Promise<ControlAsisEntity>;
}

export class DeleteControlAsis implements DeleteControlAsisUseCase {
  constructor(private readonly repository: AsistenciaRepository) {}
  execute(id: number): Promise<ControlAsisEntity> {
    return this.repository.deleteItem(id);
  }
}
