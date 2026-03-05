// .vuepress/theme/index.js
const path = require('path')

module.exports = {
    extend: '@vuepress/theme-default',
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceApp.js')
    ]
}
