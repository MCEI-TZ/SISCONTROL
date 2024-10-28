"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class AlumnosController {
    constructor(alumnoRepository, logRepository) {
        this.alumnoRepository = alumnoRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-alumno-presentation",
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
        this.getAlumnos = (req, res) => {
            try {
                const { page = 1, limit = 5 } = req.query;
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetAlumnos(this.alumnoRepository)
                    .execute(pageNumber, limitNumber)
                    .then((alumnos) => res.json(alumnos))
                    .catch((error) => {
                    this.handleError(res, error);
                });
            }
            catch (err) {
                this.handleError(res, err);
                return;
            }
        };
        this.getAlumno = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetAlumno(this.alumnoRepository)
                .execute(id)
                .then((alumno) => res.json(alumno))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.AlumnosController = AlumnosController;
