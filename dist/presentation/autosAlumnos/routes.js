"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosAlumnosRoutes = void 0;
const express_1 = require("express");
const mssql_autosAlumno_datasource_1 = require("../../infraestructure/datasources/mssql-autosAlumno.datasource");
const repository_autosAlumno_impl_1 = require("../../infraestructure/repositories/repository-autosAlumno.impl");
const controller_1 = require("./controller");
const file_system_logs_datasource_1 = require("../../infraestructure/datasources/file-system-logs.datasource");
const authAdmin_Middleware_1 = require("../middlewares/authAdmin.Middleware");
const fsLog = new file_system_logs_datasource_1.FileSystemDataSource();
class AutosAlumnosRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new mssql_autosAlumno_datasource_1.AutosAlumnoDatasourceImpl();
        const autoAlumnoRepository = new repository_autosAlumno_impl_1.AutosAlumnosRepositoryImpl(datasource);
        const autoAlumnoController = new controller_1.AutosAlumnosController(autoAlumnoRepository, fsLog);
        router.get("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoAlumnoController.getAutosAlumnos);
        router.get("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoAlumnoController.getAutoAlumno);
        router.post("/", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoAlumnoController.createAutoAlumno);
        router.put("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoAlumnoController.updateAutoAlumno);
        router.delete("/:id", [authAdmin_Middleware_1.AuthAdminMiddleware.validateJWT], autoAlumnoController.deleteAutoAlumno);
        return router;
    }
}
exports.AutosAlumnosRoutes = AutosAlumnosRoutes;
