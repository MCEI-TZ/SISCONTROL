import { Router } from "express";
import { VisitanteDatasourceImpl } from "../../infraestructure/datasources/mssql-visitante.datasource";
import { VisitanteRepositoryImpl } from "../../infraestructure/repositories/repository-visitante.impl";
import { VisitanteController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class VisitanteRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new VisitanteDatasourceImpl();
    const visitanteRepository = new VisitanteRepositoryImpl(datasource);
    const visitanteController = new VisitanteController(
      visitanteRepository,
      fsLog
    );
    router.get("/",[AuthAdminMiddleware.validateJWT], visitanteController.getVisitantes);
    router.get("/:id",[AuthAdminMiddleware.validateJWT], visitanteController.getVisitante);

    router.post("/",[AuthAdminMiddleware.validateJWT], visitanteController.createVisitante);
    router.put("/:id",[AuthAdminMiddleware.validateJWT], visitanteController.updateVisitante);
    router.delete("/:id",[AuthAdminMiddleware.validateJWT], visitanteController.deleteVisitante);
    return router;
  }
}
