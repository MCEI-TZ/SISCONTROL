"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspaciosDeClaseController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class EspaciosDeClaseController {
    constructor(espacioClaserepository, logRepository) {
        this.espacioClaserepository = espacioClaserepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-espaciosDeClase-presentation",
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
        this.getEspaciosDeClases = (req, res) => {
            const { page = 1, limit = 5 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetEspaciosDeClase(this.espacioClaserepository)
                    .execute(pageNumber, limitNumber)
                    .then((espaciosClases) => res.json(espaciosClases))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getEspacioDeClaseId = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetEspacioDeClaseId(this.espacioClaserepository)
                .execute(id)
                .then((espacioClase) => res.json(espacioClase))
                .catch((error) => this.handleError(res, error));
        };
        this.getEspacioDeClaseName = (req, res) => {
            const name = req.params.name;
            new domain_1.GetEspacioDeClaseName(this.espacioClaserepository)
                .execute(name)
                .then((espacioClase) => res.json(espacioClase))
                .catch((error) => this.handleError(res, error));
        };
        this.createEspacioDeClase = (req, res) => {
            const [error, createEspacioDeClaseDto] = domain_1.CreateEspacioDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateEspacioDeClase(this.espacioClaserepository)
                .execute(createEspacioDeClaseDto)
                .then((espacioClase) => res.status(201).json(espacioClase))
                .catch((error) => this.handleError(res, error));
        };
        this.updateEspacioDeClase = (req, res) => {
            const id = +req.params.id;
            const [error, updateEspacioDeClaseDto] = domain_1.UpdateEspaciosDeClaseDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateEspaciosDeClase(this.espacioClaserepository)
                .execute(updateEspacioDeClaseDto)
                .then((espacioClase) => res.json(espacioClase))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteEspacioDeClase = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteEspacioDeClase(this.espacioClaserepository)
                .execute(id)
                .then((espacioClase) => res.json(espacioClase))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.EspaciosDeClaseController = EspaciosDeClaseController;
