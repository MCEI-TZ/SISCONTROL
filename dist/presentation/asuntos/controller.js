"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsuntosController = void 0;
const domain_1 = require("../../domain");
const log_entity_1 = require("../../domain/entities/log.entity");
class AsuntosController {
    constructor(asuntoRepository, logRepository) {
        this.asuntoRepository = asuntoRepository;
        this.logRepository = logRepository;
        /**
         * Handles errors and logs them to the database.
         *
         * @param res - The response object to send the error response.
         * @param error - The error object or message to handle.
         *
         * @returns {void}
         */
        this.handleError = (res, error) => {
            // Initialize a new LogEntity object
            const oLog = {
                createdAt: new Date(),
                level: log_entity_1.LogSeverityLevel.high,
                message: "",
                origin: "controller-asuntos-presentation",
            };
            // Check if the error is an instance of CustomError
            if (error instanceof domain_1.CustomError) {
                // Set the error message to the LogEntity
                oLog.message = error.message;
                // Save the LogEntity to the database
                this.logRepository.saveLog(oLog);
                // Send a JSON response with the error message and status code from the CustomError
                res.status(error.statusCode).json({ error: error.message });
                return;
            }
            // If the error is not an instance of CustomError, set the error message to the LogEntity
            oLog.message = error;
            // Save the LogEntity to the database
            this.logRepository.saveLog(oLog);
            // Send a JSON response with a generic error message and a 500 status code
            res.status(500).json({ error: "Internal Server Error -check logs" });
        };
        /**
         * Handles the retrieval of asuntos from the database.
         *
         * @param req - The request object containing query parameters for pagination.
         * @param res - The response object to send the retrieved asuntos.
         *
         * @returns {void}
         */
        this.getAsuntos = (req, res) => {
            /**
             * Extracts the page and limit query parameters from the request.
             * Defaults to page 1 and limit 5 if not provided.
             */
            const { page = 1, limit = 5 } = req.query;
            try {
                /**
                 * Creates a PaginationDto object from the page and limit parameters.
                 * Throws an error if the parameters are invalid.
                 */
                const paginationDto = domain_1.PaginationDto.create(+page, +limit);
                /**
                 * Destructures the paginationDto into an error and pagination object.
                 */
                const [err, pagination] = paginationDto;
                /**
                 * If an error occurred during paginationDto creation,
                 * calls the handleError method to log the error and send a response.
                 */
                if (err) {
                    this.handleError(res, err);
                    return;
                }
                /**
                 * Extracts the page and limit numbers from the pagination object.
                 */
                const { page: pageNumber, limit: limitNumber } = pagination;
                /**
                 * Creates a new GetAsuntos instance and executes it with the page and limit numbers.
                 * Sends the retrieved asuntos as a JSON response.
                 * Catches any errors and calls the handleError method to log and send a response.
                 */
                new domain_1.GetAsuntos(this.asuntoRepository)
                    .execute(pageNumber, limitNumber)
                    .then((asuntos) => res.json(asuntos))
                    .catch((error) => this.handleError(res, error));
            }
            catch (err) {
                /**
                 * If an error occurred during the try block,
                 * calls the handleError method to log the error and send a response.
                 */
                this.handleError(res, err);
                return;
            }
        };
        /**
         * Handles the retrieval of a single asunto by its name from the database.
         *
         * @param {Request} req - The request object containing the name parameter.
         * @param {Response} res - The response object to send the retrieved asunto.
         *
         * @returns {void}
         */
        this.getAsuntoName = (req, res) => {
            /**
             * Extracts the name parameter from the request.
             */
            const name = req.params.name;
            /**
             * Creates a new GetAsuntoName instance and executes it with the name parameter.
             * Sends the retrieved asunto as a JSON response.
             * Catches any errors and calls the handleError method to log and send a response.
             */
            new domain_1.GetAsuntoName(this.asuntoRepository)
                .execute(name)
                .then((asunto) => res.json(asunto))
                .catch((error) => this.handleError(res, error));
        };
        /**
         * Handles the retrieval of a single asunto by its ID from the database.
         *
         * @param {Request} req - The request object containing the ID parameter.
         * @param {Response} res - The response object to send the retrieved asunto.
         *
         * @returns {void}
         */
        this.getAsuntoId = (req, res) => {
            /**
             * Extracts the ID parameter from the request.
             * The '+' operator is used to convert the string parameter to a number.
             */
            const id = +req.params.id;
            /**
             * Creates a new GetAsuntoId instance and executes it with the ID parameter.
             * The retrieved asunto is then sent as a JSON response.
             * If an error occurs during the execution, the handleError method is called to log the error and send a response.
             */
            new domain_1.GetAsuntoId(this.asuntoRepository)
                .execute(id)
                .then((asunto) => res.json(asunto))
                .catch((error) => this.handleError(res, error));
        };
        /**
         * Handles the creation of a new asunto in the database.
         *
         * @param {Request} req - The request object containing the asunto data in the request body.
         * @param {Response} res - The response object to send the created asunto.
         *
         * @returns {void}
         */
        this.createAsunto = (req, res) => {
            /**
             * Attempts to create a new CreateAsuntoDto from the request body.
             * If an error occurs during the creation, returns a 400 status code with the error message.
             */
            const [error, createAsuntoDto] = domain_1.CreateAsuntoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            /**
             * Creates a new CreateAsunto instance and executes it with the createAsuntoDto.
             * If the asunto is successfully created, returns a 201 status code with the created asunto.
             * If an error occurs during the execution, calls the handleError method to log the error and send a response.
             */
            new domain_1.CreateAsunto(this.asuntoRepository)
                .execute(createAsuntoDto)
                .then((asunto) => res.status(201).json(asunto))
                .catch((error) => this.handleError(res, error));
        };
        /**
         * Handles the update of an existing asunto in the database.
         *
         * @param {Request} req - The request object containing the asunto ID and updated data in the request body.
         * @param {Response} res - The response object to send the updated asunto.
         *
         * @returns {void}
         */
        this.updateAsunto = (req, res) => {
            /**
             * Extracts the ID parameter from the request and converts it to a number.
             */
            const id = +req.params.id;
            /**
             * Attempts to create a new UpdateAsuntoDto from the request body and the extracted ID.
             * If an error occurs during the creation, returns a 400 status code with the error message.
             */
            const [error, updateAsuntoDto] = domain_1.UpdateAsuntoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            /**
             * Creates a new UpdateAsunto instance and executes it with the updateAsuntoDto.
             * If the asunto is successfully updated, returns a JSON response with the updated asunto.
             * If an error occurs during the execution, calls the handleError method to log the error and send a response.
             */
            new domain_1.UpdateAsunto(this.asuntoRepository)
                .execute(updateAsuntoDto)
                .then((asunto) => res.json(asunto))
                .catch((error) => this.handleError(res, error));
        };
        /**
         * Handles the deletion of an existing asunto in the database.
         *
         * @param {Request} req - The request object containing the asunto ID in the request parameters.
         * @param {Response} res - The response object to send the deleted asunto.
         *
         * @returns {void}
         */
        this.deleteAsunto = (req, res) => {
            /**
             * Extracts the ID parameter from the request and converts it to a number.
             */
            const id = +req.params.id;
            /**
             * Creates a new DeleteAsunto instance and executes it with the extracted ID.
             * If the asunto is successfully deleted, returns a JSON response with the deleted asunto.
             * If an error occurs during the execution, calls the handleError method to log the error and send a response.
             */
            new domain_1.DeleteAsunto(this.asuntoRepository)
                .execute(id)
                .then((asunto) => res.json(asunto))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.AsuntosController = AsuntosController;
