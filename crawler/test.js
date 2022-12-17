const mysql2 = require("mysql2/promise");
(async () => {
  const connection = await mysql2.createConnection({
    host: "localhost",
    // port: 8080,
    user: "admin",
    password: "",
    database: "stock_mfee31",
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
