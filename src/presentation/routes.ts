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
    router.use("/api/alumnos", AlumnoRoutes.routes); //* working
    router.use("/api/asuntos", AsuntoRoutes.routes); //* Working
    // router.use("/api/AutosAlumnos", AutosAlumnosRoutes.routes); 
    // router.use("/api/AutosDoces", AutosDocesRoutes.routes); 
    // router.use("/api/AutosVisitantes", AutoVisitanteRoutes.routes); 
    router.use("/api/ControlAsis", ControlAsisRoutes.routes); 
    router.use("/api/Docente", DocenteRoutes.routes); //* working
    router.use("/api/EspaciosDeClase", EspaciosDeClaseRoutes.routes); //* Working
    router.use("/api/Evento", EventoRoutes.routes); //* Working
    router.use("/api/TipoPersona", TipoPersonaRoutes.routes); //* Working
    router.use("/api/TipoTransport", TipoTransportRoutes.routes); //* Working
    router.use("/api/Vehiculo", VehiculosRoutes.routes);//TODO: Fail to POST 
    router.use("/api/Visitante", VisitanteRoutes.routes); //todo: fail to post 
    router.use("/api/carrera", CarreraRoutes.routes); //*working
    router.use("/api/departamento", DepartamentosRoutes.routes);//* Working
    router.use("/api/authAlumno", AuthAlumnoRoutes.routes);//* Working
    router.use("/api/authAdmin", AuthAdminRoutes.routes); //* Working
    return router;
  }
}
