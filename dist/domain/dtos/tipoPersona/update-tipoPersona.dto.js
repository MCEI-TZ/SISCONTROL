"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoPersonaDto = void 0;
class UpdateTipoPersonaDto {
    constructor(IdTipo, Descripcion) {
        this.IdTipo = IdTipo;
        this.Descripcion = Descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.Descripcion)
            returnObj.Descripcion = this.Descripcion;
        return returnObj;
    }
    /**
     * A static method to create a new instance of UpdateTipoPersonaDto.
     * Validates the input properties and returns an array containing an error message and undefined if validation fails.
     * Otherwise, it returns an array containing undefined and a new instance of UpdateTipoPersonaDto.
     *
     * @param props - An object containing the properties to initialize the UpdateTipoPersonaDto instance.
     * @returns - An array containing an error message (if any) and the new instance of UpdateTipoPersonaDto (if valid).
     */
    static create(props) {
        const { IdTipo, Descripcion } = props;
        // Validate IdTipo
        if (!IdTipo)
            return ["Missing IdTipo", undefined];
        // Validate Descripcion
        if (!Descripcion)
            return ["Missing Descripcion", undefined];
        // If validation passes, create a new instance of UpdateTipoPersonaDto
        return [undefined, new UpdateTipoPersonaDto(IdTipo, Descripcion)];
    }
}
exports.UpdateTipoPersonaDto = UpdateTipoPersonaDto;
