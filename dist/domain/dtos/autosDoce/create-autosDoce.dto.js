"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutosDoceDto = void 0;
class CreateAutosDoceDto {
    constructor(IdDoce, IdVehiculo) {
        this.IdDoce = IdDoce;
        this.IdVehiculo = IdVehiculo;
    }
    static create(props) {
        const { IdDoce, IdVehiculo } = props;
        if (!IdDoce)
            return ["Missing IdDoce", undefined];
        if (!IdVehiculo)
            return ["Missing IdVehiculo", undefined];
        return [undefined, new CreateAutosDoceDto(IdDoce, IdVehiculo)];
    }
}
exports.CreateAutosDoceDto = CreateAutosDoceDto;
