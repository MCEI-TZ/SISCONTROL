import { CarreraEntity } from "../../entities/carrera.entity";
import { CarreraRepository } from "../../repositories/carrera.repository";
export interface GetCarreraUseCase {
  execute(id: number): Promise<CarreraEntity>;
}

export class GetCarrera implements GetCarreraUseCase {
  constructor(private readonly repository: CarreraRepository) {}
  execute(id: number): Promise<CarreraEntity> {
    return this.repository.getCarreraId(id);
  }
}
