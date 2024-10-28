"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteRoutes = void 0;
const express_1 = require("express");
const mssql_docente_datasource_1 = require("../../infraestructure/datasources/mssql-docente.datasource");
const repository_docente_impl_1 = require("../../infraestructure/repositories/repository-docente.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class DocenteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_docente_datasource_1.DocenteDatasourceImpl();
        const docenteRepository = new repository_docente_impl_1.DocenteRepositoryImpl(datasource);
        const docenteController = new controller_1.DocenteController(docenteRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], docenteController.getDocentes);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], docenteController.getDocente);
        return router;
    }
}
exports.DocenteRoutes = DocenteRoutes;
