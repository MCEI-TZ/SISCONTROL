"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class DocenteController {
    constructor(docenteRepository, logRepository) {
        this.docenteRepository = docenteRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-docente-presentation",
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
        this.getDocentes = (req, res) => {
            const { page = 1, limit = 5 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetDocentes(this.docenteRepository)
                    .execute(pageNumber, limitNumber)
                    .then((docentes) => res.json(docentes))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getDocente = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetDocente(this.docenteRepository)
                .execute(id)
                .then((docente) => res.json(docente))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.DocenteController = DocenteController;
