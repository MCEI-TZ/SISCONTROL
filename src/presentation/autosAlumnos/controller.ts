import { Request, Response } from "express";
import {
  BaseRepository,
  AutosAlumnosEntity,
  CustomError,
  GetAutosAlumnos,
  GetAutosAlumno,
  CreateAutosAlumnoDto,
  CreateAutosAlumno,
  UpdateAutosAlumnoDto,
  UpdateAutosAlumno,
  DeleteAutosAlumno,
  PaginationDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class AutosAlumnosController {
  constructor(
    private readonly autosAlumnoRepository: BaseRepository<AutosAlumnosEntity>,
    private readonly logRepository: LogRepository
  ) {}

  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-autosAlumnos-presentation",
    };
    if (error instanceof CustomError) {
      oLog.message = error.message;
      this.logRepository.saveLog(oLog);

      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    oLog.message = error as string;
    res.status(500).json({ error: "Internal Server Error -check logs" });
  };

  public getAutosAlumnos = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetAutosAlumnos(this.autosAlumnoRepository)
        .execute(pageNumber, limitNumber)
        .then((autosAlumnos) => res.json(autosAlumnos))
        .catch((error) => this.handleError(res, error));
    } catch (err) {
      this.handleError(res, err);
      return;
    }
  };

  public getAutoAlumno = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetAutosAlumno(this.autosAlumnoRepository)
      .execute(id)
      .then((autoAlumno) => res.json(autoAlumno))
      .catch((error) => this.handleError(res, error));
  };

  public createAutoAlumno = (req: Request, res: Response) => {
    const [error, createAutoAlumnoDto] = CreateAutosAlumnoDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateAutosAlumno(this.autosAlumnoRepository)
      .execute(createAutoAlumnoDto!)
      .then((autoAlumno) => res.status(201).json(autoAlumno))
      .catch((error) => this.handleError(res, error));
  };

  public updateAutoAlumno = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAutoAlumnoDto] = UpdateAutosAlumnoDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateAutosAlumno(this.autosAlumnoRepository)
      .execute(updateAutoAlumnoDto!)
      .then((autoAlumno) => res.json(autoAlumno))
      .catch((error) => this.handleError(res, error));
  };

  public deleteAutoAlumno = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteAutosAlumno(this.autosAlumnoRepository)
      .execute(id)
      .then((autoAlumno) => res.json(autoAlumno))
      .catch((error) => this.handleError(res, error));
  };
}
