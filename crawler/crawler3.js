const axios = require("axios");
const fs = require("fs");

let getStockNo = new Promise((resolve, reject) => {
  // error-first callback
  fs.readFile("stock.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

(async () => {
  try {
    let stockNo = await getStockNo;
    let date = "20221111";
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
