import type { WechatSdk } from '../utils/types'

const WECHAT_SDK_SRC = 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js'
let sdkLoadPromise: Promise<WechatSdk> | null = null

export function isWechatBrowser() {
  return /micromessenger/i.test(window.navigator.userAgent || '')
}

function getWxSdk(): WechatSdk | undefined {
  return (window as unknown as { wx?: WechatSdk }).wx
}

export function loadWechatSdk() {
  const wx = getWxSdk()
  if (wx) return Promise.resolve(wx)
  if (sdkLoadPromise) return sdkLoadPromise
  sdkLoadPromise = new Promise<WechatSdk>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = WECHAT_SDK_SRC
    script.async = true
    script.onload = () => {
      const sdk = getWxSdk()
      if (sdk) resolve(sdk)
      else reject(new Error('WeChat JS-SDK loaded but wx is undefined.'))
    }
    script.onerror = () => reject(new Error('Failed to load WeChat JS-SDK.'))
    document.head.appendChild(script)
  })
  return sdkLoadPromise
}
