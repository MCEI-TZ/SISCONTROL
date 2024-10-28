import { Request, Response } from "express";
import {
  EspaciosClaseRepository,
  CreateEspacioDeClase,
  CreateEspacioDto,
  CustomError,
  DeleteEspacioDeClase,
  EspaciosDeClaseEntity,
  GetEspacioDeClaseId,
  GetEspacioDeClaseName,
  GetEspaciosDeClase,
  PaginationDto,
  UpdateEspaciosDeClase,
  UpdateEspaciosDeClaseDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class EspaciosDeClaseController {
  constructor(
    private readonly espacioClaserepository: EspaciosClaseRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-espaciosDeClase-presentation",
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

  public getEspaciosDeClases = (req: Request, res: Response) => {
    const { page = 1, limit = 5 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;
      new GetEspaciosDeClase(this.espacioClaserepository)
        .execute(pageNumber, limitNumber)
        .then((espaciosClases) => res.json(espaciosClases))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getEspacioDeClaseId = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetEspacioDeClaseId(this.espacioClaserepository)
      .execute(id)
      .then((espacioClase) => res.json(espacioClase))
      .catch((error) => this.handleError(res, error));
  };

  public getEspacioDeClaseName = (req: Request, res: Response) => {
    const name = req.params.name;
    new GetEspacioDeClaseName(this.espacioClaserepository)
      .execute(name)
      .then((espacioClase) => res.json(espacioClase))
      .catch((error) => this.handleError(res, error));
  };

  public createEspacioDeClase = (req: Request, res: Response) => {
    const [error, createEspacioDeClaseDto] = CreateEspacioDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateEspacioDeClase(this.espacioClaserepository)
      .execute(createEspacioDeClaseDto!)
      .then((espacioClase) => res.status(201).json(espacioClase))
      .catch((error) => this.handleError(res, error));
  };

  public updateEspacioDeClase = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateEspacioDeClaseDto] = UpdateEspaciosDeClaseDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateEspaciosDeClase(this.espacioClaserepository)
      .execute(updateEspacioDeClaseDto!)
      .then((espacioClase) => res.json(espacioClase))
      .catch((error) => this.handleError(res, error));
  };

  public deleteEspacioDeClase = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteEspacioDeClase(this.espacioClaserepository)
      .execute(id)
      .then((espacioClase) => res.json(espacioClase))
      .catch((error) => this.handleError(res, error));
  };
}
