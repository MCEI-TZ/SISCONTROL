import { ControlAsistenciasDto } from "../dtos/controlasis/asistencia.dto";
import { ControlAsisEntity } from "../entities/controlasis.entity";
import { PageReponseDtos } from "../dtos/shared/pagination.response.dto";

export abstract class ControlAsisDatasource {
  abstract asitenciaItem(
    asistencia: ControlAsistenciasDto
  ): Promise<ControlAsisEntity>;
  abstract getItems(
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>>;
  abstract getItemById(
    id: number,
    page: number,
    limit: number
  ): Promise<PageReponseDtos<ControlAsisEntity>>;
  abstract deleteItem(id: number): Promise<ControlAsisEntity>;
  abstract getAlumnoReport(
    NumControl: number,
    fechaInicio: Date,
    fechaFin: Date
  ): Promise<ControlAsisEntity[]>;
}
