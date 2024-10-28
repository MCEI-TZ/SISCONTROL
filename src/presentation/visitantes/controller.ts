import { Request, Response } from "express";
import {
  BaseRepository,
  CreateVisitante,
  CreateVisitanteDto,
  CustomError,
  DeleteVisitante,
  GetVisitante,
  GetVisitantes,
  PaginationDto,
  UpdateVisitante,
  UpdateVisitanteDto,
  VisitanteEntity,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class VisitanteController {
  constructor(
    private readonly visitanteRepository: BaseRepository<VisitanteEntity>,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-visitantes-presentation",
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

  public getVisitantes = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetVisitantes(this.visitanteRepository)
        .execute(pageNumber, limitNumber)
        .then((visitantes) => res.json(visitantes))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getVisitante = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetVisitante(this.visitanteRepository)
      .execute(id)
      .then((visitante) => res.json(visitante))
      .catch((error) => this.handleError(res, error));
  };

  public createVisitante = (req: Request, res: Response) => {
    const [error, createVisitanteDto] = CreateVisitanteDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateVisitante(this.visitanteRepository)
      .execute(createVisitanteDto!)
      .then((visitante) => res.status(201).json(visitante))
      .catch((error) => this.handleError(res, error));
  };

  public updateVisitante = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateVisitanteDto] = UpdateVisitanteDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateVisitante(this.visitanteRepository)
      .execute(updateVisitanteDto!)
      .then((visitante) => res.json(visitante))
      .catch((error) => this.handleError(res, error));
  };

  public deleteVisitante = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteVisitante(this.visitanteRepository)
      .execute(id)
      .then((visitante) => res.json(visitante))
      .catch((error) => this.handleError(res, error));
  };
}
