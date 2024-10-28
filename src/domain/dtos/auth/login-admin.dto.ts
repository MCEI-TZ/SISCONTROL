export class LoginAdminDto {
  private constructor(public user: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginAdminDto?] {
    const { user, password } = object;

    if (!user || typeof user !== "string") return ["Missing or invalid user"];
    if (!password || typeof password !== "string")
      return ["Missing or invalid password"];

    return [undefined, new LoginAdminDto(user, password)];
  }
}
