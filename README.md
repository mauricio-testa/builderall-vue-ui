## Documentation

To check out docs, visit [https://5ffdff0863739400fc1c2f0a--musing-elion-9259e0.netlify.app/](https://5ffdff0863739400fc1c2f0a--musing-elion-9259e0.netlify.app/)

## Getting Started

``` bash
npm i builderall-vue-ui
```

Add to your `app.js`:

``` javascript
import 'builderall-vue-ui/dist/builderall-vue-ui.css';
import BuilderallVueUi from 'builderall-vue-ui'
Vue.use(BuilderallVueUi)
```

> Note: Add the import of css exclusively in app.js so that the styles of the components overwrite those of the bootstrap-vue 

---

## Project setup
``` bash
npm install
npm run docs:dev
```

### Build docs
``` bash
npm run docs:build
```