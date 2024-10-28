import { Request, Response } from "express";
import { AuthAdminService } from "../services/authAdmin.service";
import { CustomError, LoginAdminDto } from "../../domain";
export class AuthAdminController {
  constructor(public readonly authService: AuthAdminService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  loginAdmin = (req: Request, res: Response) => {
    const [error, loginAdminDto] = LoginAdminDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.authService
      .loginAdmin(loginAdminDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  validateAdmin = (req: Request, res: Response) => {
    // Extraer el token del encabezado Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // El encabezado Authorization debería tener el formato "Bearer <token>"
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Token missing in Authorization header" });
    }
    console.log;
    this.authService
      .validateAdmin(token)
      .then(() => res.json("Token was validated properly"))
      .catch((error) => this.handleError(error, res));
  };
}
