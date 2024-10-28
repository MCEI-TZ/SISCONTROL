"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./asunto/create-asunto.dto"), exports);
__exportStar(require("./autosAlumno/create-autosAlumno.dto"), exports);
__exportStar(require("./autosDoce/create-autosDoce.dto"), exports);
__exportStar(require("./autosVisitante/create-autosVisitante.dto"), exports);
__exportStar(require("./controlasis/asistencia.dto"), exports);
__exportStar(require("./espaciosDeClase/create-espaciosDeClase.dto"), exports);
__exportStar(require("./evento/create-evento.dto"), exports);
__exportStar(require("./tipoPersona/create-tipoPersona.dto"), exports);
__exportStar(require("./tipoTransport/create-tipoTransport.dto"), exports);
__exportStar(require("./vehiculo/create-vehiculo.dto"), exports);
__exportStar(require("./visitante/create-visitante.dto"), exports);
__exportStar(require("./asunto/update-asunto.dto"), exports);
__exportStar(require("./autosAlumno/update-autosAlumno.dto"), exports);
__exportStar(require("./autosDoce/update-autosDoce.dto"), exports);
__exportStar(require("./autosVisitante/update-autosVisitante.dto"), exports);
__exportStar(require("./espaciosDeClase/update-espaciosDeClase.dto"), exports);
__exportStar(require("./evento/update-evento.dto"), exports);
__exportStar(require("./tipoPersona/update-tipoPersona.dto"), exports);
__exportStar(require("./tipoTransport/update-tipoTransport.dto"), exports);
__exportStar(require("./vehiculo/update-vehiculo.dto"), exports);
__exportStar(require("./visitante/update-visitante.dto"), exports);
__exportStar(require("./shared/pagination.response.dto"), exports);
__exportStar(require("./shared/pagination.request.dto"), exports);
__exportStar(require("./auth/login-user.dto"), exports);
__exportStar(require("./auth/register-user.dto"), exports);
__exportStar(require("./auth/login-alumno.dto"), exports);
__exportStar(require("./auth/login-admin.dto"), exports);
