import { Request, Response } from "express";
import { AuthAlumnoService } from "../services/authAlumno.service";
import { CustomError, LoginAlumnoDto } from "../../domain";
export class AuthAlumnoController {
  constructor(public readonly authService: AuthAlumnoService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  loginAlumno = (req: Request, res: Response) => {
    const [error, loginAlumnoDto] = LoginAlumnoDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.authService
      .loginAlumno(loginAlumnoDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  validate = (req: Request, res: Response) => {
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
    console.log
    this.authService
      .validate(token)
      .then(() => res.json("Token was validated properly"))
      .catch((error) => this.handleError(error, res));
  };
}
