import { Router } from "express";
import { AutosAlumnoDatasourceImpl } from "../../infraestructure/datasources/mssql-autosAlumno.datasource";
import { AutosAlumnosRepositoryImpl } from "../../infraestructure/repositories/repository-autosAlumno.impl";
import { AutosAlumnosController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();
export class AutosAlumnosRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new AutosAlumnoDatasourceImpl();
    const autoAlumnoRepository = new AutosAlumnosRepositoryImpl(datasource);
    const autoAlumnoController = new AutosAlumnosController(
      autoAlumnoRepository,
      fsLog
    );
    router.get("/",[AuthAdminMiddleware.validateJWT], autoAlumnoController.getAutosAlumnos);
    router.get("/:id",[AuthAdminMiddleware.validateJWT], autoAlumnoController.getAutoAlumno);

    router.post("/", [AuthAdminMiddleware.validateJWT], autoAlumnoController.createAutoAlumno);
    router.put("/:id", [AuthAdminMiddleware.validateJWT], autoAlumnoController.updateAutoAlumno);
    router.delete("/:id", [AuthAdminMiddleware.validateJWT], autoAlumnoController.deleteAutoAlumno);
    return router;
  }
}
