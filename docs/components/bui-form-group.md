# BUIIFormGroup

Maneira mais fácil de se construir formulário:
Fornece áreas para label, texto de ajuda, indicador de campo obrigatório, componente para mensagem de erro e contador de caracteres

## Demo
<Demo componentName="examples-bui-form-group-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-form-group-doc.vue
</SourceCode>

## Sandbox

<Demo componentName="examples-bui-form-group-sandbox-doc" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-form-group-sandbox-doc.vue
</SourceCode>

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `label` | `String` | `undefined` | Label do campo |
| `help` | `String` | `undefined` | Texto de ajuda que aparece no tooltip |
| `required` | `Boolean` | `false` | Se é required. Se for aparece o * no campo |
| `error` | `String` | `''` | Erro relacionado ao campo. Se informado, o campo obtém contexto de erro |
| `max-chars` | `Number` | `null` | Número máximo de caracteres do campo. Se o campo está com erro ele não é exibido |
| `value` | `{Number, Object, String}` | `undefined` | Valor para comparar com número máximo de caracteres |

### Slots
| Name | Description |
| -------- | ---- |
| `default` | Slot para o input |
