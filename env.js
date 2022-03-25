require("dotenv").config();

function getEnv(variable) {
  const value = process.env[variable];
  if (typeof value === undefined) {
    console.warn(`Seems like the variable ${variable} is not set in the environment.
    Did you forget to execute "cp .env.sample .env" and adjust variables in the .env file to match our own environment`)
  }
  return value;
};

const inDevEnv = getEnv("NODE_ENV") === "dev";
const inTestEnv = getEnv("NODE_ENV") === "test";

const SERVER_PORT = getEnv(`SERVER_PORT${inTestEnv ? "_TEST" : ""}`);

const CLIENT_ORIGIN = getEnv("CLIENT_ORIGIN");

const SECRET_JWT = getEnv("SECRET_JWT")

const DB_HOST = getEnv(`DB_HOST${inTestEnv ? '_TEST' : ''}`);
const DB_PORT = getEnv(`DB_PORT${inTestEnv ? '_TEST' : ''}`);
const DB_USER = getEnv(`DB_USER${inTestEnv ? '_TEST' : ''}`);
const DB_PASS = getEnv(`DB_PASS${inTestEnv ? '_TEST' : ''}`);
const DB_NAME = getEnv(`DB_NAME${inTestEnv ? '_TEST' : ''}`);

const EMAIL_HOST = getEnv("EMAIL_HOST");
const EMAIL_PORT = getEnv("EMAIL_PORT");
const EMAIL_SECURE = getEnv("EMAIL_SECURE");
const EMAIL_TO_SEND = getEnv("EMAIL_TO_SEND");
const EMAIL_USED = getEnv("EMAIL_USED");
const EMAIL_PASSWORD = getEnv("EMAIL_PASSWORD");

module.exports = {
  inDevEnv,
  inTestEnv,
  SERVER_PORT,
  CLIENT_ORIGIN,
  SECRET_JWT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_SECURE,
  EMAIL_TO_SEND,
  EMAIL_USED,
  EMAIL_PASSWORD,
};
