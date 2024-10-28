import "dotenv/config";

import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),

  //SQL Server Data
  MSSQL_URL: get("MSSQL_URL").required().asString(),
  MSSQL_USER: get("MSSQL_USER").required().asString(),
  MSSQL_PASSWORD: get("MSSQL_PASSWORD").required().asString(),
  MSSQL_DB: get("MSSQL_DB").required().asString(),
  // Mail
  MAILER_SERVICE: get("MAILER_SERVICE").required().asString(),
  MAILER_EMAIL: get("MAILER_EMAIL").required().asEmailString(),
  MAILER_SECRET_KEY: get("MAILER_SECRET_KEY").required().asString(),
  //Pagina
  PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
  // JWT_SEED
  JWT_SEED: get("JWT_SEED").required().asString(),
  // Web_Service_URL
  WEBSERVICE_URL: get("WEBSERVICE_URL").required().asString(),
  // Log Admin
  // LOG_ADMIN: get("LOG_ADMIN").required().asString(),
  // LOG_PASSWORD: get("LOG_PASSWORD").required().asString(),
  TOKENESP: get("TOKENESP").required().asString(),
};
