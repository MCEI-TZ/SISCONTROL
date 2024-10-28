"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAlumnoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const authAlumno_service_1 = require("../services/authAlumno.service");
class AuthAlumnoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const authService = new authAlumno_service_1.AuthAlumnoService();
        const controller = new controller_1.AuthAlumnoController(authService);
        // Definir las rutas
        router.post("/login", controller.loginAlumno);
        router.get("/validate", controller.validate);
        return router;
    }
}
exports.AuthAlumnoRoutes = AuthAlumnoRoutes;
