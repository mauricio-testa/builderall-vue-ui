# BUILanguageSelector

A simple language selector with little flags.

## Demo
<Demo componentName="examples-bui-language-selector-doc" />

## Code
``` html
<bui-language-selector v-model="lang"/>
```

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `value` *v-model* | `String` | `null` | Selected language |
| `options` | `Number` | An array of languages `[{key: 'pt_BR', desc: 'Português (Brasil)'}, ...]` | Every language must have a `key` and a` desc` |
