# BUIIcon
Icon library for Builderall Vue UI. All icons are rendered in svg injected into html and allow customization of colors, rotation and size.

## Demo
<Demo componentName="examples-bui-icon-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-icon-doc.vue
</SourceCode>

## Available icons
<Demo componentName="examples-bui-icon-doc-list" />

## Size & Color

You can customize the size of the icon using the `size` property, in pixels.
<br>
To customize the colors, simply apply the properties css `fill` and `stroke` in the selector `.bui-icon-{name} > svg`.

### Demo
<Demo componentName="examples-bui-icon-doc-sizing" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-icon-doc-sizing.vue
</SourceCode>

Some icons do not have an equal proportion. So sometimes, you may need specific dimensions to correct this and achieve perfect alignment. You can do this with the height and width properties:

<template>
<div class="icons-demo-size">
  <bui-icon name="eye" size="30"></bui-icon>
  <bui-icon name="eye" height="17"></bui-icon>
  <bui-icon name="eye" width="30"></bui-icon>
  <bui-icon name="eye" width="43" height="30"></bui-icon>
</div>
</template>

```html
<bui-icon name="eye" size="30"></bui-icon>
<bui-icon name="eye" height="17"></bui-icon>
<bui-icon name="eye" width="30"></bui-icon>
<bui-icon name="eye" width="43" height="30"></bui-icon>
```

## Rotate

Use the `rotate` property to rotate the icon, in degress

### Demo
<template>
	<bui-icon
		name="arrow-right"
		v-for="r in [0, 90, 180, 270]"
		:key="r"
		:rotate="r"
		class="m-3"
	/>
</template>

### Code
```html
<template>
	<bui-icon
		name="arrow-right"
		v-for="r in [0, 90, 180, 270]"
		:key="r"
		:rotate="r"
		class="m-3"
	/>
</template>
```

::: tip
You can use the `rtl-mirror` property to automatically mirror the icon when the document is in RTL
```html
<bui-icon name="next" rtl-mirror />
```
::: 

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `name` | `String` | `null` | Icon name  |
| `size` | `Number` | `22` | Icon size in px |
| `height` | `Number` | `22` | Icon height in px |
| `width` | `Number` | `22` | Icon width in px |
| `rotate` | `Number` | `0` | Icon rotation |
| `variant` | `String` | `''` | Icon color variant in `'natural', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'white', 'gray'` |
| `rtl-mirror` | `Boolean` | `false` | If `true`, the icon will be mirrored when the document is in RTL | 
