import { Router } from "express";
import { AuthAdminController } from "./controller";
import { AuthAdminService } from "../services/authAdmin.service";
import { AuthAdminMiddleware } from "../middlewares/authAdmin.Middleware";

export class AuthAdminRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthAdminService();

    const controller = new AuthAdminController(authService);

    // Definir las rutas
    router.post("/login", controller.loginAdmin);

    router.get("/validate", controller.validateAdmin);

    return router;
  }
}
