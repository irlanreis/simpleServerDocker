require('dotenv').config();
const mysql = require('mysql2/promise');

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      port: process.env.MYSQLPORT
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQLDATABASE}\`;`);
    console.log(`✅ Banco "${process.env.MYSQLDATABASE}" verificado/criado.`);
    await connection.end();
  } catch (err) {
    console.error('❌ Erro ao criar/verificar banco:', err.message);
  }
})();
