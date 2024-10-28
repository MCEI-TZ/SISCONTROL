import { ControlAsistenciasDto } from "../../dtos/controlasis/asistencia.dto";
import { ControlAsisEntity } from "../../entities/controlasis.entity";
import { AsistenciaRepository } from "../../repositories/controlAsis.repository"
export interface AsistenciaControlAsisUseCase {
  execute(dto: ControlAsistenciasDto): Promise<ControlAsisEntity>;
}

export class AsistenciaControlAsis implements AsistenciaControlAsisUseCase {
  constructor(private readonly repository: AsistenciaRepository) {}
  execute(dto: ControlAsistenciasDto): Promise<ControlAsisEntity> {
    return this.repository.asitenciaItem(dto);
  }
}
