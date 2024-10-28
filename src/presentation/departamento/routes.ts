import { Router } from "express";
import { DepartamentoDatasourceImpl } from "../../infraestructure/datasources/mssql-departamento.datasource";
import { DepartamentoRepositoryImpl } from "../../infraestructure/repositories/repository-departamento.impl";
import { DepartamentosController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLogRepo = new FileSystemDataSource();

export class DepartamentosRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new DepartamentoDatasourceImpl();
    const departamentoRepository = new DepartamentoRepositoryImpl(datasource);
    const departamentoController = new DepartamentosController(
      departamentoRepository,
      fsLogRepo
    );
    router.get("/", [AuthAdminMiddleware.validateJWT], departamentoController.getDepartamentos);
    router.get("/:id", [AuthAdminMiddleware.validateJWT], departamentoController.getDepartamento);
    return router;
  }
}
