"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPersonasController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class TipoPersonasController {
    constructor(tipoPersonaRepository, logRepository) {
        this.tipoPersonaRepository = tipoPersonaRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-tiposPersonas-presentation",
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
        this.getTiposPersonas = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetTiposPersonas(this.tipoPersonaRepository)
                    .execute(pageNumber, limitNumber)
                    .then((tiposPersonas) => res.json(tiposPersonas))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getTipoPersonaId = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetTipoPersonaId(this.tipoPersonaRepository)
                .execute(id)
                .then((tipoPersona) => res.json(tipoPersona))
                .catch((error) => this.handleError(res, error));
        };
        this.getTipoPersonaName = (req, res) => {
            const name = req.params.name;
            new domain_1.GetTipoPersonaName(this.tipoPersonaRepository)
                .execute(name)
                .then((tipoPersona) => res.json(tipoPersona))
                .catch((error) => this.handleError(res, error));
        };
        this.createTipoPersona = (req, res) => {
            const [error, createTipoPersonaDto] = domain_1.CreateTipoPersonDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateTipoPersona(this.tipoPersonaRepository)
                .execute(createTipoPersonaDto)
                .then((tipoPersona) => res.status(201).json(tipoPersona))
                .catch((error) => this.handleError(res, error));
        };
        this.updateTipoPersona = (req, res) => {
            const id = +req.params.id;
            const [error, updateTipoPersonaDto] = domain_1.UpdateTipoPersonaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateTipoPersona(this.tipoPersonaRepository)
                .execute(updateTipoPersonaDto)
                .then((tipoPersona) => res.json(tipoPersona))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteTipoPersona = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteTipoPersona(this.tipoPersonaRepository)
                .execute(id)
                .then((tipoPersona) => res.json(tipoPersona))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.TipoPersonasController = TipoPersonasController;
