"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class VehiculosController {
    constructor(vehiculoRepository, logRepository) {
        this.vehiculoRepository = vehiculoRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-vehiculos-presentation",
            };
            if (error instanceof domain_1.CustomError) {
                oLog.message = error.message;
                this.logRepository.saveLog(oLog);
                res.status(error.statusCode).json({ error: error.message });
                return;
            }
            oLog.message = error;
            this.logRepository.saveLog(oLog);
            res.status(500).json({ error: "Internal Server Error -check logs" });
        };
        this.getVehiculos = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetVehiculos(this.vehiculoRepository)
                    .execute(pageNumber, limitNumber)
                    .then((vehiculos) => res.json(vehiculos))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getVehiculo = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetVehiculo(this.vehiculoRepository)
                .execute(id)
                .then((vehiculo) => res.json(vehiculo))
                .catch((error) => this.handleError(res, error));
        };
        this.createVehiculo = (req, res) => {
            const [error, createVehiculoDto] = domain_1.CreateVehiculoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateVehiculo(this.vehiculoRepository)
                .execute(createVehiculoDto)
                .then((vehiculo) => res.status(201).json(vehiculo))
                .catch((error) => this.handleError(res, error));
        };
        this.updateVehiculo = (req, res) => {
            const id = +req.params.id;
            const [error, updateVehiculoDto] = domain_1.UpdateVehiculoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateVehiculo(this.vehiculoRepository)
                .execute(updateVehiculoDto)
                .then((vehiculo) => res.json(vehiculo))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteVehiculo = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteVehiculo(this.vehiculoRepository)
                .execute(id)
                .then((vehiculo) => res.json(vehiculo))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.VehiculosController = VehiculosController;
