const fs = require('fs/promises');
const mysql = require('mysql2');
require('dotenv').config();

const functionSeed = async () => {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  });
  const query = await (await fs.readFile('./teste.sql', { encoding: 'utf-8' })).toString();
  connection.connect();
  connection.query(query);
  connection.end();
};
functionSeed();
