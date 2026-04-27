# 删除技术词典首页来源 — 设计文档

## 目标

从技术词典（glossary）首页的 blockquote 中删除"来源"行，保留作者和网站地址。

## 修改文件

| 文件 | 修改内容 |
|------|----------|
| `web/glossary/README.md` | 删除第 26 行：`> 来源：央视新闻/扬子晚报 (...)` |
| `web/en/glossary/README.md` | 删除第 26 行：`> Source: CCTV News / Yangtze Evening News (...)` |

## 修改前后对比

### 中文

**修改前：**
```
> 本文作者：天疆说 (https://blog.csdn.net/qq_33254264)
> 来源：央视新闻/扬子晚报 (https://finance.sina.com.cn/jjxw/2026-04-24/doc-inhvqfhn3315713.shtml)
> 本站地址：https://cislunarspace.cn
```

**修改后：**
```
> 本文作者：天疆说 (https://blog.csdn.net/qq_33254264)
> 本站地址：https://cislunarspace.cn
```

### 英文

**修改前：**
```
> Author: CislunarSpace (https://gitee.com/cislunarspace)
> Source: CCTV News / Yangtze Evening News (https://finance.sina.com.cn/jjxw/2026-04-24/doc-inhvqfhn3315713.shtml)
> Website: https://cislunarspace.cn
```

**修改后：**
```
> Author: CislunarSpace (https://gitee.com/cislunarspace)
> Website: https://cislunarspace.cn
```

## 验收标准

- 两个文件的"来源"行已删除
- 作者和网站地址行保持不变
- blockquote 格式正确（无多余空行）
