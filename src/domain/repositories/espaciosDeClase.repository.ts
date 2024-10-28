import { CreateEspacioDto } from "../dtos/espaciosDeClase/create-espaciosDeClase.dto";
import { UpdateEspaciosDeClaseDto } from "../dtos/espaciosDeClase/update-espaciosDeClase.dto";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";
import { EspaciosDeClaseEntity } from "../entities/espaciosDeClase.entity";

export abstract class EspaciosClaseRepository {
  abstract createEspacioDeClase(
    createEspacioDto: CreateEspacioDto
  ): Promise<EspaciosDeClaseEntity>;
  abstract getEspaciosDeClases(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EspaciosDeClaseEntity>>;
  abstract getEspacioDeClaseByName(
    name: string
  ): Promise<EspaciosDeClaseEntity>;
  abstract updateEspacioDeClase(
    updateEspacioDto: UpdateEspaciosDeClaseDto
  ): Promise<EspaciosDeClaseEntity>;
  abstract deleteEspacioDeClase(id: number): Promise<EspaciosDeClaseEntity>;
  abstract getEspaciosDeClaseById(id: number): Promise<EspaciosDeClaseEntity>;
}
