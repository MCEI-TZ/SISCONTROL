import { Router } from "express";
import { EventoDatasourceImpl } from "../../infraestructure/datasources/mssql-evento.datasource";
import { EventoRepositoryImpl } from "../../infraestructure/repositories/repository-evento.impl";
import { EventosController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

/**
 * EventoRoutes class is responsible for defining and managing the routes for the Eventos feature.
 * It uses Express Router to define HTTP endpoints for CRUD operations on Eventos.
 */
export class EventoRoutes {
  /**
   * Static method to get the routes for the Eventos feature.
   *
   * @returns {Router} - An Express Router instance with defined routes for Eventos.
   */
  static get routes(): Router {
    const router = Router();

    // Instantiate the required dependencies
    const datasource = new EventoDatasourceImpl();
    const eventoRepository = new EventoRepositoryImpl(datasource);
    const eventoController = new EventosController(eventoRepository, fsLog);

    // Define HTTP GET routes
    router.get(
      "/",
      [AuthAdminMiddleware.validateJWT],
      eventoController.getEventos
    );
    router.get(
      "/:name",
      [AuthAdminMiddleware.validateJWT],
      eventoController.getEventoName
    );
    router.get(
      "/evento/:id",
      [AuthAdminMiddleware.validateJWT],
      eventoController.getEventoId
    );

    // Define HTTP POST route
    router.post(
      "/",
      [AuthAdminMiddleware.validateJWT],
      eventoController.createEvento
    );

    // Define HTTP PUT route
    router.put(
      "/:id",
      [AuthAdminMiddleware.validateJWT],
      eventoController.updateEvento
    );

    // Define HTTP DELETE route
    router.delete(
      "/:id",
      [AuthAdminMiddleware.validateJWT],
      eventoController.deleteEvento
    );

    return router;
  }
}
