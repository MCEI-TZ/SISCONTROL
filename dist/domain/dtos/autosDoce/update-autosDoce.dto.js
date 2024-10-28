"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutosDoceDto = void 0;
class UpdateAutosDoceDto {
    constructor(IdDoce, IdVehiculo) {
        this.IdDoce = IdDoce;
        this.IdVehiculo = IdVehiculo;
    }
    get values() {
        const returnObj = {};
        if (this.IdVehiculo)
            returnObj.IdVehiculo = this.IdVehiculo;
        if (this.IdDoce)
            returnObj.IdDoce = this.IdDoce;
        return returnObj;
    }
    static create(props) {
        const { IdDoce, IdVehiculo } = props;
        if (!IdDoce)
            return ["Missing IdDoce", undefined];
        if (!IdVehiculo)
            return ["Missing IdVehiculo", undefined];
        return [undefined, new UpdateAutosDoceDto(IdDoce, IdVehiculo)];
    }
}
exports.UpdateAutosDoceDto = UpdateAutosDoceDto;
