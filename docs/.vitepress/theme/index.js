import DefaultTheme  from "vitepress/theme";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局引入
import mUI from 'imooc-element-components-dang'
import 'imooc-element-components-dang/style.css'

export  default{
    ...DefaultTheme,
    enhanceApp({app}){
        app.use(ElementPlus)
        app.use(mUI)
    }
}