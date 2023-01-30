// npm install node-fetch
// npm install https-proxy-agent

const fetch = require("node-fetch");
const HttpsProxyAgent = require("https-proxy-agent");

var myHeaders = new Headers();
myHeaders.append("Host", " api.geodoge.com");
myHeaders.append("Connection", " keep-alive");
myHeaders.append("Content-Length", " 15");
myHeaders.append(
  "sec-ch-ua",
  ' "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"'
);
myHeaders.append("DNT", " 1");
myHeaders.append("sec-ch-ua-mobile", " ?0");
myHeaders.append(
  "User-Agent",
  " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
);
myHeaders.append("Content-Type", " application/x-www-form-urlencoded");
myHeaders.append("Lang", " en-us");
myHeaders.append("token", "7ef48b12-6671-44b7-89ae-600885eb0697");
myHeaders.append("sec-ch-ua-platform", ' "Windows"');
myHeaders.append("Accept", " */*");
myHeaders.append("Origin", " https://www.amzdoge.com");
myHeaders.append("Sec-Fetch-Site", " cross-site");
myHeaders.append("Sec-Fetch-Mode", " cors");
myHeaders.append("Sec-Fetch-Dest", " empty");
myHeaders.append("Referer", " https://www.amzdoge.com/");
myHeaders.append("Accept-Encoding", " gzip, deflate, br");
myHeaders.append("Accept-Language", " en-US,en;q=0.9,pt;q=0.8");
myHeaders.append(
  "Cookie",
  "aliyungf_tc=ca58e39959ea41c18df09aed477bbc7b93c3af6dc0814212af16429b5bc69b7b"
);

(async () => {
  const response = await fetch("https://api.geodoge.com/api/order/speedup", {
    method: "POST",
    headers: myHeaders,
    body: "orderid=" + 1141788,
  });
  const body = await response.text();
  console.log(body);
})();
