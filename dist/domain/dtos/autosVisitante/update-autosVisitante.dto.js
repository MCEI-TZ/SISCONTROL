"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutosVisitanteDto = void 0;
class UpdateAutosVisitanteDto {
    constructor(idVisitante, IdVehiculo) {
        this.idVisitante = idVisitante;
        this.IdVehiculo = IdVehiculo;
    }
    get values() {
        const returnObj = {};
        if (this.IdVehiculo)
            returnObj.IdVehiculo = this.IdVehiculo;
        if (this.idVisitante)
            returnObj.IdVisitante = this.idVisitante;
        return returnObj;
    }
    static create(props) {
        const { idVisitante, IdVehiculo } = props;
        if (!idVisitante)
            return ["Missing idVisitante", undefined];
        if (!IdVehiculo)
            return ["Missing idVehiculo", undefined];
        return [undefined, new UpdateAutosVisitanteDto(idVisitante, IdVehiculo)];
    }
}
exports.UpdateAutosVisitanteDto = UpdateAutosVisitanteDto;
