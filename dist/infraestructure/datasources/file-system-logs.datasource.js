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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemDataSource = void 0;
const fs_1 = __importDefault(require("fs"));
const log_entity_1 = require("../../domain/entities/log.entity");
class FileSystemDataSource {
    constructor() {
        this.logPath = "logs/";
        this.allLogsPath = "logs/logs-low.log";
        this.mediumLogsPath = "logs/logs-medium.log";
        this.highLogsPath = "logs/logs-high.log";
        this.createLogsFiles = () => {
            if (!fs_1.default.existsSync(this.logPath)) {
                fs_1.default.mkdirSync(this.logPath);
            }
            [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach((path) => {
                if (fs_1.default.existsSync(path))
                    return;
                fs_1.default.writeFileSync(path, "");
            });
        };
        this.getLogsFromFile = (path) => {
            const content = fs_1.default.readFileSync(path, "utf-8");
            if (content === "")
                return [];
            const logs = content.split("\n").map(log_entity_1.LogEntity.fromJson);
            return logs;
        };
        this.createLogsFiles();
    }
    saveLog(newlog) {
        return __awaiter(this, void 0, void 0, function* () {
            const logAsJson = `${JSON.stringify(newlog)}\n`;
            fs_1.default.appendFileSync(this.allLogsPath, logAsJson);
            if (newlog.level === log_entity_1.LogSeverityLevel.low)
                return;
            if (newlog.level === log_entity_1.LogSeverityLevel.medium) {
                fs_1.default.appendFileSync(this.mediumLogsPath, logAsJson);
            }
            else {
                fs_1.default.appendFileSync(this.highLogsPath, logAsJson);
            }
        });
    }
    getLogs(serverityLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (serverityLevel) {
                case log_entity_1.LogSeverityLevel.low:
                    return this.getLogsFromFile(this.allLogsPath);
                case log_entity_1.LogSeverityLevel.medium:
                    return this.getLogsFromFile(this.mediumLogsPath);
                case log_entity_1.LogSeverityLevel.high:
                    return this.getLogsFromFile(this.highLogsPath);
                default:
                    throw new Error(`${serverityLevel} not implemented`);
            }
        });
    }
}
exports.FileSystemDataSource = FileSystemDataSource;
