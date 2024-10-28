"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrerasController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class CarrerasController {
    constructor(carreraRepository, logRepository) {
        this.carreraRepository = carreraRepository;
        this.logRepository = logRepository;
        this.handleError = (res, error) => {
            const oLog = {
                createdAt: new Date(),
                message: "",
                level: log_entity_1.LogSeverityLevel.high,
                origin: "controller-carrera-presentation",
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
        this.getCarreras = (req, res) => {
            try {
                const { page = 1, limit = 5 } = req.query;
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                const [err, pagination] = paginationDto;
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                const { page: pageNumber, limit: limitNumber } = pagination;
                new domain_1.GetCarreas(this.carreraRepository)
                    .execute(pageNumber, limitNumber)
                    .then((carreras) => res.json(carreras))
                    .catch((error) => {
                    this.handleError(res, error);
                });
            }
            catch (err) {
                this.handleError(res, err);
                return;
            }
        };
        this.getCarrera = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetCarrera(this.carreraRepository)
                .execute(id)
                .then((alumno) => res.json(alumno))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.CarrerasController = CarrerasController;
