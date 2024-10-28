"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosRoutes = void 0;
const express_1 = require("express");
const mssql_vehiculo_datasource_1 = require("../../infraestructure/datasources/mssql-vehiculo.datasource");
const repository_vehiculo_impl_1 = require("../../infraestructure/repositories/repository-vehiculo.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class VehiculosRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_vehiculo_datasource_1.VehiculoDatasourceImpl();
        const vehiculoRepository = new repository_vehiculo_impl_1.VehiculoRepositoryImpl(datasource);
        const vehiculoController = new controller_1.VehiculosController(vehiculoRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], vehiculoController.getVehiculos);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], vehiculoController.getVehiculo);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], vehiculoController.createVehiculo);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], vehiculoController.updateVehiculo);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], vehiculoController.deleteVehiculo);
        return router;
    }
}
exports.VehiculosRoutes = VehiculosRoutes;
