"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTipoTransportDto = void 0;
class CreateTipoTransportDto {
    constructor(Nombre) {
        this.Nombre = Nombre;
    }
    static create(props) {
        const { Nombre } = props;
        if (!Nombre)
            return ["Missing Nombre", undefined];
        return [undefined, new CreateTipoTransportDto(Nombre)];
    }
}
exports.CreateTipoTransportDto = CreateTipoTransportDto;
