---
title: useClipboard
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
---

# useClipboard

A React hook for copying text to the clipboard.

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 自定义 DOM

<code src="./demo/demo2.tsx" />

### 支持多个 DOM 对象

<code src="./demo/demo3.tsx" />

### 监听其它事件

<code src="./demo/demo4.tsx" />

## API

```ts
const { copied, copy, reset } = useClipboard(
  '需要复制到粘贴板的文本'
)
```

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| onClickAway | 触发事件的函数  | `(event) => void` | -      |
| target | DOM 节点或者 Ref 对象，支持数组 | `Target` \| `Target[]` | - |
| eventName | 指定需要监听的事件 | `string` | `click` |
