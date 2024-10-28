import { Router } from "express";
import { AsuntoDatasourceImpl } from "../../infraestructure/datasources/mssql-asunto.datasource";
import { AsuntoRepositoryImpl } from "../../infraestructure/repositories/repository-asunto.impl";
import { AsuntosController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();
/**
 * Class representing the routes for the Asunto entity.
 * This class is responsible for defining the HTTP endpoints for CRUD operations on Asuntos.
 */
export class AsuntoRoutes {
  /**
   * Returns a configured Router instance with all the Asunto routes.
   *
   * @returns {Router} - An instance of the Express Router with Asunto routes.
   */
  static get routes(): Router {
    const router = Router();
    const datasource = new AsuntoDatasourceImpl();
    const asuntoRepository = new AsuntoRepositoryImpl(datasource);
    const asuntoController = new AsuntosController(asuntoRepository, fsLog);

    /**
     * GET /asuntos
     * Retrieves all Asuntos.
     */
    router.get("/",[AuthAdminMiddleware.validateJWT], asuntoController.getAsuntos);

    /**
     * GET /asuntos/:name
     * Retrieves an Asunto by its name.
     *
     * @param {string} name - The name of the Asunto to retrieve.
     */
    router.get("/:name", [AuthAdminMiddleware.validateJWT], asuntoController.getAsuntoName);

    /**
     * GET /asuntos/id/:id
     * Retrieves an Asunto by its ID.
     *
     * @param {number} id - The ID of the Asunto to retrieve.
     */
    router.get("/id/:id",[AuthAdminMiddleware.validateJWT], asuntoController.getAsuntoId);

    /**
     * POST /asuntos
     * Creates a new Asunto.
     */
    router.post("/", [AuthAdminMiddleware.validateJWT], asuntoController.createAsunto);

    /**
     * PUT /asuntos/:id
     * Updates an existing Asunto by its ID.
     *
     * @param {number} id - The ID of the Asunto to update.
     */
    router.put("/:id", [AuthAdminMiddleware.validateJWT], asuntoController.updateAsunto);

    /**
     * DELETE /asuntos/:id
     * Deletes an Asunto by its ID.
     *
     * @param {number} id - The ID of the Asunto to delete.
     */
    router.delete("/:id", [AuthAdminMiddleware.validateJWT], asuntoController.deleteAsunto);

    return router;
  }
}
