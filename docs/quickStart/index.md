## 快速上手
因为我们当前组件库是基于`element-plus`二次封装的，所有项目当中必须确保已经安装和正确使用`element-plus`。[element-plus安装指南]([安装 | Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/guide/installation.html#使用包管理器))

```javascript
npm i -D element-plus @element-plus/icons-vue
```



## 使用指南

1. 在项目目录里安装`imooc-element-components-dang`

   ```javascript
   // npm 安装
   npm i -S imooc-element-components-dang
   ```

2. 全局引入组件库

   在`main.ts`文件中写入以下代码：

   ```javascript
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
   ```

3. 按需引入

   在`main.ts`文件中写入以下代码：

   ```javascript
   import DefaultTheme  from "vitepress/theme";
   import ElementPlus from 'element-plus'
   import 'element-plus/dist/index.css'
   
   // 按需引入chooseIcon组件
   import chooseIcon from 'imooc-element-components-dang/chooseIcon'
   import 'imooc-element-components-dang/chooseIcon/style.css'
   
   export  default{
       ...DefaultTheme,
       enhanceApp({app}){
           app.use(ElementPlus)
           app.use(chooseIcon)
       }
   }
   ```

   

4. 使用

   具体用法参照以下文档具体使用方式。