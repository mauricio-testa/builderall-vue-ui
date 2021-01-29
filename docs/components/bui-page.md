# BUIPage

BUIPage é um componente que predefine os estilos do título e subtítulo da página. Ele deve ser filho de [BUIContainer](/components/bui-container.html)
Por favor, visite a página [Layout](/layout.html) para ver como esses componentes trabalham em conjunto.
Todas as `views` da aplicação devem possuir uma BUIPage como elemento root

## Demo
<Demo componentName="examples-bui-page-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-page-doc.vue
</SourceCode>

## Custom content

### Demo
<Demo componentName="examples-bui-page-doc-slots" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-page-doc-slots.vue
</SourceCode>

## API Reference

### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `title` | `String` | `null` | Título da página |
| `subtitle` | `String` | `null` | Subtítulo da página |


### Slots
| Name | Description |
| -------- | ---- |
| `default` | Conteúdo para exibir dentro do container |
| `page-header-right` | Conteúdo a ser exibido no lado inverso ao título |
| `page-header-left` | Conteúdo a ser exibido no lugar do título e subtítulo |
