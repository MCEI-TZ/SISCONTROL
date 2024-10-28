"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosAlumnosController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class AutosAlumnosController {
    constructor(autosAlumnoRepository, logRepository) {
        this.autosAlumnoRepository = autosAlumnoRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-autosAlumnos-presentation",
            };
            if (error instanceof domain_1.CustomError) {
                oLog.message = error.message;
                this.logRepository.saveLog(oLog);
                res.status(error.statusCode).json({ error: error.message });
                return;
            }
            oLog.message = error;
            res.status(500).json({ error: "Internal Server Error -check logs" });
        };
        this.getAutosAlumnos = (req, res) => {
            const { page = 1, limit = 10 } = req.query;
            try {
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetAutosAlumnos(this.autosAlumnoRepository)
                    .execute(pageNumber, limitNumber)
                    .then((autosAlumnos) => res.json(autosAlumnos))
                    .catch((error) => this.handleError(res, error));
            }
            catch (err) {
                this.handleError(res, err);
                return;
            }
        };
        this.getAutoAlumno = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetAutosAlumno(this.autosAlumnoRepository)
                .execute(id)
                .then((autoAlumno) => res.json(autoAlumno))
                .catch((error) => this.handleError(res, error));
        };
        this.createAutoAlumno = (req, res) => {
            const [error, createAutoAlumnoDto] = domain_1.CreateAutosAlumnoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateAutosAlumno(this.autosAlumnoRepository)
                .execute(createAutoAlumnoDto)
                .then((autoAlumno) => res.status(201).json(autoAlumno))
                .catch((error) => this.handleError(res, error));
        };
        this.updateAutoAlumno = (req, res) => {
            const id = +req.params.id;
            const [error, updateAutoAlumnoDto] = domain_1.UpdateAutosAlumnoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateAutosAlumno(this.autosAlumnoRepository)
                .execute(updateAutoAlumnoDto)
                .then((autoAlumno) => res.json(autoAlumno))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteAutoAlumno = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteAutosAlumno(this.autosAlumnoRepository)
                .execute(id)
                .then((autoAlumno) => res.json(autoAlumno))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.AutosAlumnosController = AutosAlumnosController;
