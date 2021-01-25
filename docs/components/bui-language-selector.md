# BUILanguageSelector

Seletor de idioma

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
| `value` (v-model) | `String` | `null` | Selected language |
| `rtl` | `Boolean` | `false` | Se a aplicação está em RTL ou não |
| `options` | `Number` | Um array de idiomas `[{key: 'pt_BR', desc: 'Português (Brasil)'}, ...]` | Lista de idiomas disponíveis Todo idioma deve possuir uma `key` e um `desc` |
