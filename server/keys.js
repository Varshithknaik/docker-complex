const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const pgUser = process.env.PGUSER || 'postgres';
const pgHost = process.env.PGHOST || 'localhost';
const pgDatabase = process.env.PGDATABASE || 'postgres';
const pgPassword = process.env.PGPASSWORD || 'postgres';
const pgPort = process.env.PGPORT || 5432;

module.exports = {
  redisHost,
  redisPort,
  pgUser,
  pgHost,
  pgDatabase,
  pgPassword,
  pgPort,

};