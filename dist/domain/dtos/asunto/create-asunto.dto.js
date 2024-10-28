"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAsuntoDto = void 0;
class CreateAsuntoDto {
    constructor(Descripcion, IdEvento) {
        this.Descripcion = Descripcion;
        this.IdEvento = IdEvento;
    }
    /**
     * A static method to create a new instance of CreateAsuntoDto with validation.
     *
     * @param props - An object containing the properties to initialize the CreateAsuntoDto.
     * @returns - An array containing an error message (if any) and the CreateAsuntoDto instance (if valid).
     *
     * @example
     * ```typescript
     * const [error, dto] = CreateAsuntoDto.create({ Descripcion: 'My Asunto', IdEvento: 123 });
     * if (error) {
     *   console.error(error);
     * } else {
     *   console.log(dto);
     * }
     * ```
     */
    static create(props) {
        const { Descripcion, IdEvento } = props;
        // Check if Descripcion is provided
        if (!Descripcion)
            return ["Missing Descripcion", undefined];
        // Check if IdEvento is provided
        if (!IdEvento)
            return ["Missing IdEvento", undefined];
        // If all validations pass, create a new instance of CreateAsuntoDto
        return [undefined, new CreateAsuntoDto(Descripcion, IdEvento)];
    }
}
exports.CreateAsuntoDto = CreateAsuntoDto;
