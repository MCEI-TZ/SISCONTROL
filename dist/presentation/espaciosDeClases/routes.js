"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspaciosDeClaseRoutes = void 0;
const express_1 = require("express");
const mssql_espaciosDeClase_datasource_1 = require("../../infraestructure/datasources/mssql-espaciosDeClase.datasource");
const repository_espaciosDeClase_impl_1 = require("../../infraestructure/repositories/repository-espaciosDeClase.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class EspaciosDeClaseRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_espaciosDeClase_datasource_1.EspaciosDeClaseDatasourceImpl();
        const espacioDeClaseRepository = new repository_espaciosDeClase_impl_1.EspaciosDeClaseRepositoryImpl(datasource);
        const espacioDeClaseController = new controller_1.EspaciosDeClaseController(espacioDeClaseRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], espacioDeClaseController.getEspaciosDeClases);
        router.get("/:name", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], espacioDeClaseController.getEspacioDeClaseName);
        router.get("/id/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], espacioDeClaseController.getEspacioDeClaseId);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], espacioDeClaseController.createEspacioDeClase);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], espacioDeClaseController.updateEspacioDeClase);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], espacioDeClaseController.deleteEspacioDeClase);
        return router;
    }
}
exports.EspaciosDeClaseRoutes = EspaciosDeClaseRoutes;
