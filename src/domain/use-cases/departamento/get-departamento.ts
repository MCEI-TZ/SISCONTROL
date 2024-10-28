import { DepartamentoEntity } from "../../entities/departamento.entity";
import { DepartamentoRepository } from "../../repositories/departamento.repository";
export interface GetDepartamentoUseCase {
  execute(id: number): Promise<DepartamentoEntity>;
}

export class GetDepartamento implements GetDepartamentoUseCase {
  constructor(private readonly repository: DepartamentoRepository) {}
  execute(id: number): Promise<DepartamentoEntity> {
    return this.repository.getDepartamentoId(id);
  }
}
