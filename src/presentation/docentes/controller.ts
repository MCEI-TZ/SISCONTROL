import { Request, Response } from "express";
import {
  DocenteEntity,
  DocenteRepository,
  CustomError,
  GetDocentes,
  GetDocente,
  PaginationDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class DocenteController {
  constructor(
    private readonly docenteRepository: DocenteRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-docente-presentation",
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

  public getDocentes = (req: Request, res: Response) => {
    const { page = 1, limit = 5 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetDocentes(this.docenteRepository)
        .execute(pageNumber, limitNumber)
        .then((docentes) => res.json(docentes))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getDocente = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetDocente(this.docenteRepository)
      .execute(id)
      .then((docente) => res.json(docente))
      .catch((error) => this.handleError(res, error));
  };
}
