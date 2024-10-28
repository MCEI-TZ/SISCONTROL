import {CustomError} from '../errors/custom.error';
export class EspaciosDeClaseEntity {
  constructor(
    public Id: number,
    public Nombre: string,
    public Abreviatura: string,
    public Capacidad: number,
    public IdSituacion: number
  ) {}

  public static fromObject(object: {
    [key: string]: any;
  }): EspaciosDeClaseEntity {
    const { Id, Nombre, Abreviatura, Capacidad, IdSituacion } = object;
    
    if(Nombre == null) CustomError.badRequest('Missing Nombre');
    if(Abreviatura == null) CustomError.badRequest('Missing Abreviatura');
    if(Capacidad == null) CustomError.badRequest('Missing Capacidad');
    if(IdSituacion == null) CustomError.badRequest('Missing IdSituacion');

    return new EspaciosDeClaseEntity(
      Id,
      Nombre,
      Abreviatura,
      Capacidad,
      IdSituacion
    );
  }
}
