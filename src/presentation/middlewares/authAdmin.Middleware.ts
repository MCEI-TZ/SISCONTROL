import { NextFunction, Request, Response } from "express";
import { JwtAdapter, envs } from "../../config";

export class AuthAdminMiddleware {
  static async validateJWT(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header("Authorization");
    if (!authorization)
      return res.status(401).json({ error: "No token provided" });
    if (!authorization.startsWith("Bearer "))
      return res.status(401).json({ error: "Invalid Bearer token" });

    const token = authorization.split(" ")[1];

    try {
      const payload = await JwtAdapter.validateToken<{ id: string }>(token);

      if (!payload) return res.status(401).json({ error: "Invalid token" });

      const user = "TecAdmin";
      if (!user) return res.status(401).json({ error: "Invalid token - user" });

      // todo: validar si el usuario esta activo

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async validateEsp(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header("Authorization");
    if (!authorization)
      return res.status(401).json({ error: "No token provided" });
    if (!authorization.startsWith("Bearer "))
      return res.status(401).json({ error: "Invalid Bearer token" });

    const token = authorization.split(" ")[1];

    try {
      if(token !== envs.TOKENESP){
        return res.status(401).json({ error: "Invalid token" });
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
