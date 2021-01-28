# Getting Started

::: warning
Esta documentação e biblioteca estão em fase de desenvolvimento e os textos ainda não foram revisados e traduzidos completamente.
:::

## Step 1: Install dependencies
Faça a instalação da biblioteca builderall-vue-ui e de suas [Peer Dependencies](https://nodejs.org/es/blog/npm/peer-dependencies/)

```bash
npm i builderall-vue-ui bootstrap-vue vue-select
```

## Step 2: Theming bootstrap

No seu arquivo scss principal (`/src/scss/app.scss`) realize a importação dos seguintes arquivos scss, nesta ordem:

```scss
@import 'node_modules/builderall-vue-ui/src/assets/scss/variables';
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
```

Elas farão com que o bootstrap-vue seja buildado com base nas variáveis do arquivo `variables.scss` do Builderall Vue UI, personalizando as cores, fontes e espaçamentos do Bootstrap com base em padrões da Builderall.

## Step 3: Import libs

No seu arquivo javascript principal (`main.js` ou `app.js`) incluia a importação dos componentes BootstrapVue, BuilderallVueUi, do build personalizado do Bootstrap e do arquivo de estilos do BuilderallVueUi. É importante realizar importar o `builderall-vue-ui.css` por **ÚLTIMO** para que as regras CSS da biblioteca não sejam sobrescritas.

```js
import { BootstrapVue } from 'bootstrap-vue'
import { BuilderallVueUi } from '../../builderall-vue-ui'
import '@/scss/app.scss';
import 'builderall-vue-ui/dist/builderall-vue-ui.css';
```

## Step 3: Build your app!

Adicione o código abaixo no seu arquivo Vue principal e está pronto!

<SourceCode>
<<< @/docs/.vuepress/components/examples/getting-started-doc.vue
</SourceCode>