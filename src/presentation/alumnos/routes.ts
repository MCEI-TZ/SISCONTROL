import { Router } from "express";
import { AlumnoDatasourceImpl } from "../../infraestructure/datasources/mssql-alumno.datasource";
import { AlumnoRepositoryImpl } from "../../infraestructure/repositories/repository-alumno.impl";
import { AlumnosController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import {AuthAdminMiddleware} from '../middlewares/authAdmin.Middleware';

const fsLogRepo = new FileSystemDataSource();

export class AlumnoRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new AlumnoDatasourceImpl();
    const alumnoRepository = new AlumnoRepositoryImpl(datasource);
    const alumnoController = new AlumnosController(alumnoRepository, fsLogRepo);
    router.get("/",AuthAdminMiddleware.validateJWT, alumnoController.getAlumnos);
    router.get("/:id",AuthAdminMiddleware.validateJWT, alumnoController.getAlumno);
    return router;
  }
}
