"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutosAlumnoDto = void 0;
class UpdateAutosAlumnoDto {
    constructor(NumControl, IdVehiculo) {
        this.NumControl = NumControl;
        this.IdVehiculo = IdVehiculo;
    }
    get values() {
        const returnObj = {};
        if (this.IdVehiculo)
            returnObj.IdVehiculo = this.IdVehiculo;
        if (this.NumControl)
            returnObj.NumControl = this.NumControl;
        return returnObj;
    }
    static create(props) {
        const { NumControl, IdVehiculo } = props;
        if (!NumControl)
            return ["Missing NumControl", undefined];
        if (!IdVehiculo)
            return ["Missing IdVehiculo", undefined];
        return [undefined, new UpdateAutosAlumnoDto(NumControl, IdVehiculo)];
    }
}
exports.UpdateAutosAlumnoDto = UpdateAutosAlumnoDto;
