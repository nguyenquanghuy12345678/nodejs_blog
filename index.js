const express = require("express");
const app = express();
const port = 3000;
  // Khởi động server lắng nghe trên cổng 3000.
app.get("/trang-tin-tuc", (req, res) => {

  var a = 1 ;
  var b = 2 ;
  var c = a + b;

  // Định nghĩa route cho trang gốc.
  res.send("Hello World!");

  // Gửi phản hồi "Hello World!" cho client.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

