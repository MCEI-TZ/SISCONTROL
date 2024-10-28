"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosDocesRoutes = void 0;
const express_1 = require("express");
const mssql_autosDoce_datasource_1 = require("../../infraestructure/datasources/mssql-autosDoce.datasource");
const repository_autosDoce_impl_1 = require("../../infraestructure/repositories/repository-autosDoce.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class AutosDocesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_autosDoce_datasource_1.AutosDoceDatasourceImpl();
        const autosDoceRepository = new repository_autosDoce_impl_1.AutosDoceRepositoryimpl(datasource);
        const autoDoceController = new controller_1.AutosDocesController(autosDoceRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoDoceController.getAutosDoce);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoDoceController.getAutoDoce);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoDoceController.createAutoDoce);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoDoceController.updateAutosDoce);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoDoceController.deleteAutosDoce);
        return router;
    }
}
exports.AutosDocesRoutes = AutosDocesRoutes;
