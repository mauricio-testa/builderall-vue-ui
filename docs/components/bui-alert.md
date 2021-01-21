# BUIAlert

Alerta utilizado para dar contexto á página. 
Clicando no primeiro botão, o alerta é ocultado e é gravado uma chave em localStorage indicando que aquele ele 
não deve ser mostrado novamente nas próximas vezes que o componente for montado.
Clicando no segundo botão o alerta é apenas ocultado.

::: warning
A propriedade `index` é obrigatória e deve ser única em toda sua aplicação.
Ela sera concatenada com `bui_store_alert` antes de ser gravada em localStorage
:::

## Demo
<Demo componentName="examples-bui-alert-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-alert-doc.vue
</SourceCode>

## Custom buttons & title
Defina um título para o alerta e customize o texto dos botões através das propriedades `title`, `label-hide` e `label-no-show-again`

### Demo
<Demo componentName="examples-bui-alert-doc-complete"></Demo>

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-alert-doc-complete.vue
</SourceCode>

## Hide Buttons
Você pode ocultar os botões que removem o alerta da tela, definindo as propriedades `label-hide` e `label-no-show-again` como `false`

### Demo
<Demo componentName="examples-bui-alert-doc-hide-buttons" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-alert-doc-hide-buttons.vue
</SourceCode>

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `index` | `String` | `null` | Chave para guardar em localStorage se "Não mostrar novamente" foi clicado |
| `title` | `String` | `null` | Título do alert |
| `content` | `String` | `null` | Conteúdo do alerta |
| `label-hide` | `{String|Boolean}` | `'Close'` | Label para o botão de esconder. Defina como `false` para esconder |
| `label-no-show-again` | `{String|Boolean}` | `'No show again'` | Label para o botão de desaparecer definitivamente. Defina como `false` para esconder