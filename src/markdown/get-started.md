# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "bobo-ui";
import 'bobo-ui/dist/lib/gulu.css';
```

就可以使用我提供的组件了。

[注意]：后续组件列表中，查看代码中的import在实际使用中都需要改成上述代码。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "bobo-ui";
import 'bobo-ui/dist/lib/gulu.css';
export default {
  components: {Button}
}
</script>
```

下一节：[Switch组件](#/doc/switch)