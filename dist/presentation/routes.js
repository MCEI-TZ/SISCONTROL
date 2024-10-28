"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./alumnos/routes");
const routes_2 = require("./asuntos/routes");
const routes_3 = require("./autosAlumnos/routes");
const routes_4 = require("./autosDoces/routes");
const routes_5 = require("./autosVisitantes/routes");
const routes_6 = require("./controlsAsis/routes");
const routes_7 = require("./docentes/routes");
const routes_8 = require("./espaciosDeClases/routes");
const routes_9 = require("./eventos/routes");
const routes_10 = require("./tiposPersonas/routes");
const routes_11 = require("./tiposTransportes/routes");
const routes_12 = require("./vehiculos/routes");
const routes_13 = require("./visitantes/routes");
const routes_14 = require("./carreras/routes");
const routes_15 = require("./departamento/routes");
const routes_16 = require("./authAlumno/routes");
const routes_17 = require("./auth/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use("/api/alumnos", routes_1.AlumnoRoutes.routes); // todo: Gets, Get // Falta Put, Post, Delete
        router.use("/api/asuntos", routes_2.AsuntoRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
        router.use("/api/AutosAlumnos", routes_3.AutosAlumnosRoutes.routes); //todo: Gets // POST // GET // Falta PUT y DELETE
        router.use("/api/AutosDoces", routes_4.AutosDocesRoutes.routes); // todo: Gets //
        router.use("/api/AutosVisitantes", routes_5.AutoVisitanteRoutes.routes); //todo: Gets //
        router.use("/api/ControlAsis", routes_6.ControlAsisRoutes.routes); // * GETS // DELETE // POST // GET // PUT -> ++COMPLETED
        router.use("/api/Docente", routes_7.DocenteRoutes.routes); // todo: Gets / Get // Falta Post, Put y delete
        router.use("/api/EspaciosDeClase", routes_8.EspaciosDeClaseRoutes.routes); //* Gets // Get // PUT // POST // DELETE -> ++COMPLETED
        router.use("/api/Evento", routes_9.EventoRoutes.routes); //* Gets // POST // PUT // GET // DELETE  -> ++COMPLETED
        router.use("/api/TipoPersona", routes_10.TipoPersonaRoutes.routes); //*Gets //POST// PUT // DELETE // GET ->  ++COMPLETED
        router.use("/api/TipoTransport", routes_11.TipoTransportRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
        router.use("/api/Vehiculo", routes_12.VehiculosRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
        router.use("/api/Visitante", routes_13.VisitanteRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
        router.use("/api/carrera", routes_14.CarreraRoutes.routes);
        router.use("/api/departamento", routes_15.DepartamentosRoutes.routes);
        router.use("/api/authAlumno", routes_16.AuthAlumnoRoutes.routes);
        router.use("/api/authAdmin", routes_17.AuthAdminRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
