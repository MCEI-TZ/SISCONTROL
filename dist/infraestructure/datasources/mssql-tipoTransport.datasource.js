"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransportDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class TipoTransportDatasourceImpl {
    createTipoTransporte(createTipoPersonaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoTransport = yield mssql_1.prisma.tipoTransport.create({
                data: createTipoPersonaDto,
            });
            return domain_1.TipoTransportEntity.fromObject(tipoTransport);
        });
    }
    getTiposTransportes(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const tipoTransportes = yield mssql_1.prisma.tipoTransport.findMany({
                skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.tipoTransport.count();
            const data = tipoTransportes.map((tipoTransporte) => domain_1.TipoTransportEntity.fromObject(tipoTransporte));
            const res = {
                data,
                limit,
                next: page + 1,
                prev: page - 1,
                page,
                total,
            };
            return res;
        });
    }
    getTipoTransporteByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoTransport = yield mssql_1.prisma.tipoTransport.findFirst({
                where: { Nombre: name },
            });
            if (!tipoTransport)
                throw domain_1.CustomError.notFound(`TipoTransport with name ${name} not found`);
            return domain_1.TipoTransportEntity.fromObject(tipoTransport);
        });
    }
    updateTipoTransporte(updateTipoPersonaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTipoTransporteById(updateTipoPersonaDto.IdTpTransp);
            const updateTipoTransport = yield mssql_1.prisma.tipoTransport.update({
                where: { IdTpTransp: updateTipoPersonaDto.IdTpTransp },
                data: updateTipoPersonaDto.values,
            });
            return domain_1.TipoTransportEntity.fromObject(updateTipoTransport);
        });
    }
    deleteTipoTransporte(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getTipoTransporteById(id);
            const deleteTipoTransport = yield mssql_1.prisma.tipoTransport.delete({
                where: { IdTpTransp: id },
            });
            return domain_1.TipoTransportEntity.fromObject(deleteTipoTransport);
        });
    }
    getTipoTransporteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoTransport = yield mssql_1.prisma.tipoTransport.findFirst({
                where: { IdTpTransp: id },
            });
            if (!tipoTransport)
                throw domain_1.CustomError.notFound(`TipoTransport with id ${id} not found`);
            return domain_1.TipoTransportEntity.fromObject(tipoTransport);
        });
    }
}
exports.TipoTransportDatasourceImpl = TipoTransportDatasourceImpl;
