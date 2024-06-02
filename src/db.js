require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

pool.connect()
  .then(client => {
    console.log('Database connected...');
    client.release(); 
  })
  .catch(err => console.error('Connection error', err.stack));

process.on('exit', () => {
  pool.end(() => {
    console.log('Pool has ended');
  });
});

module.exports = pool;
