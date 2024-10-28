"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposTransportesController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class TiposTransportesController {
    constructor(tipoTransportRepository, logRepository) {
        this.tipoTransportRepository = tipoTransportRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-tiposTransportes-presentation",
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
        this.getTiposTransportes = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetTiposTransports(this.tipoTransportRepository)
                    .execute(pageNumber, limitNumber)
                    .then((tiposTransportes) => res.json(tiposTransportes))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getTipoTransporteId = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetTipoTransportId(this.tipoTransportRepository)
                .execute(id)
                .then((tipoTransporte) => res.json(tipoTransporte))
                .catch((error) => this.handleError(res, error));
        };
        this.getTipoTransporteName = (req, res) => {
            const name = req.params.name;
            new domain_1.GetTipoTransportName(this.tipoTransportRepository)
                .execute(name)
                .then((tipoTransporte) => res.json(tipoTransporte))
                .catch((error) => this.handleError(res, error));
        };
        this.createTipoTransport = (req, res) => {
            const [error, createTipoTransportDto] = domain_1.CreateTipoTransportDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateTipoTransp(this.tipoTransportRepository)
                .execute(createTipoTransportDto)
                .then((tipoTransporte) => res.status(201).json(tipoTransporte))
                .catch((error) => this.handleError(res, error));
        };
        this.updateTipoTransport = (req, res) => {
            const id = +req.params.id;
            const [error, updateTipoTransportDto] = domain_1.UpdateTipoTransportDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateTipoTransport(this.tipoTransportRepository)
                .execute(updateTipoTransportDto)
                .then((tipoTransporte) => res.json(tipoTransporte))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteTipoTransport = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteTipoTransport(this.tipoTransportRepository)
                .execute(id)
                .then((tipoTransporte) => res.json(tipoTransporte))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.TiposTransportesController = TiposTransportesController;
