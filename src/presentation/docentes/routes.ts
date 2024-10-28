import { Router } from "express";
import { DocenteDatasourceImpl } from "../../infraestructure/datasources/mssql-docente.datasource";
import { DocenteRepositoryImpl } from "../../infraestructure/repositories/repository-docente.impl";
import { DocenteController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class DocenteRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new DocenteDatasourceImpl();
    const docenteRepository = new DocenteRepositoryImpl(datasource);
    const docenteController = new DocenteController(docenteRepository, fsLog);
    router.get("/",[AuthAdminMiddleware.validateJWT], docenteController.getDocentes);
    router.get("/:id",[AuthAdminMiddleware.validateJWT], docenteController.getDocente);
    return router;
  }
}
