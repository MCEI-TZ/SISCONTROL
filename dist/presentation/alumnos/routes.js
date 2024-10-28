"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoRoutes = void 0;
const express_1 = require("express");
const mssql_alumno_datasource_1 = require("../../infraestructure/datasources/mssql-alumno.datasource");
const repository_alumno_impl_1 = require("../../infraestructure/repositories/repository-alumno.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLogRepo = new file_system_logs_datasource_1.FileSystemDataSource();
class AlumnoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_alumno_datasource_1.AlumnoDatasourceImpl();
        const alumnoRepository = new repository_alumno_impl_1.AlumnoRepositoryImpl(datasource);
        const alumnoController = new controller_1.AlumnosController(alumnoRepository, fsLogRepo);
        router.get("/", authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT, alumnoController.getAlumnos);
        router.get("/:id", authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT, alumnoController.getAlumno);
        return router;
    }
}
exports.AlumnoRoutes = AlumnoRoutes;
