"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlAsistenciasDto = void 0;
class ControlAsistenciasDto {
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
    get values() {
        const returnObj = {};
        if (this.IdControlAsis)
            returnObj.IdControlAsis = this.IdControlAsis;
        if (this.idTipo)
            returnObj.idTipo = this.idTipo;
        if (this.IdEspacio)
            returnObj.IdEspacio = this.IdEspacio;
        if (this.IdDoce)
            returnObj.IdDoce = this.IdDoce;
        if (this.idVisitante)
            returnObj.idVisitante = this.idVisitante;
        if (this.NumControl)
            returnObj.NumControl = this.NumControl;
        if (this.idVehiculo)
            returnObj.idVehiculo = this.idVehiculo;
        if (this.HoraEntrada)
            returnObj.HoraEntrada = this.HoraEntrada;
        if (this.HoraSalida)
            returnObj.HoraSalida = this.HoraSalida;
        if (this.IdTpTransport)
            returnObj.IdTpTransport = this.IdTpTransport;
        return returnObj;
    }
    static createOrUpdate(props) {
        const { IdControlAsis, idTipo, IdEspacio, IdDoce, idVisitante, NumControl, idVehiculo, HoraEntrada, HoraSalida, IdTpTransport, } = props;
        // if (!idTipo) return ["Missing IdTipo", undefined];
        if (!IdEspacio)
            return ["Missing IdEspacio", undefined];
        return [
            undefined,
            new ControlAsistenciasDto(IdControlAsis, idTipo, IdEspacio, IdDoce, idVisitante, NumControl, idVehiculo, HoraEntrada, HoraSalida, IdTpTransport),
        ];
    }
}
exports.ControlAsistenciasDto = ControlAsistenciasDto;
