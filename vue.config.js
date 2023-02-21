const {defineConfig} = require('@vue/cli-service')
const path = require('path')
const coverPath = path.join(__dirname + '/src/assets/cover.less')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        }
    },
    // lintOnSave: false, // 关闭语法检查
    // 开启一个代理服务器 (方式一)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    // 开启一个代理服务器 (方式二)
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:5000',
    //             pathRewrite: {'^/api': ''},
    //             // ws: true,  // 用于支持websocket
    //             // changeOrigin: true  // 用于控制请求头中的host值
    //         },
    //         '/demo': {
    //             target: 'http://localhost:5001',
    //             pathRewrite: {'^/demo': ''},
    //             // ws: true,  // 用于支持websocket
    //             // changeOrigin: true  // 用于控制请求头中的host值
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量(实际开发不适用)
                        // 'nav-bar-background-color': '#007bff',
                        // 'nav-bar-title-text-color': '#fff',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        // 从盘符开始的路径，叫做绝对路径 C:\\Users\
                        hack: `true; @import "${coverPath}";`,
                    },
                },
            },
        },
    },
})
