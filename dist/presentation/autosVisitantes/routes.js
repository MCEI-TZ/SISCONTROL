"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoVisitanteRoutes = void 0;
const express_1 = require("express");
const mssql_autosVisitante_datasource_1 = require("../../infraestructure/datasources/mssql-autosVisitante.datasource");
const repository_autosVisitante_impl_1 = require("../../infraestructure/repositories/repository-autosVisitante.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class AutoVisitanteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_autosVisitante_datasource_1.AutosVisitanteDatasourceImpl();
        const autoVisitanteRepository = new repository_autosVisitante_impl_1.AutosVisitanteRepositoryImpl(datasource);
        const autoVisitanteController = new controller_1.AutosVisitanteController(autoVisitanteRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoVisitanteController.getAutosVisitante);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoVisitanteController.getAutoVisitante);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoVisitanteController.createAutoVisitante);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoVisitanteController.updateAutoVisitante);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoVisitanteController.deleteautoVisitante);
        return router;
    }
}
exports.AutoVisitanteRoutes = AutoVisitanteRoutes;
