import { ControlAsisEntity, PageReponseDtos } from "../../domain";
import { ControlAsisDatasource } from "../../domain/datasources/controlAsis.datasource";
import { ControlAsistenciasDto } from "../../domain/dtos/controlasis/asistencia.dto";
import { AsistenciaRepository } from "../../domain/repositories/controlAsis.repository";

export class ControlAsisRepositoryImpl implements AsistenciaRepository {
  constructor(private readonly datasource: ControlAsisDatasource) {}
  asitenciaItem(asistencia: ControlAsistenciasDto): Promise<ControlAsisEntity> {
    return this.datasource.asitenciaItem(asistencia);
  }
  getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>> {
    return this.datasource.getItems(page, limit);
  }
  getItemById(
    id: number,
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>> {
    return this.datasource.getItemById(id, page, limit);
  }
  deleteItem(id: number): Promise<ControlAsisEntity> {
    return this.datasource.deleteItem(id);
  }
  getAlumnoReport(
    NumControl: number,
    fechaInicio: Date,
    fechaFin: Date
  ): Promise<ControlAsisEntity[]> {
    return this.datasource.getAlumnoReport(NumControl, fechaInicio, fechaFin);
  }
}
