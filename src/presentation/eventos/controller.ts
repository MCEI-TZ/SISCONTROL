import { Request, Response } from "express";
import {
  EventoRepository,
  CreateEvento,
  CreateEventoDto,
  CustomError,
  DeleteEvento,
  EventoEntity,
  GetEventoId,
  GetEventoName,
  GetEventos,
  PaginationDto,
  UpdateEvento,
  UpdateEventoDto,
} from "../../domain";
import { LogRepository } from "../../domain/repositories/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
export class EventosController {
  constructor(
    private readonly eventoRepository: EventoRepository,
    private readonly logRepository: LogRepository
  ) {}

  /**
   * Handles errors and logs them to the database.
   *
   * @param res - The response object to send the error response.
   * @param error - The error object to handle.
   *
   * @returns {void}
   */
  private handleError = (res: Response, error: unknown) => {
    /**
     * Log object to be saved in the database.
     */
    const oLog: LogEntity = {
      createdAt: new Date(),
      message: "",
      level: LogSeverityLevel.high,
      origin: "controller-eventos-presentation",
    };

    /**
     * If the error is an instance of CustomError,
     * set the error message and status code in the response.
     */
    if (error instanceof CustomError) {
      oLog.message = error.message;

      this.logRepository.saveLog(oLog);

      res.status(error.statusCode).json({ error: error.message });
      return;
    }

    /**
     * If the error is not an instance of CustomError,
     * convert it to a string and set it as the error message.
     */
    oLog.message = error as string;
    this.logRepository.saveLog(oLog);

    /**
     * Send a generic error response with a status code of 500.
     */
    res.status(500).json({ error: "Internal Server Error -check logs" });
  };

  /**
   * Handles the retrieval of multiple Eventos from the database.
   *
   * @param req - The request object containing query parameters for pagination.
   * @param res - The response object to send the retrieved Eventos.
   *
   * @returns {void}
   */
  public getEventos = async (req: Request, res: Response) => {
    // Extract pagination parameters from the request query.
    const { page = 1, limit = 5 } = req.query;

    try {
      // Create a PaginationDto object from the extracted parameters.
      const paginationDto = PaginationDto.create(+page, +limit);

      // Destructure the paginationDto to get the error and pagination object.
      const [err, pagination] = paginationDto;

      // If there is an error in creating the paginationDto, handle the error.
      if (err) {
        this.handleError(res, err);
        return;
      }

      // Destructure the pagination object to get the page number and limit number.
      const { page: pageNumber, limit: limitNumber } = pagination!;

      // Create a GetEventos object and execute it with the page number and limit number.
      new GetEventos(this.eventoRepository)
        .execute(pageNumber, limitNumber)
        .then((eventos) => res.json(eventos)) // Send the retrieved Eventos as a JSON response.
        .catch((error) => this.handleError(res, error)); // If there is an error during retrieval, handle the error.
    } catch (error) {
      // If there is an error during the creation of paginationDto, handle the error.
      this.handleError(res, error);
    }
  };

  /**
   * Handles the retrieval of a single Evento from the database based on its name.
   *
   * @param req - The request object containing the name of the Evento as a parameter.
   * @param res - The response object to send the retrieved Evento.
   *
   * @returns {void}
   */
  public getEventoName = (req: Request, res: Response) => {
    const name = req.params.name;
    new GetEventoName(this.eventoRepository)
      .execute(name)
      .then((evento) => {
        res.json(evento);
      })
      .catch((error) => {
        this.handleError(res, error);
      });
  };

  /**
   * Handles the retrieval of a single Evento from the database based on its ID.
   *
   * @param req - The request object containing the ID of the Evento as a parameter.
   * @param res - The response object to send the retrieved Evento.
   *
   * @returns {void}
   */
  public getEventoId = (req: Request, res: Response) => {
    // Extract the ID of the Evento from the request parameters.
    const id = +req.params.id;

    // Create a new GetEventoId instance and execute it with the extracted ID.
    new GetEventoId(this.eventoRepository)
      .execute(id)
      .then((evento) => {
        // If the Evento is successfully retrieved, send a JSON response with the retrieved Evento.
        res.json(evento);
      })
      .catch((error) => {
        // If there is an error during retrieval, handle the error using the handleError method.
        this.handleError(res, error);
      });
  };

  /**
   * Handles the creation of a new Evento in the database.
   *
   * @param req - The request object containing the new Evento data in the request body.
   * @param res - The response object to send the created Evento or error response.
   *
   * @returns {void}
   */
  public createEvento = (req: Request, res: Response) => {
    // Create a new CreateEventoDto instance from the request body.
    const [error, createEventoDto] = CreateEventoDto.create(req.body);

    // If there is an error in creating the CreateEventoDto, send a 400 Bad Request response with the error.
    if (error) return res.status(400).json({ error });

    // Create a new CreateEvento instance and execute it with the createEventoDto.
    new CreateEvento(this.eventoRepository)
      .execute(createEventoDto!)
      .then((evento) => {
        // If the Evento is successfully created, send a 201 Created response with the created Evento.
        res.status(201).json(evento);
      })
      .catch((error) => {
        // If there is an error during creation, handle the error using the handleError method.
        this.handleError(res, error);
      });
  };

  /**
   * Handles the update of an existing Evento in the database.
   *
   * @param req - The request object containing the updated Evento data in the request body and the Evento's ID in the request parameters.
   * @param res - The response object to send the updated Evento or error response.
   *
   * @returns {void}
   */
  public updateEvento = (req: Request, res: Response) => {
    // Extract the ID of the Evento from the request parameters.
    const id = +req.params.id;

    // Create a new UpdateEventoDto instance from the request body and the extracted ID.
    const [error, updateEventoDto] = UpdateEventoDto.create({
      ...req.body,
      id,
    });

    // If there is an error in creating the UpdateEventoDto, send a 400 Bad Request response with the error.
    if (error) return res.status(400).json({ error });

    // Create a new UpdateEvento instance and execute it with the updateEventoDto.
    new UpdateEvento(this.eventoRepository)
      .execute(updateEventoDto!)
      .then((evento) => {
        // If the Evento is successfully updated, send a JSON response with the updated Evento.
        res.json(evento);
      })
      .catch((error) => {
        // If there is an error during the update process, handle the error using the handleError method.
        this.handleError(res, error);
      });
  };

  /**
   * Handles the deletion of an existing Evento in the database.
   *
   * @param req - The request object containing the Evento's ID in the request parameters.
   * @param res - The response object to send the deleted Evento or error response.
   *
   * @returns {void}
   */
  public deleteEvento = (req: Request, res: Response) => {
    // Extract the ID of the Evento from the request parameters.
    const id = +req.params.id;

    // Create a new DeleteEvento instance and execute it with the extracted ID.
    new DeleteEvento(this.eventoRepository)
      .execute(id)
      .then((evento) => {
        // If the Evento is successfully deleted, send a JSON response with the deleted Evento.
        res.json(evento);
      })
      .catch((error) => {
        // If there is an error during the deletion process, handle the error using the handleError method.
        this.handleError(res, error);
      });
  };
}
