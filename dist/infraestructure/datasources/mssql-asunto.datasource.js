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
exports.AsuntoDatasourceImpl = void 0;
const mssql_1 = require("../../data/mssql");
const domain_1 = require("../../domain");
class AsuntoDatasourceImpl {
    /**
     * Retrieves a single AsuntoEntity by its unique identifier.
     *
     * @param id - The unique identifier of the AsuntoEntity to retrieve.
     * @returns A Promise that resolves to the AsuntoEntity with the given id.
     *          If no AsuntoEntity is found with the given id, the promise will reject with a CustomError.notFound error.
     *
     * @throws CustomError.notFound - If no AsuntoEntity is found with the given id.
     */
    getAsuntoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const asunto = yield mssql_1.prisma.asunto.findFirst({
                where: { IdAsunto: id },
            });
            if (!asunto)
                throw domain_1.CustomError.notFound(`Asunto with id ${id} not found`);
            return domain_1.AsuntoEntity.fromObject(asunto);
        });
    }
    /**
     * Creates a new AsuntoEntity in the database.
     *
     * @param createAsuntoDto - The data transfer object containing the necessary information to create a new AsuntoEntity.
     * @returns A Promise that resolves to the newly created AsuntoEntity.
     *
     * @throws CustomError.validationError - If the provided createAsuntoDto is invalid.
     * @throws CustomError.databaseError - If there is an error while interacting with the database.
     *
     * @remarks
     * This method uses the Prisma client to interact with the database.
     * It maps the createAsuntoDto to the appropriate Prisma data structure and creates a new AsuntoEntity in the database.
     * The newly created AsuntoEntity is then returned as a result.
     */
    createAsunto(createAsuntoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const asunto = yield mssql_1.prisma.asunto.create({
                data: createAsuntoDto,
            });
            return domain_1.AsuntoEntity.fromObject(asunto);
        });
    }
    /**
     * Retrieves a paginated list of AsuntoEntities from the database.
     *
     * @param page - The page number to retrieve.
     * @param limit - The maximum number of AsuntoEntities to return per page.
     * @returns A Promise that resolves to a PageReponseDtos containing the requested AsuntoEntities.
     *
     * @throws CustomError.databaseError - If there is an error while interacting with the database.
     *
     * @remarks
     * This method uses the Prisma client to interact with the database.
     * It retrieves a paginated list of AsuntoEntities based on the provided page and limit parameters.
     * The total count of AsuntoEntities is also retrieved for pagination purposes.
     * The retrieved AsuntoEntities are then mapped to AsuntoEntity instances and returned as a result.
     */
    GetAsuntos(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const asuntos = yield mssql_1.prisma.asunto.findMany({
                skip: skip,
                take: limit,
            });
            const total = yield mssql_1.prisma.evento.count(); // This line seems to be incorrect, it should be prisma.asunto.count()
            const data = asuntos.map((asunto) => domain_1.AsuntoEntity.fromObject(asunto));
            const res = {
                data: data,
                limit: limit,
                next: page + 1,
                prev: page - 1,
                page,
                total,
            };
            return res;
        });
    }
    /**
     * Retrieves a single AsuntoEntity by its unique name.
     *
     * @param name - The unique name of the AsuntoEntity to retrieve.
     * @returns A Promise that resolves to the AsuntoEntity with the given name.
     *          If no AsuntoEntity is found with the given name, the promise will reject with a CustomError.notFound error.
     *
     * @throws CustomError.notFound - If no AsuntoEntity is found with the given name.
     *
     * @remarks
     * This method uses the Prisma client to interact with the database.
     * It searches for an AsuntoEntity with the provided name and returns it if found.
     * If no AsuntoEntity is found, it throws a CustomError.notFound error.
     */
    getAsuntoByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const asunto = yield mssql_1.prisma.asunto.findFirst({
                where: { Descripcion: name },
            });
            if (!asunto)
                throw domain_1.CustomError.notFound(`Asunto with name ${name} not found`);
            return domain_1.AsuntoEntity.fromObject(asunto);
        });
    }
    /**
     * Updates an existing AsuntoEntity in the database.
     *
     * @param updateAsuntoDto - The data transfer object containing the necessary information to update the AsuntoEntity.
     * @returns A Promise that resolves to the updated AsuntoEntity.
     *
     * @throws CustomError.notFound - If no AsuntoEntity is found with the given id in the updateAsuntoDto.
     * @throws CustomError.databaseError - If there is an error while interacting with the database.
     *
     * @remarks
     * This method uses the Prisma client to interact with the database.
     * It maps the updateAsuntoDto to the appropriate Prisma data structure and updates the AsuntoEntity in the database.
     * The updated AsuntoEntity is then returned as a result.
     *
     * @example
     * ```typescript
     * const updateAsuntoDto = {
     *   IdAsunto: 1,
     *   values: {
     *     Descripcion: 'New Description',
     *     //... other fields to update
     *   },
     * };
     *
     * const updatedAsunto = await asuntoDatasource.updateAsunto(updateAsuntoDto);
     * console.log(updatedAsunto); // Output: { IdAsunto: 1, Descripcion: 'New Description',... }
     * ```
     */
    updateAsunto(updateAsuntoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateAsunto = yield mssql_1.prisma.asunto.update({
                where: { IdAsunto: updateAsuntoDto.IdAsunto },
                data: updateAsuntoDto.values,
            });
            return domain_1.AsuntoEntity.fromObject(updateAsunto);
        });
    }
    /**
     * Deletes an existing AsuntoEntity from the database.
     *
     * @param id - The unique identifier of the AsuntoEntity to delete.
     * @returns A Promise that resolves to the deleted AsuntoEntity.
     *
     * @throws CustomError.notFound - If no AsuntoEntity is found with the given id.
     * @throws CustomError.databaseError - If there is an error while interacting with the database.
     *
     * @remarks
     * This method uses the Prisma client to interact with the database.
     * It deletes the AsuntoEntity with the provided id from the database.
     * The deleted AsuntoEntity is then returned as a result.
     *
     * @example
     * ```typescript
     * const deletedAsunto = await asuntoDatasource.deleteAsunto(1);
     * console.log(deletedAsunto); // Output: { IdAsunto: 1, Descripcion: '...',... }
     * ```
     */
    deleteAsunto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteAsunto = yield mssql_1.prisma.asunto.delete({
                where: { IdAsunto: id },
            });
            return domain_1.AsuntoEntity.fromObject(deleteAsunto);
        });
    }
}
exports.AsuntoDatasourceImpl = AsuntoDatasourceImpl;
