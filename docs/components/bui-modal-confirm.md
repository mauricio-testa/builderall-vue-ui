# BUIModalConfirm

Modal de confirmação genérico

## Demo
<Demo componentName="examples-bui-modal-confirm-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-modal-confirm-doc.vue
</SourceCode>

## Como usar
Você deve adicionar um `<bui-modal-confirm ref="modal"></bui-modal-confirm>` ao seu aplicativo e definir um ref para ele.
Após isso é só abri-lo utilizando `this.$refs.modal.show({})` enviando as opções desejadas como parâmetro.

### Opções disponíveis:
| Key | Default | Description |
| -------- | ---- | ------- | 
| `title` | `'Title'` | Título do modal |
| `message` | `null` | Mensagem exibida no modal. Se configurado slot, não será exibida |
| `okVariant` | `'primary'` | Variação do botão de confirmar |
| `okTitle` | `'Ok'` | Texto do botão confirmar |
| `cancelVariant` | `'default'` | Variação do botão de cancelar |
| `cancelTitle` | `'Cancel'` | Texto do botão cancelar |
| `iconName` | `null` | Nome do ícone que aparece ao lado do botão confirmar |
| `data` | `{}` | Dados necessários para executar callbacks. Essa mesma variável será enviada por parâmetro nas funções `onSuccess` e `onCancel` |
| `onSuccess` | `(data) => ({})` | Callback executado ao confirmar |
| `onCancel` | `(data) => ({})` | Callback executado ao cancelar |
## Slot

### Demo
<Demo componentName="examples-bui-modal-confirm-slot-doc" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-modal-confirm-slot-doc.vue
</SourceCode>

## API Reference


### Slots
| Name | Description |
| -------- | ---- | ------- | ----------- |
| `default` | Slot padrão do conteúdo. Se informado. `options.description` não terá efeito |