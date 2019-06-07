module.exports = { 
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    pgUser: 'postgres',
    pgHost: 'redis',
    pgDatabase: 'postgres',
    pgPassword: '',
    pgPort: 5432
};
  