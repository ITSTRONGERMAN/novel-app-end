const axios = require("axios");
const cheerio = require("cheerio");

// 读取网页数据
const fetchDate = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data; // 返回响应的数据
  } catch (error) {
    throw new Error("Error fetching data: " + error.message); // 抛出错误
  }
};

// 抓取网页数据
const scraperWebsite = async (url, callback) => {
  try {
    const webContent = await fetchDate(url); // 调用 fetchDate
    const $ = cheerio.load(webContent); // 加载网页内容
    callback && callback($); // 执行回调函数
  } catch (err) {
    console.log(err.message); // 捕获并打印错误信息
  }
};

module.exports = {
  scraperWebsite,
};
