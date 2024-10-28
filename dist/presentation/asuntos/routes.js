"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsuntoRoutes = void 0;
const express_1 = require("express");
const mssql_asunto_datasource_1 = require("../../infraestructure/datasources/mssql-asunto.datasource");
const repository_asunto_impl_1 = require("../../infraestructure/repositories/repository-asunto.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
/**
 * Class representing the routes for the Asunto entity.
 * This class is responsible for defining the HTTP endpoints for CRUD operations on Asuntos.
 */
class AsuntoRoutes {
    /**
     * Returns a configured Router instance with all the Asunto routes.
     *
     * @returns {Router} - An instance of the Express Router with Asunto routes.
     */
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_asunto_datasource_1.AsuntoDatasourceImpl();
        const asuntoRepository = new repository_asunto_impl_1.AsuntoRepositoryImpl(datasource);
        const asuntoController = new controller_1.AsuntosController(asuntoRepository, fsLog);
        /**
         * GET /asuntos
         * Retrieves all Asuntos.
         */
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], asuntoController.getAsuntos);
        /**
         * GET /asuntos/:name
         * Retrieves an Asunto by its name.
         *
         * @param {string} name - The name of the Asunto to retrieve.
         */
        router.get("/:name", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], asuntoController.getAsuntoName);
        /**
         * GET /asuntos/id/:id
         * Retrieves an Asunto by its ID.
         *
         * @param {number} id - The ID of the Asunto to retrieve.
         */
        router.get("/id/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], asuntoController.getAsuntoId);
        /**
         * POST /asuntos
         * Creates a new Asunto.
         */
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], asuntoController.createAsunto);
        /**
         * PUT /asuntos/:id
         * Updates an existing Asunto by its ID.
         *
         * @param {number} id - The ID of the Asunto to update.
         */
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], asuntoController.updateAsunto);
        /**
         * DELETE /asuntos/:id
         * Deletes an Asunto by its ID.
         *
         * @param {number} id - The ID of the Asunto to delete.
         */
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], asuntoController.deleteAsunto);
        return router;
    }
}
exports.AsuntoRoutes = AsuntoRoutes;
