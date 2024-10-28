"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitanteRoutes = void 0;
const express_1 = require("express");
const mssql_visitante_datasource_1 = require("../../infraestructure/datasources/mssql-visitante.datasource");
const repository_visitante_impl_1 = require("../../infraestructure/repositories/repository-visitante.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class VisitanteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_visitante_datasource_1.VisitanteDatasourceImpl();
        const visitanteRepository = new repository_visitante_impl_1.VisitanteRepositoryImpl(datasource);
        const visitanteController = new controller_1.VisitanteController(visitanteRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], visitanteController.getVisitantes);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], visitanteController.getVisitante);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], visitanteController.createVisitante);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], visitanteController.updateVisitante);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], visitanteController.deleteVisitante);
        return router;
    }
}
exports.VisitanteRoutes = VisitanteRoutes;
