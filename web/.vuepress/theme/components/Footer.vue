<template>
    <main class="footer">
        <div v-for="(item, index) in footerList" :key="index" class="footer-item">
            <a :href="item.href" target="_blank" rel="noopener noreferrer">
                <img v-if="item.icon" :src="item.icon" alt="icon" class="item-icon" />
                <span class="item-text">{{ item.label }}</span>
            </a>
        </div>
    <div class="footer-item mobile-share">
      <button type="button" class="share-link-btn" @click="shareToWechatLink">
        微信分享链接
      </button>
    </div>
        <div class="copy-right">
           <span class="name">{{`${currentYear} 地月空间入门指南 &nbsp; |  &nbsp; `}} </span>
            <a :href="government.href" target="_blank" rel="noreferrer" >
              {{government.name}}
            </a>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            footerList: [],
            government: {},
            currentYear : ''
        }
    },

  props: ['sidebarItems'],
  mounted() {
    this.footerList = this.$site.themeConfig.footer.friendLinks
    this.government = this.$site.themeConfig.footer.copyright
    this.currentYear =  new Date().getFullYear()
  },

  methods: {
    isWechatBrowser () {
      return /micromessenger/i.test(window.navigator.userAgent)
    },

    async copyCurrentLink () {
      const url = window.location.href
      if (window.navigator.clipboard && window.isSecureContext) {
        await window.navigator.clipboard.writeText(url)
        return
      }

      const textarea = document.createElement('textarea')
      textarea.value = url
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    },

    async shareToWechatLink () {
      const shareData = {
        title: document.title,
        text: document.title,
        url: window.location.href,
      }

      // In WeChat browser, users must use the top-right menu to share.
      if (this.isWechatBrowser()) {
        await this.copyCurrentLink()
        window.alert('已复制当前链接。请点击右上角“...”并选择“发送给朋友”进行微信分享。')
        return
      }

      if (window.navigator.share) {
        try {
          await window.navigator.share(shareData)
          return
        } catch (error) {
          // Ignore user-cancel and fall back to copy link.
        }
      }

      await this.copyCurrentLink()
      window.alert('已复制当前链接，请粘贴到微信发送给好友。')
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
//@media (max-width: $MQMobile)
//  .footer-item a
//    margin-right 0 !important
.footer
  padding 2rem 0
  display flex
  justify-content center
  background-color #f0f2f5
  flex-wrap wrap
.footer-item
  padding 0 1rem
.footer-item a
    display inline-flex
    justify-content center
    align-items center
    color #85858a
.mobile-share
  display none
.share-link-btn
  border 1px solid #c7ccd1
  background-color #fff
  color #2f3a45
  border-radius 6px
  padding 0.3rem 0.8rem
  cursor pointer
  font-size 0.9rem
.share-link-btn:hover
  background-color #f7f9fb

.item-icon
  width 1.4rem
  height 1.4rem
  margin-right 0.4rem
.copy-right
    width 100vw
    display flex
    justify-content center
    margin-top 1rem
    color #85858a
.copy-right .name
    margin-right 0.4rem

@media (max-width: $MQMobile)
  .mobile-share
    display block
</style>
