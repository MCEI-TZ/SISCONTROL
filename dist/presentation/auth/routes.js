"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdminRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const authAdmin_service_1 = require("../services/authAdmin.service");
class AuthAdminRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const authService = new authAdmin_service_1.AuthAdminService();
        const controller = new controller_1.AuthAdminController(authService);
        // Definir las rutas
        router.post("/login", controller.loginAdmin);
        router.get("/validate", controller.validateAdmin);
        return router;
    }
}
exports.AuthAdminRoutes = AuthAdminRoutes;
