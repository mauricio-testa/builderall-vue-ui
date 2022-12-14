# Getting Started


## Step 1: Install dependencies

```bash
npm i builderall-vue-ui bootstrap-vue
```

## Step 2: Theming bootstrap

In your main sass file (`/src/sass/app.scss`) perform the import of the following scss files, in this order:

```scss
@import 'node_modules/builderall-vue-ui/src/assets/fonts/fonts.css';
@import 'node_modules/builderall-vue-ui/src/assets/scss/variables.scss';
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
```

They will cause the bootstrap-vue to be built based on the variables in the `builderall-vue-ui/src/assets/scss/variables.scss` file, customizing Bootstrap colors, fonts and spacing based on Builderall standards.

## Step 3: Import libs

In your main javascript file (`main.js` or` app.js`) import the libraries, style sheets and tell Vue to use them. In this order.

```js
import { BootstrapVue } from 'bootstrap-vue';
import { BuilderallVueUi } from 'builderall-vue-ui';
import '@/sass/app.scss'; // (the same file as in step 2)
import 'builderall-vue-ui/dist/builderall-vue-ui.css';
Vue.use(BootstrapVue);
Vue.use(BuilderallVueUi);
```
::: tip
If you are using Laravel Mix to compile Sass, you may have already imported the `app.scss` inside of `webpack.mix.js`. In this case, importing into `app.js` is not necessary.
:::

## Step 4: Build your app!

Add the code below to your main Vue file and all will be working!

<SourceCode>
<<< @/docs/.vuepress/components/examples/getting-started-doc.vue
</SourceCode>