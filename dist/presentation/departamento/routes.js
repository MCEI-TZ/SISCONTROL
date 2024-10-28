"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentosRoutes = void 0;
const express_1 = require("express");
const mssql_departamento_datasource_1 = require("../../infraestructure/datasources/mssql-departamento.datasource");
const repository_departamento_impl_1 = require("../../infraestructure/repositories/repository-departamento.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLogRepo = new file_system_logs_datasource_1.FileSystemDataSource();
class DepartamentosRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_departamento_datasource_1.DepartamentoDatasourceImpl();
        const departamentoRepository = new repository_departamento_impl_1.DepartamentoRepositoryImpl(datasource);
        const departamentoController = new controller_1.DepartamentosController(departamentoRepository, fsLogRepo);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], departamentoController.getDepartamentos);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], departamentoController.getDepartamento);
        return router;
    }
}
exports.DepartamentosRoutes = DepartamentosRoutes;
