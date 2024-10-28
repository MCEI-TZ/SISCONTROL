import { Request, Response } from "express";
import {
  BaseRepository,
  CreateVehiculo,
  CreateVehiculoDto,
  CustomError,
  DeleteVehiculo,
  GetVehiculo,
  GetVehiculos,
  PaginationDto,
  UpdateVehiculo,
  UpdateVehiculoDto,
  VehiculoEntity,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class VehiculosController {
  constructor(
    private readonly vehiculoRepository: BaseRepository<VehiculoEntity>,
    private readonly logRepository: LogRepository
  ) {}

  private handleError = (res: Response, error: unknown) => {
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-vehiculos-presentation",
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

  public getVehiculos = (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const paginationDto = PaginationDto.create(+page, +limit);

      const [err, pagination] = paginationDto;

      if (err) {
        this.handleError(res, err);
        return;
      }

      const { page: pageNumber, limit: limitNumber } = pagination!;

      new GetVehiculos(this.vehiculoRepository)
        .execute(pageNumber, limitNumber)
        .then((vehiculos) => res.json(vehiculos))
        .catch((error) => this.handleError(res, error));
    } catch (error) {
      this.handleError(res, error);
      return;
    }
  };

  public getVehiculo = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetVehiculo(this.vehiculoRepository)
      .execute(id)
      .then((vehiculo) => res.json(vehiculo))
      .catch((error) => this.handleError(res, error));
  };

  public createVehiculo = (req: Request, res: Response) => {
    const [error, createVehiculoDto] = CreateVehiculoDto.create(req.body);
    if (error) return res.status(400).json({ error });
    new CreateVehiculo(this.vehiculoRepository)
      .execute(createVehiculoDto!)
      .then((vehiculo) => res.status(201).json(vehiculo))
      .catch((error) => this.handleError(res, error));
  };

  public updateVehiculo = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateVehiculoDto] = UpdateVehiculoDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });
    new UpdateVehiculo(this.vehiculoRepository)
      .execute(updateVehiculoDto!)
      .then((vehiculo) => res.json(vehiculo))
      .catch((error) => this.handleError(res, error));
  };

  public deleteVehiculo = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteVehiculo(this.vehiculoRepository)
      .execute(id)
      .then((vehiculo) => res.json(vehiculo))
      .catch((error) => this.handleError(res, error));
  };
}
