const fs = require("fs");

let p = new Promise((resolve, reject) => {
  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

p.then((data) => {
  console.log("成功讀到資料:" , data);
}).catch((error) => {
  console.error("發生錯誤了" , error);
});
