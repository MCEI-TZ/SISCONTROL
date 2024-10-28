"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPersonaRoutes = void 0;
const express_1 = require("express");
const mssql_tipoPersona_datasource_1 = require("../../infraestructure/datasources/mssql-tipoPersona.datasource");
const repository_tipoPersona_impl_1 = require("../../infraestructure/repositories/repository-tipoPersona.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class TipoPersonaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_tipoPersona_datasource_1.TipoPersonaDatasourceImpl();
        const tipoPersonaRepository = new repository_tipoPersona_impl_1.TipoPersonaRepositoryImpl(datasource);
        const tipoPersonaController = new controller_1.TipoPersonasController(tipoPersonaRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoPersonaController.getTiposPersonas);
        router.get("/:name", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoPersonaController.getTipoPersonaName);
        router.get("/id/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoPersonaController.getTipoPersonaId);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoPersonaController.createTipoPersona);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoPersonaController.updateTipoPersona);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoPersonaController.deleteTipoPersona);
        return router;
    }
}
exports.TipoPersonaRoutes = TipoPersonaRoutes;
