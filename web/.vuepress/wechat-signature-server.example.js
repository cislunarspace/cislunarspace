/*
  Minimal WeChat JS-SDK signature API example (Node.js + Express).
  Endpoint: GET /api/wechat-signature?url=<encoded-page-url>

  Usage:
  1) npm i express axios
  2) Set env vars:
     WECHAT_APP_ID=your_app_id
     WECHAT_APP_SECRET=your_app_secret
     PORT=3000
  3) node .vuepress/wechat-signature-server.example.js
*/

const express = require("express");
const axios = require("axios");
const crypto = require("crypto");

const app = express();

const APP_ID = process.env.WECHAT_APP_ID;
const APP_SECRET = process.env.WECHAT_APP_SECRET;
const PORT = Number(process.env.PORT || 3000);

if (!APP_ID || !APP_SECRET) {
  console.error("Missing WECHAT_APP_ID or WECHAT_APP_SECRET.");
  process.exit(1);
}

let accessTokenCache = { value: "", expireAt: 0 };
let jsapiTicketCache = { value: "", expireAt: 0 };

function nowSec() {
  return Math.floor(Date.now() / 1000);
}

function nonceStr(len = 16) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < len; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

async function getAccessToken() {
  if (accessTokenCache.value && accessTokenCache.expireAt > nowSec() + 60) {
    return accessTokenCache.value;
  }

  const url = "https://api.weixin.qq.com/cgi-bin/token";
  const { data } = await axios.get(url, {
    params: {
      grant_type: "client_credential",
      appid: APP_ID,
      secret: APP_SECRET,
    },
    timeout: 10000,
  });

  if (!data.access_token) {
    throw new Error(`Failed to get access_token: ${JSON.stringify(data)}`);
  }

  accessTokenCache = {
    value: data.access_token,
    expireAt: nowSec() + Number(data.expires_in || 7200),
  };

  return accessTokenCache.value;
}

async function getJsapiTicket() {
  if (jsapiTicketCache.value && jsapiTicketCache.expireAt > nowSec() + 60) {
    return jsapiTicketCache.value;
  }

  const accessToken = await getAccessToken();
  const url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket";
  const { data } = await axios.get(url, {
    params: {
      access_token: accessToken,
      type: "jsapi",
    },
    timeout: 10000,
  });

  if (data.errcode !== 0 || !data.ticket) {
    throw new Error(`Failed to get jsapi_ticket: ${JSON.stringify(data)}`);
  }

  jsapiTicketCache = {
    value: data.ticket,
    expireAt: nowSec() + Number(data.expires_in || 7200),
  };

  return jsapiTicketCache.value;
}

function signJsSdk({ jsapiTicket, url, nonce, timestamp }) {
  const raw = `jsapi_ticket=${jsapiTicket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`;
  return crypto.createHash("sha1").update(raw).digest("hex");
}

app.get("/api/wechat-signature", async (req, res) => {
  try {
    const pageUrl = String(req.query.url || "").trim();
    if (!pageUrl) {
      return res.status(400).json({ message: "Missing url query parameter." });
    }

    const jsapiTicket = await getJsapiTicket();
    const timestamp = nowSec();
    const nonce = nonceStr();
    const signature = signJsSdk({
      jsapiTicket,
      url: pageUrl,
      nonce,
      timestamp,
    });

    return res.json({
      appId: APP_ID,
      timestamp,
      nonceStr: nonce,
      signature,
    });
  } catch (error) {
    console.error("/api/wechat-signature error", error);
    return res.status(500).json({ message: "Failed to generate WeChat signature." });
  }
});

app.listen(PORT, () => {
  console.log(`WeChat signature server running on http://localhost:${PORT}`);
});
