"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoRoutes = void 0;
const express_1 = require("express");
const mssql_evento_datasource_1 = require("../../infraestructure/datasources/mssql-evento.datasource");
const repository_evento_impl_1 = require("../../infraestructure/repositories/repository-evento.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
/**
 * EventoRoutes class is responsible for defining and managing the routes for the Eventos feature.
 * It uses Express Router to define HTTP endpoints for CRUD operations on Eventos.
 */
class EventoRoutes {
    /**
     * Static method to get the routes for the Eventos feature.
     *
     * @returns {Router} - An Express Router instance with defined routes for Eventos.
     */
    static get routes() {
        const router = (0, express_1.Router)();
        // Instantiate the required dependencies
        const datasource = new mssql_evento_datasource_1.EventoDatasourceImpl();
        const eventoRepository = new repository_evento_impl_1.EventoRepositoryImpl(datasource);
        const eventoController = new controller_1.EventosController(eventoRepository, fsLog);
        // Define HTTP GET routes
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], eventoController.getEventos);
        router.get("/:name", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], eventoController.getEventoName);
        router.get("/evento/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], eventoController.getEventoId);
        // Define HTTP POST route
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], eventoController.createEvento);
        // Define HTTP PUT route
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], eventoController.updateEvento);
        // Define HTTP DELETE route
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], eventoController.deleteEvento);
        return router;
    }
}
exports.EventoRoutes = EventoRoutes;
