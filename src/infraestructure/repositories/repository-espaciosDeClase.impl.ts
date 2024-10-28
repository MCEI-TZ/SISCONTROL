import {
  CreateEspacioDto,
  EspaciosClaseDatasource,
  EspaciosClaseRepository,
  EspaciosDeClaseEntity,
  PageReponseDtos,
  UpdateEspaciosDeClaseDto,
} from "../../domain";
export class EspaciosDeClaseRepositoryImpl implements EspaciosClaseRepository {
  constructor(private readonly datasource: EspaciosClaseDatasource) {}
  createEspacioDeClase(
    createEspacioDto: CreateEspacioDto
  ): Promise<EspaciosDeClaseEntity> {
    return this.datasource.createEspacioDeClase(createEspacioDto);
  }
  getEspaciosDeClases(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<EspaciosDeClaseEntity>> {
    return this.datasource.getEspaciosDeClases(page, limit);
  }
  getEspacioDeClaseByName(name: string): Promise<EspaciosDeClaseEntity> {
    return this.datasource.getEspacioDeClaseByName(name);
  }
  updateEspacioDeClase(
    updateEspacioDto: UpdateEspaciosDeClaseDto
  ): Promise<EspaciosDeClaseEntity> {
    return this.datasource.updateEspacioDeClase(updateEspacioDto);
  }
  deleteEspacioDeClase(id: number): Promise<EspaciosDeClaseEntity> {
    return this.datasource.deleteEspacioDeClase(id);
  }
  getEspaciosDeClaseById(id: number): Promise<EspaciosDeClaseEntity> {
    return this.datasource.getEspaciosDeClaseById(id);
  }
}
