## 图标选择器
用户点击按钮，弹出框显示所有图标，点击图标可以复制图标代码

### 按需引入

```javascript
// main.ts 按需引入chooseIcon组件
import chooseIcon from 'imooc-element-components-dang/chooseIcon'
import 'imooc-element-components-dang/chooseIcon/style.css'


app.use(chooseIcon)
```

### 基本用法
<br>
  <div>
    <m-choose-icon v-model:visible="visible" title="选择图标">选择图标</m-choose-icon>
  </div>

### 代码示例
<script setup>
import {ref} from "vue"
let visible = ref(false)
</script>
```vue
<template>
<m-choose-icon v-model:visible="visible" title="选择图标">选择图标</m-choose-icon>
</template>

<script setup>
import {ref} from "vue"
let visible = ref(false)
</script>
```

