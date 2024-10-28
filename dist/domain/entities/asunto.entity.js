"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsuntoEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
// !-Asunto
class AsuntoEntity {
    constructor(IdAsunto, Descripcion, IdEvento) {
        this.IdAsunto = IdAsunto;
        this.Descripcion = Descripcion;
        this.IdEvento = IdEvento;
    }
    /**
     * Creates an instance of AsuntoEntity from a plain object.
     *
     * @param object - The plain object to create an instance from.
     * @throws Will throw a `CustomError` if `IdAsunto` or `Descripcion` is missing.
     * @returns A new instance of AsuntoEntity.
     */
    static fromObject(object) {
        const { IdAsunto, Descripcion, IdEvento } = object;
        // Check if IdAsunto is provided, otherwise throw a CustomError
        if (IdAsunto == null)
            custom_error_1.CustomError.badRequest("Missing IdAsunto.");
        // Check if Descripcion is provided, otherwise throw a CustomError
        if (Descripcion == null)
            custom_error_1.CustomError.badRequest("Missing Descripcion");
        // Return a new instance of AsuntoEntity
        return new AsuntoEntity(IdAsunto, Descripcion, IdEvento);
    }
}
exports.AsuntoEntity = AsuntoEntity;
