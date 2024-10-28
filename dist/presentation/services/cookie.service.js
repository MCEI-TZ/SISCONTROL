"use strict";
// import { AlumnoEntity, CustomError, LoginAlumnoDto } from "../../domain";
// import { prisma } from "../../data/mssql";
// import { JwtAdapter } from "../../config";
// export class AuthAlumnoService {
//   constructor() {}
//   public async loginAlumno(cookie) {
//     // Find one para verificar si existe
//     const alumno = await prisma.alumno.findFirst({
//       where: {
//         NumControl: loginAlumnoDto.numControl,
//       },
//     });
//     if (!alumno) throw CustomError.badRequest("NumControl not exist");
//     // Trim espacios en blanco adicionales en CURP
//     if (alumno.CURP.trim() !== loginAlumnoDto.curp.trim())
//       throw CustomError.badRequest("Curp is not valid");
//     const token = await JwtAdapter.generateToken({ id: alumno.NumControl });
//     if (!token) throw CustomError.internalServer("Error while creating JWT");
//     const alumnoEntity = AlumnoEntity.fromObject(alumno);
//     return {
//       user: alumnoEntity,
//       token: token,
//     };
//   }
//   public validate = async(token: string)=>{
//     const payload = await JwtAdapter.validateToken(token);
//     if(!payload) throw CustomError.unauthorized('Invalid Token');
//     const {id} = payload as {id: string};
//     if(!id) throw CustomError.internalServer('Id not in token');
//     const user = await UserModel.findOne({email});
//     if(!user) throw CustomError.internalServer('Email not exists');
//     user.emailValidated = true;
//     await user.save();
//     return true;
//   }
// }
