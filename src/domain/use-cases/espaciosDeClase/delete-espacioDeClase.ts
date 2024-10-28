import { EspaciosDeClaseEntity } from "../../entities/espaciosDeClase.entity";
import { EspaciosClaseRepository } from "../../repositories/espaciosDeClase.repository";
export interface DeleteEspacioDeClaseUseClase {
  execute(id: number): Promise<EspaciosDeClaseEntity>;
}

export class DeleteEspacioDeClase implements DeleteEspacioDeClaseUseClase {
  constructor(private readonly repository: EspaciosClaseRepository) {}
  execute(id: number): Promise<EspaciosDeClaseEntity> {
    return this.repository.deleteEspacioDeClase(id);
  }
}
