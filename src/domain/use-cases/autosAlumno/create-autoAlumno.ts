import { AutosAlumnos } from "@prisma/client";
import { CreateAutosAlumnoDto } from "../../dtos";
import { BaseRepository } from "../../repositories/siscontrol.repository";

export interface CreateAutosAlumnoUseCase {
  execute(dto: CreateAutosAlumnoDto): Promise<AutosAlumnos>;
}

export class CreateAutosAlumno implements CreateAutosAlumnoUseCase {
  constructor(private readonly repository: BaseRepository<AutosAlumnos>) {}
  execute(dto: CreateAutosAlumnoDto): Promise<AutosAlumnos> {
    return this.repository.createItem(dto);
  }
}
