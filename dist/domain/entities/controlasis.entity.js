"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlAsisEntity = void 0;
class ControlAsisEntity {
    constructor(IdControlAsis, idTipo, IdEspacio, IdDoce, idVisitante, NumControl, idVehiculo, HoraEntrada, HoraSalida, IdTpTransport) {
        this.IdControlAsis = IdControlAsis;
        this.idTipo = idTipo;
        this.IdEspacio = IdEspacio;
        this.IdDoce = IdDoce;
        this.idVisitante = idVisitante;
        this.NumControl = NumControl;
        this.idVehiculo = idVehiculo;
        this.HoraEntrada = HoraEntrada;
        this.HoraSalida = HoraSalida;
        this.IdTpTransport = IdTpTransport;
    }
    static fromObject(object) {
        const { IdControlAsis, idTipo, IdEspacio, IdDoce, idVisitante, NumControl, idVehiculo, HoraEntrada, HoraSalida, IdTpTransport, } = object;
        if (IdControlAsis == null)
            throw new Error("Missing IdControlAsis");
        if (idTipo == null)
            throw new Error("Missing idTipo");
        if (IdEspacio == null)
            throw new Error("Missing IdEspacio");
        return new ControlAsisEntity(IdControlAsis, idTipo, IdEspacio, IdDoce, idVisitante, NumControl, idVehiculo, HoraEntrada, HoraSalida, IdTpTransport);
    }
}
exports.ControlAsisEntity = ControlAsisEntity;
