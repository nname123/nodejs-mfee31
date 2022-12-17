const express = require('express');
// 利用 express 做出一個 web app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});


app.listen(3001, () => {
    console.log('server is running at 3001');
});
