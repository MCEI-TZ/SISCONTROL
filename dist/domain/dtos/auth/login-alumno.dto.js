"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAlumnoDto = void 0;
class LoginAlumnoDto {
    constructor(numControl, curp) {
        this.numControl = numControl;
        this.curp = curp;
    }
    static create(object) {
        const { numControl, curp } = object;
        if (!numControl || typeof numControl !== "number")
            return ["Missing or invalid numcontrol"];
        if (!curp || typeof curp !== "string")
            return ["Missing or invalid curp"];
        return [undefined, new LoginAlumnoDto(numControl, curp)];
    }
}
exports.LoginAlumnoDto = LoginAlumnoDto;
