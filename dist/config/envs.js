"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)("PORT").required().asPortNumber(),
    //SQL Server Data
    MSSQL_URL: (0, env_var_1.get)("MSSQL_URL").required().asString(),
    MSSQL_USER: (0, env_var_1.get)("MSSQL_USER").required().asString(),
    MSSQL_PASSWORD: (0, env_var_1.get)("MSSQL_PASSWORD").required().asString(),
    MSSQL_DB: (0, env_var_1.get)("MSSQL_DB").required().asString(),
    // Mail
    MAILER_SERVICE: (0, env_var_1.get)("MAILER_SERVICE").required().asString(),
    MAILER_EMAIL: (0, env_var_1.get)("MAILER_EMAIL").required().asEmailString(),
    MAILER_SECRET_KEY: (0, env_var_1.get)("MAILER_SECRET_KEY").required().asString(),
    //Pagina
    PUBLIC_PATH: (0, env_var_1.get)("PUBLIC_PATH").default("public").asString(),
    // JWT_SEED
    JWT_SEED: (0, env_var_1.get)("JWT_SEED").required().asString(),
    // Web_Service_URL
    WEBSERVICE_URL: (0, env_var_1.get)("WEBSERVICE_URL").required().asString(),
    // Log Admin
    // LOG_ADMIN: get("LOG_ADMIN").required().asString(),
    // LOG_PASSWORD: get("LOG_PASSWORD").required().asString(),
    TOKENESP: (0, env_var_1.get)("TOKENESP").required().asString(),
};
