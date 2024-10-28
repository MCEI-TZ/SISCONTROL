import { Router } from "express";
import { TipoPersonaDatasourceImpl } from "../../infraestructure/datasources/mssql-tipoPersona.datasource";
import { TipoPersonaRepositoryImpl } from "../../infraestructure/repositories/repository-tipoPersona.impl";
import { TipoPersonasController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class TipoPersonaRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new TipoPersonaDatasourceImpl();
    const tipoPersonaRepository = new TipoPersonaRepositoryImpl(datasource);
    const tipoPersonaController = new TipoPersonasController(
      tipoPersonaRepository,
      fsLog
    );
    router.get("/", [AuthAdminMiddleware.validateJWT], tipoPersonaController.getTiposPersonas);
    router.get("/:name", [AuthAdminMiddleware.validateJWT], tipoPersonaController.getTipoPersonaName);
    router.get("/id/:id", [AuthAdminMiddleware.validateJWT], tipoPersonaController.getTipoPersonaId);

    router.post("/", [AuthAdminMiddleware.validateJWT], tipoPersonaController.createTipoPersona);
    router.put("/:id", [AuthAdminMiddleware.validateJWT], tipoPersonaController.updateTipoPersona);
    router.delete("/:id", [AuthAdminMiddleware.validateJWT], tipoPersonaController.deleteTipoPersona);
    return router;
  }
}
