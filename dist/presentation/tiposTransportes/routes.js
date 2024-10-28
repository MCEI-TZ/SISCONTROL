"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransportRoutes = void 0;
const express_1 = require("express");
const mssql_tipoTransport_datasource_1 = require("../../infraestructure/datasources/mssql-tipoTransport.datasource");
const repository_tipoTransport_impl_1 = require("../../infraestructure/repositories/repository-tipoTransport.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class TipoTransportRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_tipoTransport_datasource_1.TipoTransportDatasourceImpl();
        const tipoTransportRepository = new repository_tipoTransport_impl_1.TipoTransportReporsitoryImpl(datasource);
        const tipoTransportController = new controller_1.TiposTransportesController(tipoTransportRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoTransportController.getTiposTransportes);
        router.get("/id/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoTransportController.getTipoTransporteId);
        router.get("/:name", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoTransportController.getTipoTransporteName);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoTransportController.createTipoTransport);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoTransportController.updateTipoTransport);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], tipoTransportController.deleteTipoTransport);
        return router;
    }
}
exports.TipoTransportRoutes = TipoTransportRoutes;
