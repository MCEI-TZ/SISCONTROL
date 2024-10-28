import { regularExps } from "../../../config";
export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return ["Missing email"];
    if (!regularExps.email.test(email)) return ["Email is not a valid email"];
    if (!password) return ["Missing password"];
    if (password.lenght < 6) return ["Password is too short"];

    return [undefined, new LoginUserDto(email, password)];
  }
}
