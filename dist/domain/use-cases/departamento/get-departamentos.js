"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDepartamentos = void 0;
class GetDepartamentos {
    constructor(repository) {
        this.repository = repository;
    }
    execute(page, limit) {
        return this.repository.getDepartamentos(page, limit);
    }
}
exports.GetDepartamentos = GetDepartamentos;
