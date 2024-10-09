const { scraperWebsite } = require("./utils/index");
const express = require("express");
const app = express();
const PORT = 3000;

// 中间件：解析 JSON 请求体
app.use(express.json());

// 定义路由
app.get("/", (req, res) => {
  scraperWebsite("http://www.qiushuxs.com/", ($) => {
    const recommendNovelList = [];
    $(
      ".panel-body.panel-body-c2e90fbd .row.row-c2e90fbd .book-coverlist.book-c2e90fbd"
    ).each((index, ele) => {
      const obj = {};
      obj.name = $(ele).find(".name a").text();
      recommendNovelList.push(obj);
    });
    res.send(JSON.stringify(recommendNovelList));
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
