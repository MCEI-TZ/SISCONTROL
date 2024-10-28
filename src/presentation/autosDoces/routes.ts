import { Router } from "express";
import { AutosDoceDatasourceImpl } from "../../infraestructure/datasources/mssql-autosDoce.datasource";
import { AutosDoceRepositoryimpl } from "../../infraestructure/repositories/repository-autosDoce.impl";
import { AutosDocesController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";
const fsLog = new FileSystemDataSource();

export class AutosDocesRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new AutosDoceDatasourceImpl();
    const autosDoceRepository = new AutosDoceRepositoryimpl(datasource);
    const autoDoceController = new AutosDocesController(
      autosDoceRepository,
      fsLog
    );
    router.get("/",[AuthAdminMiddleware.validateJWT], autoDoceController.getAutosDoce);
    router.get("/:id",[AuthAdminMiddleware.validateJWT], autoDoceController.getAutoDoce);

    router.post("/",[AuthAdminMiddleware.validateJWT], autoDoceController.createAutoDoce);
    router.put("/:id",[AuthAdminMiddleware.validateJWT], autoDoceController.updateAutosDoce);
    router.delete("/:id",[AuthAdminMiddleware.validateJWT], autoDoceController.deleteAutosDoce);
    return router;
  }
}
