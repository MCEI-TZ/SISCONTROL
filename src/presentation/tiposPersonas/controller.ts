import { Request, Response } from "express";
import {
  TipoPersonaRepository,
  CreateTipoPersonDto,
  CreateTipoPersona,
  CustomError,
  DeleteTipoPersona,
  GetTipoPersonaId,
  GetTipoPersonaName,
  GetTiposPersonas,
  PaginationDto,
  TipoPersonaEntity,
  UpdateTipoPersona,
  UpdateTipoPersonaDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class TipoPersonasController {
  constructor(
    private readonly tipoPersonaRepository: TipoPersonaRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-tiposPersonas-presentation",
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

  public getTiposPersonas = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }
      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetTiposPersonas(this.tipoPersonaRepository)
        .execute(pageNumber, limitNumber)
        .then((tiposPersonas) => res.json(tiposPersonas))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getTipoPersonaId = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetTipoPersonaId(this.tipoPersonaRepository)
      .execute(id)
      .then((tipoPersona) => res.json(tipoPersona))
      .catch((error) => this.handleError(res, error));
  };

  public getTipoPersonaName = (req: Request, res: Response) => {
    const name = req.params.name;
    new GetTipoPersonaName(this.tipoPersonaRepository)
      .execute(name)
      .then((tipoPersona) => res.json(tipoPersona))
      .catch((error) => this.handleError(res, error));
  };

  public createTipoPersona = (req: Request, res: Response) => {
    const [error, createTipoPersonaDto] = CreateTipoPersonDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateTipoPersona(this.tipoPersonaRepository)
      .execute(createTipoPersonaDto!)
      .then((tipoPersona) => res.status(201).json(tipoPersona))
      .catch((error) => this.handleError(res, error));
  };

  public updateTipoPersona = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTipoPersonaDto] = UpdateTipoPersonaDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateTipoPersona(this.tipoPersonaRepository)
      .execute(updateTipoPersonaDto!)
      .then((tipoPersona) => res.json(tipoPersona))
      .catch((error) => this.handleError(res, error));
  };

  public deleteTipoPersona = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteTipoPersona(this.tipoPersonaRepository)
      .execute(id)
      .then((tipoPersona) => res.json(tipoPersona))
      .catch((error) => this.handleError(res, error));
  };
}
