module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'invoiceapp',
  entities: ['dist/**/*.model.js'],
  migrations: ['src/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
