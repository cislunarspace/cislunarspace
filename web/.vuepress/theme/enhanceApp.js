const WECHAT_SDK_SRC = "https://res2.wx.qq.com/open/js/jweixin-1.6.0.js";

let sdkLoadPromise = null;
let configuredUrl = "";

function isWechatBrowser() {
  return /micromessenger/i.test(window.navigator.userAgent || "");
}

function toAbsoluteUrl(input, siteData) {
  if (!input) return "";
  if (/^https?:\/\//i.test(input)) return input;
  const origin = window.location.origin;
  const base = siteData.base || "/";
  const normalized = input.startsWith("/") ? input : `${base}${input}`;
  return new URL(normalized, origin).toString();
}

function loadWechatSdk() {
  if (window.wx) return Promise.resolve(window.wx);
  if (sdkLoadPromise) return sdkLoadPromise;

  sdkLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = WECHAT_SDK_SRC;
    script.async = true;
    script.onload = () => resolve(window.wx);
    script.onerror = () => reject(new Error("Failed to load WeChat JS-SDK."));
    document.head.appendChild(script);
  });

  return sdkLoadPromise;
}

function findPageByPath(siteData, path) {
  if (!siteData.pages) return null;
  return (
    siteData.pages.find((page) => page.path === path) ||
    siteData.pages.find((page) => page.regularPath === path) ||
    null
  );
}

function normalizeSignaturePayload(payload) {
  const data = payload && payload.data ? payload.data : payload;
  if (!data) return null;

  const appId = data.appId || data.appid;
  const timestamp = Number(data.timestamp);
  const nonceStr = data.nonceStr || data.noncestr;
  const signature = data.signature;

  if (!appId || !timestamp || !nonceStr || !signature) return null;

  return {
    appId,
    timestamp,
    nonceStr,
    signature,
  };
}

function getShareMeta(siteData, route) {
  const page = findPageByPath(siteData, route.path) || {};
  const fm = page.frontmatter || {};
  const siteShare = (siteData.themeConfig && siteData.themeConfig.wechatShare) || {};
  const pageShare = fm.wechatShare || {};

  const title =
    pageShare.title ||
    fm.shareTitle ||
    fm.title ||
    page.title ||
    siteShare.defaultTitle ||
    siteData.title ||
    document.title;

  const desc =
    pageShare.desc ||
    fm.shareDesc ||
    fm.description ||
    page.description ||
    siteShare.defaultDesc ||
    siteData.description ||
    "";

  const image =
    pageShare.image ||
    fm.shareImage ||
    fm.image ||
    siteShare.defaultImage ||
    "/logo.png";

  return {
    title,
    desc,
    imgUrl: toAbsoluteUrl(image, siteData),
    link: window.location.href.split("#")[0],
  };
}

function wxReady(wx) {
  return new Promise((resolve, reject) => {
    wx.ready(() => resolve());
    wx.error((err) => reject(err));
  });
}

async function configureWechatShare(siteData, route) {
  const shareConfig = (siteData.themeConfig && siteData.themeConfig.wechatShare) || {};
  if (!shareConfig.enabled || !shareConfig.signatureEndpoint) return;
  if (!isWechatBrowser()) return;

  const currentUrl = window.location.href.split("#")[0];
  const wx = await loadWechatSdk();

  if (!wx) return;

  if (configuredUrl !== currentUrl) {
    const endpointUrl = `${shareConfig.signatureEndpoint}?url=${encodeURIComponent(currentUrl)}`;
    const response = await fetch(endpointUrl, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Signature API failed with status ${response.status}`);
    }

    const signatureData = normalizeSignaturePayload(await response.json());
    if (!signatureData) {
      throw new Error("Signature API response is missing required fields.");
    }

    wx.config({
      debug: false,
      appId: signatureData.appId,
      timestamp: signatureData.timestamp,
      nonceStr: signatureData.nonceStr,
      signature: signatureData.signature,
      jsApiList: [
        "updateAppMessageShareData",
        "updateTimelineShareData",
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
      ],
    });

    await wxReady(wx);
    configuredUrl = currentUrl;
  }

  const meta = getShareMeta(siteData, route);

  if (typeof wx.updateAppMessageShareData === "function") {
    wx.updateAppMessageShareData(meta);
  }
  if (typeof wx.updateTimelineShareData === "function") {
    wx.updateTimelineShareData({
      title: meta.title,
      link: meta.link,
      imgUrl: meta.imgUrl,
    });
  }

  // Fallback for old WeChat clients.
  if (typeof wx.onMenuShareAppMessage === "function") {
    wx.onMenuShareAppMessage(meta);
  }
  if (typeof wx.onMenuShareTimeline === "function") {
    wx.onMenuShareTimeline({
      title: meta.title,
      link: meta.link,
      imgUrl: meta.imgUrl,
    });
  }
}

export default ({ router, siteData, isServer }) => {
  if (isServer) return;

  const syncShare = async () => {
    try {
      await configureWechatShare(siteData, router.currentRoute);
    } catch (error) {
      // Keep runtime resilient even if JS-SDK initialization fails.
      console.warn("[wechat-share]", error);
    }
  };

  router.onReady(() => {
    syncShare();
    router.afterEach(() => {
      setTimeout(syncShare, 0);
    });
  });
};
