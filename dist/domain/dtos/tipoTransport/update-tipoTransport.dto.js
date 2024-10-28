"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoTransportDto = void 0;
class UpdateTipoTransportDto {
    constructor(IdTpTransp, Nombre) {
        this.IdTpTransp = IdTpTransp;
        this.Nombre = Nombre;
    }
    get values() {
        const returnObj = {};
        if (this.Nombre)
            returnObj.Nombre = this.Nombre;
        return returnObj;
    }
    static create(props) {
        const { IdTpTransp, Nombre } = props;
        if (!IdTpTransp)
            return ["Missing IdTpTransp", undefined];
        if (!Nombre)
            return ["Missing Nombre", undefined];
        return [undefined, new UpdateTipoTransportDto(IdTpTransp, Nombre)];
    }
}
exports.UpdateTipoTransportDto = UpdateTipoTransportDto;
