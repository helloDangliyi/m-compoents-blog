//配置
module.exports= {
    // 网站标题
    title:'基于element-plus二次封装组件',
    // 部署的基础路径
    base:'/m-compoents-blog/',
    // 配置网站的头部
    head:[],
    // 主题配色
    themeConfig:{
        // 头部导航
        nav:[
            {
                // 导航名称
                text:'首页',
                // 跳转项目的路由
                link:'/'
            },
            {
                // 导航名称
                text:'介绍',
                // 跳转项目的路由
                link:'/intro/'
            },
            {
                // 导航名称
                text:'Github站点',
                // 跳转项目的路由:下面的页面并没有显示成功
                link:'https://hellodangliyi.github.io/imooc-element-components-web/',
                target:'_blank'
            },
            {
                // 导航名称
                text:'Gieet站点',
                // 跳转项目的路由:下面的页面并没有显示成功
                link:'https://hellodangliyi.github.io/imooc-element-components-web/',
                target:'_blank'
            },
        ],
        // 侧边导航
        sidebar:[
            {
                text:'介绍',
                link:'/intro/',
            },
            {
                text:'快速上手',
                link:'/quickStart/',
            },
            {
                text:'图标选择器',
                link:'/chooseIcon/',
            },
            {
                text:'省市区选择',
                link:'/chooseArea/',
            },

        ]
    }
}