"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPersonaEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class TipoPersonaEntity {
    constructor(IdTipo, Descripcion) {
        this.IdTipo = IdTipo;
        this.Descripcion = Descripcion;
    }
    /**
     * Creates a new instance of `TipoPersonaEntity` from an object.
     *
     * @param object - The object to create the instance from.
     * @throws Will throw a `CustomError` if `IdTipo` or `Descripcion` is missing in the object.
     * @returns A new instance of `TipoPersonaEntity`.
     */
    static fromObject(object) {
        const { IdTipo, Descripcion } = object;
        // Check if IdTipo is present, if not throw a CustomError
        if (IdTipo == null)
            custom_error_1.CustomError.badRequest("Missing IdTipo");
        // Check if Descripcion is present, if not throw a CustomError
        if (Descripcion == null)
            custom_error_1.CustomError.badRequest("Missing Descripcion");
        // Return a new instance of TipoPersonaEntity
        return new TipoPersonaEntity(IdTipo, Descripcion);
    }
}
exports.TipoPersonaEntity = TipoPersonaEntity;
