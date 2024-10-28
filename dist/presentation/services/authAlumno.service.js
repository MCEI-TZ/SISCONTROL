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
exports.AuthAlumnoService = void 0;
const domain_1 = require("../../domain");
const mssql_1 = require("../../data/mssql");
const config_1 = require("../../config");
class AuthAlumnoService {
    constructor() {
        this.validate = (token) => __awaiter(this, void 0, void 0, function* () {
            const payload = yield config_1.JwtAdapter.validateToken(token);
            if (!payload)
                throw domain_1.CustomError.unauthorized('Invalid Token');
            const { id } = payload;
            if (!id)
                throw domain_1.CustomError.internalServer('Id not in token');
            const user = yield mssql_1.prisma.alumno.findFirst({ where: { NumControl: id } });
            if (!user)
                throw domain_1.CustomError.internalServer('Id not exists');
            return true;
        });
    }
    loginAlumno(loginAlumnoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            // Find one para verificar si existe
            const alumno = yield mssql_1.prisma.alumno.findFirst({
                where: {
                    NumControl: loginAlumnoDto.numControl,
                },
            });
            if (!alumno)
                throw domain_1.CustomError.badRequest("NumControl not exist");
            // Trim espacios en blanco adicionales en CURP
            if (alumno.CURP.trim() !== loginAlumnoDto.curp.trim())
                throw domain_1.CustomError.badRequest("Curp is not valid");
            const token = yield config_1.JwtAdapter.generateToken({ id: alumno.NumControl });
            if (!token)
                throw domain_1.CustomError.internalServer("Error while creating JWT");
            const alumnoEntity = domain_1.AlumnoEntity.fromObject(alumno);
            return {
                user: alumnoEntity,
                token: token,
            };
        });
    }
}
exports.AuthAlumnoService = AuthAlumnoService;
