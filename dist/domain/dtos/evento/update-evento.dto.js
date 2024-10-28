"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventoDto = void 0;
/**
 * A class representing an update event DTO.
 * This class is used to encapsulate the data required for updating an existing event.
 */
class UpdateEventoDto {
    constructor(IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado) {
        this.IdEvento = IdEvento;
        this.Nombre_Evento = Nombre_Evento;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.Habilitado = Habilitado;
    }
    /**
     * Returns an object containing only the properties that have been set.
     * This method is useful for creating a partial update object.
     */
    get values() {
        const returnObj = {};
        if (this.Nombre_Evento !== undefined)
            returnObj.Nombre_Evento = this.Nombre_Evento;
        if (this.fecha_inicio !== undefined)
            returnObj.fecha_inicio = this.fecha_inicio;
        if (this.fecha_fin !== undefined)
            returnObj.fecha_fin = this.fecha_fin;
        if (this.Habilitado !== undefined)
            returnObj.Habilitado = this.Habilitado;
        return returnObj;
    }
    /**
     * Creates a new UpdateEventoDto instance from the provided properties.
     * If any required property is missing, it returns an error message and undefined.
     *
     * @param props - An object containing the properties for the new instance.
     * @returns - An array containing an error message (if any) and the new instance (if valid).
     */
    static create(props) {
        const { IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado } = props;
        if (IdEvento == null)
            return ["Missing IdEvento", undefined];
        if (Nombre_Evento == null)
            return ["Missing Nombre_Evento", undefined];
        if (fecha_inicio == null)
            return ["Missing fecha_inicio", undefined];
        if (fecha_fin == null)
            return ["Missing fecha_fin", undefined];
        if (Habilitado == null)
            return ["Missing Habilitado", undefined];
        return [
            undefined,
            new UpdateEventoDto(IdEvento, Nombre_Evento, fecha_inicio, fecha_fin, Habilitado),
        ];
    }
}
exports.UpdateEventoDto = UpdateEventoDto;
