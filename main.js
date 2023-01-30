const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/make-fetch", async (req, res) => {
  const headers = `
    Host: api.geodoge.com
    Connection: keep-alive
    Content-Length: 15
    sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"
    DNT: 1
    sec-ch-ua-mobile: ?0
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
    Content-Type: application/x-www-form-urlencoded
    Lang: en-us
    token: 7ef48b12-6671-44b7-89ae-600885eb0697
    sec-ch-ua-platform: Windows
    Accept: */*
    Origin: https://www.amzdoge.com
    Sec-Fetch-Site: cross-site
    Sec-Fetch-Mode: cors
    Sec-Fetch-Dest: empty
    Referer: https://www.amzdoge.com/
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9,pt;q=0.8
    Cookie: aliyungf_tc=ca58e39959ea41c18df09aed477bbc7b93c3af6dc0814212af16429b5bc69b7b
  `;

  (async () => {
    const response = await fetch("https://api.geodoge.com/api/order/speedup", {
      method: "POST",
      headers: headers,
      body:
        "orderid=" +
        Math.floor(Math.random() * (1181788 - 1131788 + 1)) +
        1131788,
    });
    const body = await response.text();
    console.log(body);
    res.json(body);
  })();
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
