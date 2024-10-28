import { envs } from "../../config";
import { Router } from "express";
import { AuthAlumnoController } from "./controller";
import { AuthAlumnoService } from "../services/authAlumno.service";
import { AuthMiddleware } from "../middlewares/authAlumnoMiddleware";

export class AuthAlumnoRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthAlumnoService();

    const controller = new AuthAlumnoController(authService);

    // Definir las rutas
    router.post("/login", controller.loginAlumno);

    router.get("/validate", controller.validate);

    return router;
  }
}
