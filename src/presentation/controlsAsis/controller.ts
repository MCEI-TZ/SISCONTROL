import { Request, Response } from "express";
import {
  AsistenciaControlAsis,
  CustomError,
  DeleteControlAsis,
  GetControlAsis,
  GetControlsAsis,
  PaginationDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { AsistenciaRepository } from "../../domain/repositories/controlAsis.repository";
import { ControlAsistenciasDto } from "../../domain/dtos/controlasis/asistencia.dto";
import { GetAlumnoReport } from "../../domain/use-cases/controlasis/getAlumnoReport";

export class ControlAsisController {
  constructor(
    private readonly controlAsisRepository: AsistenciaRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-controlAsis-presentation",
    };

    if (error instanceof CustomError) {
      oLog.message = error.message;

      this.logRepository.saveLog(oLog);

      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    oLog.message = error as string;
    this.logRepository.saveLog(oLog);

    res.status(500).json({ error: "Internal Server Error -check logs" });
  };

  public getControlsAsis = (req: Request, res: Response) => {
    const { page = 1, limit = 5 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetControlsAsis(this.controlAsisRepository)
        .execute(pageNumber, limitNumber)
        .then((controlsAsis) => res.json(controlsAsis))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getControlAsis = (req: Request, res: Response) => {
    const { page = 1, limit = 5 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }
      const { page: pageNumber, limit: limitNumber } = pagination!;

      const id = +req.params.id;
      new GetControlAsis(this.controlAsisRepository)
        .execute(id, pageNumber, limitNumber)
        .then((controlAsis) => res.json(controlAsis))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public asisControlAsis = (req: Request, res: Response) => {
    const [error, controlAsistenciasDto] = ControlAsistenciasDto.createOrUpdate(
      req.body
    );

    console.log(req.body);

    if (error) return res.status(400).json({ error });
    new AsistenciaControlAsis(this.controlAsisRepository)
      .execute(controlAsistenciasDto!)
      .then((controlAsis) => res.status(201).json(controlAsis))
      .catch((error) => this.handleError(res, error));
  };
  public deleteControlAsis = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteControlAsis(this.controlAsisRepository)
      .execute(id)
      .then((controlAsis) => res.json(controlAsis))
      .catch((error) => this.handleError(res, error));
  };

  public getAlumnoReport = (req: Request, res: Response) => {
    const { NumControl } = req.query;
    const { fechaInicio, fechaFin } = req.query;
    new GetAlumnoReport(this.controlAsisRepository)
      .execute(
        +NumControl!,
        new Date(fechaInicio as string),
        new Date(fechaFin as string)
      )
      .then((alumnoControl) => res.json(alumnoControl))
      .catch((error) => this.handleError(res, error));
  };
}
