"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdminService = void 0;
const domain_1 = require("../../domain");
const config_1 = require("../../config");
class AuthAdminService {
    constructor() {
        this.validateAdmin = (token) => __awaiter(this, void 0, void 0, function* () {
            const payload = yield config_1.JwtAdapter.validateToken(token);
            if (!payload)
                throw domain_1.CustomError.unauthorized("Invalid Token");
            const { id } = payload;
            if (!id)
                throw domain_1.CustomError.internalServer("Id not in token");
            const user = "TecAdmin" === id;
            if (!user)
                throw domain_1.CustomError.internalServer("Id not exists");
            return true;
        });
    }
    loginAdmin(loginAdminDto) {
        return __awaiter(this, void 0, void 0, function* () {
            // Find one para verificar si existe
            const nombreAdmin = loginAdminDto.user == "TecAdmin";
            if (!nombreAdmin)
                throw domain_1.CustomError.badRequest("Admin not exist");
            const passwordAdmin = loginAdminDto.password == "TecSisControl@1234_";
            if (!passwordAdmin)
                throw domain_1.CustomError.badRequest("Password is not valid");
            const token = yield config_1.JwtAdapter.generateToken({ id: "TecAdmin" });
            if (!token)
                throw domain_1.CustomError.internalServer("Error while creating JWT");
            return {
                user: nombreAdmin,
                token: token,
            };
        });
    }
}
exports.AuthAdminService = AuthAdminService;
