"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAlumnoController = void 0;
const domain_1 = require("../../domain");
class AuthAlumnoController {
    constructor(authService) {
        this.authService = authService;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: "Internal server error" });
        };
        this.loginAlumno = (req, res) => {
            const [error, loginAlumnoDto] = domain_1.LoginAlumnoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            this.authService
                .loginAlumno(loginAlumnoDto)
                .then((user) => res.json(user))
                .catch((error) => this.handleError(error, res));
        };
        this.validate = (req, res) => {
            // Extraer el token del encabezado Authorization
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: 'Authorization header missing' });
            }
            // El encabezado Authorization debería tener el formato "Bearer <token>"
            const token = authHeader.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Token missing in Authorization header' });
            }
            console.log;
            this.authService
                .validate(token)
                .then(() => res.json("Token was validated properly"))
                .catch((error) => this.handleError(error, res));
        };
    }
}
exports.AuthAlumnoController = AuthAlumnoController;
