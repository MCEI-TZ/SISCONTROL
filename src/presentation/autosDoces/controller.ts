import { Request, Response } from "express";
import {
  AutosDoceEntity,
  BaseRepository,
  CreateAutosDoce,
  CreateAutosDoceDto,
  CustomError,
  DeleteAutosDoce,
  GetAutosDoce,
  GetAutosDoces,
  PaginationDto,
  UpdateAutoDoce,
  UpdateAutosDoceDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class AutosDocesController {
  constructor(
    private readonly autosDocesRepository: BaseRepository<AutosDoceEntity>,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-autosDoces-presentation",
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

  public getAutosDoce = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetAutosDoces(this.autosDocesRepository)
        .execute(pageNumber, limitNumber)
        .then((autosDoces) => res.json(autosDoces))
        .catch((error) => this.handleError(res, error));
    } catch (err) {
      this.handleError(res, err);
      return;
    }
  };

  public getAutoDoce = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetAutosDoce(this.autosDocesRepository)
      .execute(id)
      .then((autoDoce) => res.json(autoDoce))
      .catch((error) => this.handleError(res, error));
  };

  public createAutoDoce = (req: Request, res: Response) => {
    const [error, createAutosDoceDto] = CreateAutosDoceDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateAutosDoce(this.autosDocesRepository)
      .execute(createAutosDoceDto!)
      .then((autoDoce) => res.status(201).json(autoDoce))
      .catch((error) => this.handleError(res, error));
  };

  public updateAutosDoce = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAutosDoceDto] = UpdateAutosDoceDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateAutoDoce(this.autosDocesRepository)
      .execute(updateAutosDoceDto!)
      .then((autoDoce) => res.json(autoDoce))
      .catch((error) => this.handleError(res, error));
  };

  public deleteAutosDoce = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteAutosDoce(this.autosDocesRepository)
      .execute(id)
      .then((autoDoce) => res.json(autoDoce))
      .catch((error) => this.handleError(res, error));
  };
}
