import { CreateEspacioDto } from "../../dtos";
import { EspaciosDeClaseEntity } from "../../entities/espaciosDeClase.entity";
import { EspaciosClaseRepository } from "../../repositories/espaciosDeClase.repository";
export interface CreateEspacioDeClaseUseCase {
  execute(dto: CreateEspacioDto): Promise<EspaciosDeClaseEntity>;
}

export class CreateEspacioDeClase implements CreateEspacioDeClaseUseCase {
  constructor(private readonly repository: EspaciosClaseRepository) {}
  execute(dto: CreateEspacioDto): Promise<EspaciosDeClaseEntity> {
    return this.repository.createEspacioDeClase(dto);
  }
}
