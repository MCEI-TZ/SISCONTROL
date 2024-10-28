import { CustomError, LoginAdminDto } from "../../domain";
import { JwtAdapter } from "../../config";

export class AuthAdminService {
  constructor() {}

  public async loginAdmin(loginAdminDto: LoginAdminDto) {
    // Find one para verificar si existe
    const nombreAdmin = loginAdminDto.user == "TecAdmin";
    if (!nombreAdmin) throw CustomError.badRequest("Admin not exist");

    const passwordAdmin = loginAdminDto.password == "TecSisControl@1234_";
    if (!passwordAdmin) throw CustomError.badRequest("Password is not valid");

    const token = await JwtAdapter.generateToken({ id: "TecAdmin" });
    if (!token) throw CustomError.internalServer("Error while creating JWT");

    return {
      user: nombreAdmin,
      token: token,
    };
  }

  public validateAdmin = async (token: string) => {
    const payload = await JwtAdapter.validateToken(token);
    if (!payload) throw CustomError.unauthorized("Invalid Token");

    const { id } = payload as { id: string };

    if (!id) throw CustomError.internalServer("Id not in token");

    const user = "TecAdmin" === id;
    if (!user) throw CustomError.internalServer("Id not exists");
    return true;
  };
}
