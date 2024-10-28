"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitanteController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class VisitanteController {
    constructor(visitanteRepository, logRepository) {
        this.visitanteRepository = visitanteRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-visitantes-presentation",
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
        this.getVisitantes = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetVisitantes(this.visitanteRepository)
                    .execute(pageNumber, limitNumber)
                    .then((visitantes) => res.json(visitantes))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getVisitante = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetVisitante(this.visitanteRepository)
                .execute(id)
                .then((visitante) => res.json(visitante))
                .catch((error) => this.handleError(res, error));
        };
        this.createVisitante = (req, res) => {
            const [error, createVisitanteDto] = domain_1.CreateVisitanteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateVisitante(this.visitanteRepository)
                .execute(createVisitanteDto)
                .then((visitante) => res.status(201).json(visitante))
                .catch((error) => this.handleError(res, error));
        };
        this.updateVisitante = (req, res) => {
            const id = +req.params.id;
            const [error, updateVisitanteDto] = domain_1.UpdateVisitanteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateVisitante(this.visitanteRepository)
                .execute(updateVisitanteDto)
                .then((visitante) => res.json(visitante))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteVisitante = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteVisitante(this.visitanteRepository)
                .execute(id)
                .then((visitante) => res.json(visitante))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.VisitanteController = VisitanteController;
