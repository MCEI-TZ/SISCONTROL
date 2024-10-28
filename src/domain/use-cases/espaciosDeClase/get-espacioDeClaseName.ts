import { EspaciosDeClaseEntity } from "../../entities/espaciosDeClase.entity";
import { EspaciosClaseRepository } from "../../repositories/espaciosDeClase.repository";
export interface GetEspacioDeClaseNameUseCase {
  execute(name: string): Promise<EspaciosDeClaseEntity>;
}

export class GetEspacioDeClaseName implements GetEspacioDeClaseNameUseCase {
  constructor(private readonly repository: EspaciosClaseRepository) {}
  execute(name: string): Promise<EspaciosDeClaseEntity> {
    return this.repository.getEspacioDeClaseByName(name);
  }
}
