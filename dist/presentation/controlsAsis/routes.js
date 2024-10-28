"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlAsisRoutes = void 0;
const express_1 = require("express");
const mssql_controlAsis_datasource_1 = require("../../infraestructure/datasources/mssql-controlAsis.datasource");
const repository_controlAsis_impl_1 = require("../../infraestructure/repositories/repository-controlAsis.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class ControlAsisRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_controlAsis_datasource_1.ControlAsisDatasourceImpl();
        const controlAsisRepository = new repository_controlAsis_impl_1.ControlAsisRepositoryImpl(datasource);
        const controlAsisController = new controller_1.ControlAsisController(controlAsisRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], controlAsisController.getControlsAsis);
        router.get('/report/', [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], controlAsisController.getAlumnoReport);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], controlAsisController.getControlAsis);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateEsp], controlAsisController.asisControlAsis);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], controlAsisController.deleteControlAsis);
        return router;
    }
}
exports.ControlAsisRoutes = ControlAsisRoutes;
