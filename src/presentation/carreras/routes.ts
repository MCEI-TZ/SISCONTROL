import { Router } from "express";
import { CarreraDatasourceImpl } from "../../infraestructure/datasources/mssql-carrera.datasource";
import { CarreraRepositoryImpl } from "../../infraestructure/repositories/repository-carrera.impl";
import { CarrerasController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLogRepo = new FileSystemDataSource();

export class CarreraRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new CarreraDatasourceImpl();
    const carreraRepository = new CarreraRepositoryImpl(datasource);
    const carreraController = new CarrerasController(
      carreraRepository,
      fsLogRepo
    );
    router.get("/",[AuthAdminMiddleware.validateJWT], carreraController.getCarreras);
    router.get("/:id",[AuthAdminMiddleware.validateJWT], carreraController.getCarrera);
    return router;
  }
}
