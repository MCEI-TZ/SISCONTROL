"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdminDto = void 0;
class LoginAdminDto {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
    static create(object) {
        const { user, password } = object;
        if (!user || typeof user !== "string")
            return ["Missing or invalid user"];
        if (!password || typeof password !== "string")
            return ["Missing or invalid password"];
        return [undefined, new LoginAdminDto(user, password)];
    }
}
exports.LoginAdminDto = LoginAdminDto;
