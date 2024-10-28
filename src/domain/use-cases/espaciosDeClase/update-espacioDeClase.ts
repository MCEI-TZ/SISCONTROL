import { UpdateEspaciosDeClaseDto } from "../../dtos";
import { EspaciosDeClaseEntity } from "../../entities/espaciosDeClase.entity";
import { EspaciosClaseRepository } from "../../repositories/espaciosDeClase.repository";
export interface UpdateEspacioDeClaseUseCase {
  execute(dto: UpdateEspaciosDeClaseDto): Promise<EspaciosDeClaseEntity>;
}

export class UpdateEspaciosDeClase implements UpdateEspacioDeClaseUseCase {
  constructor(private readonly repository: EspaciosClaseRepository) {}
  execute(dto: UpdateEspaciosDeClaseDto): Promise<EspaciosDeClaseEntity> {
    return this.repository.updateEspacioDeClase(dto);
  }
}
