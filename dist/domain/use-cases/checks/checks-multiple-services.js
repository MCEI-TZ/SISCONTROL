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
exports.CheckServiceMultiple = void 0;
const log_entity_1 = require("../../entities/log.entity");
class CheckServiceMultiple {
    constructor(logRepository, succesCallback, errorCallback) {
        this.logRepository = logRepository;
        this.succesCallback = succesCallback;
        this.errorCallback = errorCallback;
    }
    callLogs(log) {
        this.logRepository.forEach((logRepository) => {
            logRepository.saveLog(log);
        });
    }
    execute(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = yield fetch(url);
                if (!req.ok) {
                    throw new Error(`Error on check service ${url}`);
                }
                const log = new log_entity_1.LogEntity({
                    message: `Service ${url} working`,
                    level: log_entity_1.LogSeverityLevel.low,
                    origin: "check-service.ts",
                });
                this.callLogs(log);
                this.succesCallback && this.succesCallback();
                return true;
            }
            catch (error) {
                const errorMessage = `${url} is not ok.  ${error}`;
                const log = new log_entity_1.LogEntity({
                    message: errorMessage,
                    level: log_entity_1.LogSeverityLevel.high,
                    origin: "check-service.ts",
                });
                this.callLogs(log);
                this.errorCallback && this.errorCallback(errorMessage);
                return false;
            }
        });
    }
}
exports.CheckServiceMultiple = CheckServiceMultiple;
