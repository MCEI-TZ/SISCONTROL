import { Request, Response } from "express";
import {
  DepartamentoRepository,
  CustomError,
  GetDepartamento,
  GetDepartamentos,
  PaginationDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class DepartamentosController {
  constructor(
    private readonly departamentoRepository: DepartamentoRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-carrera-presentation",
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

  public getDepartamentos = (req: Request, res: Response) => {
    try {
      const { page = 1, limit = 5 } = req.query;
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetDepartamentos(this.departamentoRepository)
        .execute(pageNumber, limitNumber)
        .then((departamentos) => res.json(departamentos))
        .catch((error) => {
          this.handleError(res, error);
        });
    } catch (err) {
      this.handleError(res, err);
      return;
    }
  };

  public getDepartamento = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetDepartamento(this.departamentoRepository)
      .execute(id)
      .then((alumno) => res.json(alumno))
      .catch((error) => this.handleError(res, error));
  };
}
