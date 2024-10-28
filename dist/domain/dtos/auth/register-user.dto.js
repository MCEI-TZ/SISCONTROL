"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const config_1 = require("../../../config");
class RegisterUserDto {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { name, email, password } = object;
        if (!name)
            return ["Missing name"];
        if (!email)
            return ["Missing email"];
        if (!config_1.regularExps.email.test(email))
            return ["Invalid email"];
        if (!password)
            return ["Missing password"];
        if (password.length < 6)
            return ["Password too short"];
        return [undefined, new RegisterUserDto(name, email, password)];
    }
}
exports.RegisterUserDto = RegisterUserDto;
