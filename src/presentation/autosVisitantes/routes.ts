import { Router } from "express";
import { AutosVisitanteDatasourceImpl } from "../../infraestructure/datasources/mssql-autosVisitante.datasource";
import { AutosVisitanteRepositoryImpl } from "../../infraestructure/repositories/repository-autosVisitante.impl";
import { AutosVisitanteController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class AutoVisitanteRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new AutosVisitanteDatasourceImpl();
    const autoVisitanteRepository = new AutosVisitanteRepositoryImpl(
      datasource
    );
    const autoVisitanteController = new AutosVisitanteController(
      autoVisitanteRepository,
      fsLog
    );
    router.get("/", [AuthAdminMiddleware.validateJWT], autoVisitanteController.getAutosVisitante);
    router.get("/:id", [AuthAdminMiddleware.validateJWT], autoVisitanteController.getAutoVisitante);

    router.post("/", [AuthAdminMiddleware.validateJWT], autoVisitanteController.createAutoVisitante);
    router.put("/:id", [AuthAdminMiddleware.validateJWT], autoVisitanteController.updateAutoVisitante);
    router.delete("/:id", [AuthAdminMiddleware.validateJWT], autoVisitanteController.deleteautoVisitante);
    return router;
  }
}
