"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosVisitanteController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class AutosVisitanteController {
    constructor(autosVisitanteRepository, logRepository) {
        this.autosVisitanteRepository = autosVisitanteRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-autosVisitantes-presentation",
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
        this.getAutosVisitante = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetAutosVisitante(this.autosVisitanteRepository)
                    .execute(pageNumber, limitNumber)
                    .then((autosVisitantes) => res.json(autosVisitantes))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getAutoVisitante = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetAutoVisitante(this.autosVisitanteRepository)
                .execute(id)
                .then((autoVisitante) => res.json(autoVisitante))
                .catch((error) => this.handleError(res, error));
        };
        this.createAutoVisitante = (req, res) => {
            const [error, createAutoVisitanteDto] = domain_1.CreateAutosVisitanteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateAutosVisitante(this.autosVisitanteRepository)
                .execute(createAutoVisitanteDto)
                .then((autoVisitante) => res.status(201).json(autoVisitante))
                .catch((error) => this.handleError(res, error));
        };
        this.updateAutoVisitante = (req, res) => {
            const id = +req.params.id;
            const [error, updateAutoVisitanteDto] = domain_1.UpdateAutosVisitanteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateAutosVisitante(this.autosVisitanteRepository)
                .execute(updateAutoVisitanteDto)
                .then((autoVisitante) => res.json(autoVisitante))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteautoVisitante = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteAutosVisitante(this.autosVisitanteRepository)
                .execute(id)
                .then((autoVisitante) => res.json(autoVisitante))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.AutosVisitanteController = AutosVisitanteController;
