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
};
