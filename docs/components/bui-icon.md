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

## Dark

Set the `white` property to have the icon contrast to dark backgrounds.

### Demo
<Demo componentName="examples-bui-icon-doc-dark" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-icon-doc-dark.vue
</SourceCode>

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `name` | `String` | `null` | Icon name  |
| `size` | `Number` | `22` | Icon size in px |
| `white` | `Boolean` | `false` | Used to make the icon white and display above a dark background |
| `rotate` | `Number` | `0` | Icon rotation