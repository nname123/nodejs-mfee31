const axios = require("axios");
const fs = require("fs/promises");
const moment = require("moment");

(async () => {
  try {
    let stockNo = await fs.readFile("stock.txt", "utf-8");
    // console.log(stockNo);
    let date = moment().format("YYYYMMDD");
    console.log(date);
    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });
    console.log("用 await 拿到的結果", response.data);
  } catch (e) {
    console.error("catch 到的錯誤", e);
  }
})();
