import { Request, Response } from "express";
import {
  AutosVisitanteEntity,
  BaseRepository,
  CreateAutosVisitante,
  CreateAutosVisitanteDto,
  CustomError,
  DeleteAutosVisitante,
  GetAutoVisitante,
  GetAutosVisitante,
  PaginationDto,
  UpdateAutosVisitante,
  UpdateAutosVisitanteDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class AutosVisitanteController {
  constructor(
    private readonly autosVisitanteRepository: BaseRepository<AutosVisitanteEntity>,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-autosVisitantes-presentation",
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

  public getAutosVisitante = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetAutosVisitante(this.autosVisitanteRepository)
        .execute(pageNumber, limitNumber)
        .then((autosVisitantes) => res.json(autosVisitantes))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getAutoVisitante = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetAutoVisitante(this.autosVisitanteRepository)
      .execute(id)
      .then((autoVisitante) => res.json(autoVisitante))
      .catch((error) => this.handleError(res, error));
  };

  public createAutoVisitante = (req: Request, res: Response) => {
    const [error, createAutoVisitanteDto] = CreateAutosVisitanteDto.create(
      req.body
    );
    if (error) return res.status(400).json({ error });
    new CreateAutosVisitante(this.autosVisitanteRepository)
      .execute(createAutoVisitanteDto!)
      .then((autoVisitante) => res.status(201).json(autoVisitante))
      .catch((error) => this.handleError(res, error));
  };

  public updateAutoVisitante = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAutoVisitanteDto] = UpdateAutosVisitanteDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateAutosVisitante(this.autosVisitanteRepository)
      .execute(updateAutoVisitanteDto!)
      .then((autoVisitante) => res.json(autoVisitante))
      .catch((error) => this.handleError(res, error));
  };

  public deleteautoVisitante = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteAutosVisitante(this.autosVisitanteRepository)
      .execute(id)
      .then((autoVisitante) => res.json(autoVisitante))
      .catch((error) => this.handleError(res, error));
  };
}
