import { ControlAsisEntity } from "../../entities/controlasis.entity";
import { AsistenciaRepository } from "../../repositories/controlAsis.repository";

export interface GetAlumnoReportUseCase {
  execute(
    NumControl: number,
    fechaInicio: Date,
    fechaFin: Date
  ): Promise<ControlAsisEntity[]>;
}

export class GetAlumnoReport implements GetAlumnoReportUseCase {
  constructor(private readonly repository: AsistenciaRepository) {}
  execute(
    NumControl: number,
    fechaInicio: Date,
    fechaFin: Date
  ): Promise<ControlAsisEntity[]> {
    return this.repository.getAlumnoReport(NumControl, fechaInicio, fechaFin);
  }
}
