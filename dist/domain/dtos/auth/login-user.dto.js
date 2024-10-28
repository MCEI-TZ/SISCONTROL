"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
const config_1 = require("../../../config");
class LoginUserDto {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { email, password } = object;
        if (!email)
            return ["Missing email"];
        if (!config_1.regularExps.email.test(email))
            return ["Email is not a valid email"];
        if (!password)
            return ["Missing password"];
        if (password.lenght < 6)
            return ["Password is too short"];
        return [undefined, new LoginUserDto(email, password)];
    }
}
exports.LoginUserDto = LoginUserDto;
