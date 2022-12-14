# Fonts Usage

This package includes Google fonts "Muli" and "Lato" locally and is GDPR compliant

If you have followed the instructions in the [Starter Guide](/guide) and is using version 0.2.3 or above, the line below already imports both fonts and no further steps are needed.
```js
import 'builderall-vue-ui/src/assets/fonts/fonts.css';
```

If you don't use Builderall Vue UI, there are still 2 options to use Builderall fonts in your project

## Option 1: Installing the package

Install the package and add the import **only the fonts** to your SCSS or JS main file with the line below
```js
import 'builderall-vue-ui/src/assets/fonts/fonts.css';
```

## Option 2: Download zip
Do it yourself! [Download fonts.zip](https://github.com/mauricio-testa/builderall-vue-ui/raw/develop/src/assets/fonts/fonts.zip) with the fonts and just import the file `fonts.css`.


## Additional: You don't use both fonts? 

If you only want to use one of the fonts, import the one you want from its subdirectory.

```css
@import 'node_modules/builderall-vue-ui/src/assets/fonts/lato/lato.css';
/** or **/
@import 'node_modules/builderall-vue-ui/src/assets/fonts/muli/muli.css';
```
