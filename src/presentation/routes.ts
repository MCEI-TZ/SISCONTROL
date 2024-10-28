import { Router } from "express";
import { AlumnoRoutes } from "./alumnos/routes";
import { AsuntoRoutes } from "./asuntos/routes";
import { AutosAlumnosRoutes } from "./autosAlumnos/routes";
import { AutosDocesRoutes } from "./autosDoces/routes";
import { AutoVisitanteRoutes } from "./autosVisitantes/routes";
import { ControlAsisRoutes } from "./controlsAsis/routes";
import { DocenteRoutes } from "./docentes/routes";
import { EspaciosDeClaseRoutes } from "./espaciosDeClases/routes";
import { EventoRoutes } from "./eventos/routes";
import { TipoPersonaRoutes } from "./tiposPersonas/routes";
import { TipoTransportRoutes } from "./tiposTransportes/routes";
import { VehiculosRoutes } from "./vehiculos/routes";
import { VisitanteRoutes } from "./visitantes/routes";
import { CarreraRoutes } from "./carreras/routes";
import { DepartamentosRoutes } from "./departamento/routes";
import { AuthAlumnoRoutes } from "./authAlumno/routes";
import { AuthAdminRoutes } from "./auth/routes";
export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/alumnos", AlumnoRoutes.routes); // todo: Gets, Get // Falta Put, Post, Delete
    router.use("/api/asuntos", AsuntoRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
    router.use("/api/AutosAlumnos", AutosAlumnosRoutes.routes); //todo: Gets // POST // GET // Falta PUT y DELETE
    router.use("/api/AutosDoces", AutosDocesRoutes.routes); // todo: Gets //
    router.use("/api/AutosVisitantes", AutoVisitanteRoutes.routes); //todo: Gets //
    router.use("/api/ControlAsis", ControlAsisRoutes.routes); // * GETS // DELETE // POST // GET // PUT -> ++COMPLETED
    router.use("/api/Docente", DocenteRoutes.routes); // todo: Gets / Get // Falta Post, Put y delete
    router.use("/api/EspaciosDeClase", EspaciosDeClaseRoutes.routes); //* Gets // Get // PUT // POST // DELETE -> ++COMPLETED
    router.use("/api/Evento", EventoRoutes.routes); //* Gets // POST // PUT // GET // DELETE  -> ++COMPLETED
    router.use("/api/TipoPersona", TipoPersonaRoutes.routes); //*Gets //POST// PUT // DELETE // GET ->  ++COMPLETED
    router.use("/api/TipoTransport", TipoTransportRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
    router.use("/api/Vehiculo", VehiculosRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
    router.use("/api/Visitante", VisitanteRoutes.routes); //* Gets // POST // GET // PUT // DELETE -> ++COMPLETED
    router.use("/api/carrera", CarreraRoutes.routes);
    router.use("/api/departamento", DepartamentosRoutes.routes);
    router.use("/api/authAlumno", AuthAlumnoRoutes.routes);
    router.use("/api/authAdmin", AuthAdminRoutes.routes);
    return router;
  }
}
