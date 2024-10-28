"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class EventoEntity {
    constructor(IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado) {
        this.IdEvento = IdEvento;
        this.Nombre_Evento = Nombre_Evento;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.Habilitado = Habilitado;
    }
    /**
     * Static method to create an EventoEntity instance from an object.
     * Validates the object properties and throws a CustomError if any required property is missing.
     *
     * @param object - The object to create the EventoEntity from.
     * @returns A new EventoEntity instance.
     * @throws CustomError - If any required property is missing.
     */
    static fromObject(object) {
        const { IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado } = object;
        // Validate required properties
        if (Nombre_Evento == null)
            custom_error_1.CustomError.badRequest("Misssing Nombre Evento");
        if (fecha_inicio == null)
            custom_error_1.CustomError.badRequest("Misssing fecha Inicio");
        if (fecha_fin == null)
            custom_error_1.CustomError.badRequest("Misssing fecha Fin");
        if (Habilitado == null)
            custom_error_1.CustomError.badRequest("Misssing Habilitado");
        // Create and return a new EventoEntity instance
        return new EventoEntity(IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado);
    }
}
exports.EventoEntity = EventoEntity;
