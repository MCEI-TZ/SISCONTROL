import { Router } from "express";
import { VehiculoDatasourceImpl } from "../../infraestructure/datasources/mssql-vehiculo.datasource";
import { VehiculoRepositoryImpl } from "../../infraestructure/repositories/repository-vehiculo.impl";
import { VehiculosController } from "./controller";
import { FileSystemDataSource } from "../../infraestructure/datasources/file-system-logs.datasource";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

const fsLog = new FileSystemDataSource();

export class VehiculosRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new VehiculoDatasourceImpl();
    const vehiculoRepository = new VehiculoRepositoryImpl(datasource);
    const vehiculoController = new VehiculosController(
      vehiculoRepository,
      fsLog
    );
    router.get("/", [AuthAdminMiddleware.validateJWT], vehiculoController.getVehiculos);
    router.get("/:id", [AuthAdminMiddleware.validateJWT], vehiculoController.getVehiculo);

    router.post("/", [AuthAdminMiddleware.validateJWT], vehiculoController.createVehiculo);
    router.put("/:id", [AuthAdminMiddleware.validateJWT], vehiculoController.updateVehiculo);
    router.delete("/:id", [AuthAdminMiddleware.validateJWT], vehiculoController.deleteVehiculo);
    return router;
  }
}
