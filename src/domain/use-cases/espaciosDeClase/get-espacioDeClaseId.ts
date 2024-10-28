import { EspaciosDeClaseEntity } from "../../entities/espaciosDeClase.entity";
import { EspaciosClaseRepository } from "../../repositories/espaciosDeClase.repository";
export interface GetEspacioDeClaseIdUseCase {
  execute(id: number): Promise<EspaciosDeClaseEntity>;
}

export class GetEspacioDeClaseId implements GetEspacioDeClaseIdUseCase {
  constructor(private readonly repository: EspaciosClaseRepository) {}
  execute(id: number): Promise<EspaciosDeClaseEntity> {
    return this.repository.getEspaciosDeClaseById(id);
  }
}
