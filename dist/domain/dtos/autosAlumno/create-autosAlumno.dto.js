"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAutosAlumnoDto = void 0;
class CreateAutosAlumnoDto {
    constructor(NumControl, IdVehiculo) {
        this.NumControl = NumControl;
        this.IdVehiculo = IdVehiculo;
    }
    static create(props) {
        const { NumControl, IdVehiculo } = props;
        if (NumControl == null)
            return ["Missing NumControl", undefined];
        if (IdVehiculo == null)
            return ["Missing IdVehiculo", undefined];
        return [undefined, new CreateAutosAlumnoDto(NumControl, IdVehiculo)];
    }
}
exports.CreateAutosAlumnoDto = CreateAutosAlumnoDto;
