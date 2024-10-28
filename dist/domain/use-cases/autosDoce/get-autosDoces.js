"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAutosDoces = void 0;
class GetAutosDoces {
    constructor(respository) {
        this.respository = respository;
    }
    execute(page, limit) {
        return this.respository.getItems(page, limit);
    }
}
exports.GetAutosDoces = GetAutosDoces;
