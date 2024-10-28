"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosDocesController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class AutosDocesController {
    constructor(autosDocesRepository, logRepository) {
        this.autosDocesRepository = autosDocesRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-autosDoces-presentation",
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
        this.getAutosDoce = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetAutosDoces(this.autosDocesRepository)
                    .execute(pageNumber, limitNumber)
                    .then((autosDoces) => res.json(autosDoces))
                    .catch((error) => this.handleError(res, error));
            }
            catch (err) {
                this.handleError(res, err);
                return;
            }
        };
        this.getAutoDoce = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetAutosDoce(this.autosDocesRepository)
                .execute(id)
                .then((autoDoce) => res.json(autoDoce))
                .catch((error) => this.handleError(res, error));
        };
        this.createAutoDoce = (req, res) => {
            const [error, createAutosDoceDto] = domain_1.CreateAutosDoceDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateAutosDoce(this.autosDocesRepository)
                .execute(createAutosDoceDto)
                .then((autoDoce) => res.status(201).json(autoDoce))
                .catch((error) => this.handleError(res, error));
        };
        this.updateAutosDoce = (req, res) => {
            const id = +req.params.id;
            const [error, updateAutosDoceDto] = domain_1.UpdateAutosDoceDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateAutoDoce(this.autosDocesRepository)
                .execute(updateAutosDoceDto)
                .then((autoDoce) => res.json(autoDoce))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteAutosDoce = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteAutosDoce(this.autosDocesRepository)
                .execute(id)
                .then((autoDoce) => res.json(autoDoce))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.AutosDocesController = AutosDocesController;
