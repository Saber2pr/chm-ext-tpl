### My Chrome Extension

内置封装好的postMessage示例，快速开始一个基于postMessage、右键菜单的chrome插件！

```bash
git clone https://github.com/Saber2pr/chm-ext-tpl.git my-chrome-extension
```

#### 说明

1. background.js中不可操作dom，用于chrome界面api的操作，例如创建菜单
2. content.js运行在dom环境中，可当作插入dom执行
3. 利用postMessage可以在background和content之间通信
