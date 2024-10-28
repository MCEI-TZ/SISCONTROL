"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutosVisitanteDto = void 0;
class CreateAutosVisitanteDto {
    constructor(idVisitante, IdVehiculo) {
        this.idVisitante = idVisitante;
        this.IdVehiculo = IdVehiculo;
    }
    static create(props) {
        const { idVisitante, IdVehiculo } = props;
        if (!idVisitante)
            return ["Missing idVisitante", undefined];
        if (!IdVehiculo)
            return ["Missing idVehiculo", undefined];
        return [undefined, new CreateAutosVisitanteDto(idVisitante, IdVehiculo)];
    }
}
exports.CreateAutosVisitanteDto = CreateAutosVisitanteDto;
