import { Router } from "express";
import { TipoTransportDatasourceImpl } from "../../infraestructure/datasources/mssql-tipoTransport.datasource";
import { TipoTransportReporsitoryImpl } from "../../infraestructure/repositories/repository-tipoTransport.impl";
import { TiposTransportesController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class TipoTransportRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new TipoTransportDatasourceImpl();
    const tipoTransportRepository = new TipoTransportReporsitoryImpl(
      datasource
    );
    const tipoTransportController = new TiposTransportesController(
      tipoTransportRepository,
      fsLog
    );
    router.get("/", [AuthAdminMiddleware.validateJWT], tipoTransportController.getTiposTransportes);
    router.get("/id/:id", [AuthAdminMiddleware.validateJWT], tipoTransportController.getTipoTransporteId);
    router.get("/:name", [AuthAdminMiddleware.validateJWT], tipoTransportController.getTipoTransporteName);

    router.post("/", [AuthAdminMiddleware.validateJWT], tipoTransportController.createTipoTransport);
    router.put("/:id", [AuthAdminMiddleware.validateJWT], tipoTransportController.updateTipoTransport);
    router.delete("/:id", [AuthAdminMiddleware.validateJWT], tipoTransportController.deleteTipoTransport);
    return router;
  }
}
