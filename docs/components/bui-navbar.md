# BUINavbar

Cabeçalho da aplicação e popup de perfil do usuário.

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-navbar-doc.vue
</SourceCode>

@todo colocar um exemplo do jsfiddle futuramente

## All options
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-navbar-complete-doc.vue
</SourceCode>

## API Reference

### Events
| Name | Args | Description |
| -------- | ---- | ------- | ----------- |
| `toggle-sidebar` | O novo estado do sidebar (Ex: `'expanded'`, `'mini'`, `'disabled'`) | Evento emitido ao clicar no menu hamburger pra fazer o toggle do sidebar. Ouvir este evento para setar o estado do sidebar no [Vuex](https://vuex.vuejs.org/) e/ou [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage) |
| `change-language` | Idioma selecionado (Ex: `en_US`) |  Evento emitido ao alterar idioma no dropdown. Após isso, o novo idioma deve ser salvo e a página recarregada |
| `logout` | | Emitido ao clicar no botão de logout |


### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `user` | `Object` | `{name: 'The user name',email: 'mail@builderall.com', gravatar: '...', locale: 'pt_BR'}` | Dados do usuário logado. Um objeto que deve obrigatoriamente possuir as chaves `name`, `email`, `gravatar`, `locale`  |
| `rtl` | `Boolean` | `false` | Se a aplicação está em RTL ou não |
| `sidebar-state` | `String` | `'expanded'` | Estado do sidebar. Utilizado para exibir o menu hamburguer aberto ou fechado. Possíveis valores: `'expanded'`, `'mini'`, `'disabled'` |
| `logo` | `String` | `null` | Logo da aplicação |
| `logo-sm` | `String` | `null` | Logo da aplicação para exibir no mobile |
| `label-favorite-lang` | `Number` | `'Your favorite lang'` | Label idioma preferido no popup do usuário|
| `label-logout` | `Number` | `'Logout'` | Label logout no popup do usuário |
| `home-link` | `Number` | `'/'` | Link da home da aplicação ao clicar no logo |
| `languages` | `Number` | Um array de idiomas `[{key: 'pt_BR', desc: 'Português (Brasil)'}, ...]` | Lista de idiomas disponíveis. Você pode personalizar essa lista para disponibilizar somente idiomas que possuem traduções no select. Todo idioma deve possuir uma `key` e um `desc` |

### Slots
| Name | Description |
| -------- | ---- | ------- | ----------- |
| `dropdown-item-before` | Espaço antes do select de idiomas para itens personalizados |
| `dropdown-item-after` | Espaço depois do select de idiomas para itens personalizados |
