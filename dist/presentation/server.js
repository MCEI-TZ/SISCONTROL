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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port, routes, public_path = "public" } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: true }));
            this.app.use((0, compression_1.default)());
            this.app.use(express_1.default.static(this.publicPath));
            this.app.use(this.routes);
            this.app.get('*', (req, res) => {
                const indexPath = path_1.default.join(__dirname + `../../${this.publicPath}/index.html`);
                res.sendFile(indexPath);
            });
            this.serverListener = this.app.listen(this.port, () => {
                console.log(`Server running on ${this.port}`);
            });
        });
    }
    close() {
        var _a;
        (_a = this.serverListener) === null || _a === void 0 ? void 0 : _a.close();
    }
}
exports.Server = Server;
