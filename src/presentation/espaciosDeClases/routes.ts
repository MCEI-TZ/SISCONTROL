import { Router } from "express";
import { EspaciosDeClaseDatasourceImpl } from "../../infraestructure/datasources/mssql-espaciosDeClase.datasource";
import { EspaciosDeClaseRepositoryImpl } from "../../infraestructure/repositories/repository-espaciosDeClase.impl";
import { EspaciosDeClaseController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class EspaciosDeClaseRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new EspaciosDeClaseDatasourceImpl();
    const espacioDeClaseRepository = new EspaciosDeClaseRepositoryImpl(
      datasource
    );
    const espacioDeClaseController = new EspaciosDeClaseController(
      espacioDeClaseRepository,
      fsLog
    );
    router.get(
      "/",
      [AuthAdminMiddleware.validateJWT],
      espacioDeClaseController.getEspaciosDeClases
    );
    router.get(
      "/:name",
      [AuthAdminMiddleware.validateJWT],
      espacioDeClaseController.getEspacioDeClaseName
    );
    router.get(
      "/id/:id",
      [AuthAdminMiddleware.validateJWT],
      espacioDeClaseController.getEspacioDeClaseId
    );

    router.post(
      "/",
      [AuthAdminMiddleware.validateJWT],
      espacioDeClaseController.createEspacioDeClase
    );
    router.put(
      "/:id",
      [AuthAdminMiddleware.validateJWT],
      espacioDeClaseController.updateEspacioDeClase
    );
    router.delete(
      "/:id",
      [AuthAdminMiddleware.validateJWT],
      espacioDeClaseController.deleteEspacioDeClase
    );
    return router;
  }
}
