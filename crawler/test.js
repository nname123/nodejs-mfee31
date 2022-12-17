const mysql2 = require("mysql2/promise");
require("dotenv").config();
(async () => {
  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });
  try {
    // simple query
    let result = await connection.query("SELECT * FROM `stocks`");
    let data = result[0];
    console.log(data);

    connection.end();
    // console.log("用 await 拿到的結果", response.data);
  } catch (e) {
    console.error("catch 到的錯誤", e);
  }
})();
