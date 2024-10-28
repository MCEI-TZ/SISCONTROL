import { Router } from "express";
import { ControlAsisDatasourceImpl } from "../../infraestructure/datasources/mssql-controlAsis.datasource";
import { ControlAsisRepositoryImpl } from "../../infraestructure/repositories/repository-controlAsis.impl";
import { ControlAsisController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class ControlAsisRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new ControlAsisDatasourceImpl();
    const controlAsisRepository = new ControlAsisRepositoryImpl(datasource);
    const controlAsisController = new ControlAsisController(
      controlAsisRepository,
      fsLog
    );
    router.get("/",[AuthAdminMiddleware.validateJWT], controlAsisController.getControlsAsis);
    router.get('/report/',[AuthAdminMiddleware.validateJWT], controlAsisController.getAlumnoReport)
    router.get("/:id",[AuthAdminMiddleware.validateJWT], controlAsisController.getControlAsis);

    router.post("/",[AuthAdminMiddleware.validateEsp], controlAsisController.asisControlAsis);
    router.delete("/:id",[AuthAdminMiddleware.validateJWT], controlAsisController.deleteControlAsis);
    return router;
  }
}
