import { Request, Response } from "express";
import {
  AlumnoEntity,
  AlumnoRepository,
  CustomError,
  GetAlumno,
  GetAlumnos,
  PaginationDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class AlumnosController {
  constructor(
    private readonly alumnoRepository: AlumnoRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-alumno-presentation",
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

  public getAlumnos = (req: Request, res: Response) => {
    try {
      const { page = 1, limit = 5 } = req.query;
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetAlumnos(this.alumnoRepository)
        .execute(pageNumber, limitNumber)
        .then((alumnos) => res.json(alumnos))
        .catch((error) => {
          this.handleError(res, error);
        });
    } catch (err) {
      this.handleError(res, err);
      return;
    }
  };

  public getAlumno = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetAlumno(this.alumnoRepository)
      .execute(id)
      .then((alumno) => res.json(alumno))
      .catch((error) => this.handleError(res, error));
  };
}
