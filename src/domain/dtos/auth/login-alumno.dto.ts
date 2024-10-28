export class LoginAlumnoDto {
  private constructor(public numControl: number, public curp: string) {}

  static create(object: { [key: string]: any }): [string?, LoginAlumnoDto?] {
    const { numControl, curp } = object;

    if (!numControl || typeof numControl !== "number")
      return ["Missing or invalid numcontrol"];
    if (!curp || typeof curp !== "string") return ["Missing or invalid curp"];

    return [undefined, new LoginAlumnoDto(numControl, curp)];
  }
}
