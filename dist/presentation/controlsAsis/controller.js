"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlAsisController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
const asistencia_dto_1 = require("../../domain/dtos/controlasis/asistencia.dto");
const getAlumnoReport_1 = require("../../domain/use-cases/controlasis/getAlumnoReport");
class ControlAsisController {
    constructor(controlAsisRepository, logRepository) {
        this.controlAsisRepository = controlAsisRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-controlAsis-presentation",
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
        this.getControlsAsis = (req, res) => {
            const { page = 1, limit = 5 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetControlsAsis(this.controlAsisRepository)
                    .execute(pageNumber, limitNumber)
                    .then((controlsAsis) => res.json(controlsAsis))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.getControlAsis = (req, res) => {
            const { page = 1, limit = 5 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                const id = +req.params.id;
                new domain_1.GetControlAsis(this.controlAsisRepository)
                    .execute(id, pageNumber, limitNumber)
                    .then((controlAsis) => res.json(controlAsis))
                    .catch((error) => this.handleError(res, error));
            }
            catch (error) {
                this.handleError(res, error);
                return;
            }
        };
        this.asisControlAsis = (req, res) => {
            const [error, controlAsistenciasDto] = asistencia_dto_1.ControlAsistenciasDto.createOrUpdate(req.body);
            console.log(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.AsistenciaControlAsis(this.controlAsisRepository)
                .execute(controlAsistenciasDto)
                .then((controlAsis) => res.status(201).json(controlAsis))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteControlAsis = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteControlAsis(this.controlAsisRepository)
                .execute(id)
                .then((controlAsis) => res.json(controlAsis))
                .catch((error) => this.handleError(res, error));
        };
        this.getAlumnoReport = (req, res) => {
            const { NumControl } = req.query;
            const { fechaInicio, fechaFin } = req.query;
            new getAlumnoReport_1.GetAlumnoReport(this.controlAsisRepository)
                .execute(+NumControl, new Date(fechaInicio), new Date(fechaFin))
                .then((alumnoControl) => res.json(alumnoControl))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.ControlAsisController = ControlAsisController;
