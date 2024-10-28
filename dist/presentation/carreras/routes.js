"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarreraRoutes = void 0;
const express_1 = require("express");
const mssql_carrera_datasource_1 = require("../../infraestructure/datasources/mssql-carrera.datasource");
const repository_carrera_impl_1 = require("../../infraestructure/repositories/repository-carrera.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLogRepo = new file_system_logs_datasource_1.FileSystemDataSource();
class CarreraRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_carrera_datasource_1.CarreraDatasourceImpl();
        const carreraRepository = new repository_carrera_impl_1.CarreraRepositoryImpl(datasource);
        const carreraController = new controller_1.CarrerasController(carreraRepository, fsLogRepo);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], carreraController.getCarreras);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], carreraController.getCarrera);
        return router;
    }
}
exports.CarreraRoutes = CarreraRoutes;
