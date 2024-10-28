import { Request, Response } from "express";
import {
  TipoTransporteRepository,
  CreateTipoTransp,
  CreateTipoTransportDto,
  CustomError,
  DeleteTipoTransport,
  GetTipoTransportId,
  GetTipoTransportName,
  GetTiposTransports,
  PaginationDto,
  TipoTransportEntity,
  UpdateTipoTransport,
  UpdateTipoTransportDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class TiposTransportesController {
  constructor(
    private readonly tipoTransportRepository: TipoTransporteRepository,
    private readonly logRepository: LogRepository
  ) {}
  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-tiposTransportes-presentation",
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

  public getTiposTransportes = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetTiposTransports(this.tipoTransportRepository)
        .execute(pageNumber, limitNumber)
        .then((tiposTransportes) => res.json(tiposTransportes))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getTipoTransporteId = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetTipoTransportId(this.tipoTransportRepository)
      .execute(id)
      .then((tipoTransporte) => res.json(tipoTransporte))
      .catch((error) => this.handleError(res, error));
  };

  public getTipoTransporteName = (req: Request, res: Response) => {
    const name = req.params.name;
    new GetTipoTransportName(this.tipoTransportRepository)
      .execute(name)
      .then((tipoTransporte) => res.json(tipoTransporte))
      .catch((error) => this.handleError(res, error));
  };

  public createTipoTransport = (req: Request, res: Response) => {
    const [error, createTipoTransportDto] = CreateTipoTransportDto.create(
      req.body
    );
    if (error) return res.status(400).json({ error });
    new CreateTipoTransp(this.tipoTransportRepository)
      .execute(createTipoTransportDto!)
      .then((tipoTransporte) => res.status(201).json(tipoTransporte))
      .catch((error) => this.handleError(res, error));
  };

  public updateTipoTransport = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTipoTransportDto] = UpdateTipoTransportDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateTipoTransport(this.tipoTransportRepository)
      .execute(updateTipoTransportDto!)
      .then((tipoTransporte) => res.json(tipoTransporte))
      .catch((error) => this.handleError(res, error));
  };

  public deleteTipoTransport = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteTipoTransport(this.tipoTransportRepository)
      .execute(id)
      .then((tipoTransporte) => res.json(tipoTransporte))
      .catch((error) => this.handleError(res, error));
  };
}
