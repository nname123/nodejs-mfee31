let doWork = function (job, timer) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, timer);
  });
};

let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);
// 刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘
doWork("刷牙", 3000)
  .then((result) => {
    console.log(result);
    return doWork("吃早餐", 5000);
  })
  //   .then((result) => {
  //     console.log(result);
  //     // 故意失敗
  //     throw new Error("Something failed");
  //     console.log("故意失敗");
  //   })
  .then((result) => {
    console.log(result);
    return doWork("寫功課", 3000);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    // 失敗訊息
    console.log(err);
  });


  