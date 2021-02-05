# BUINavbar

Top header and popup component of the user profile. Contains the button that changes the status of the sidebar and also the language change field of the application.

## Demo
<Demo componentName="examples-bui-navbar-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-navbar-doc.vue
</SourceCode>

## Full example

### Demo
<Demo componentName="examples-bui-navbar-complete-doc" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-navbar-complete-doc.vue
</SourceCode>

## API Reference

### Events
| Name | Args | Description |
| -------- | ---- | ------- | ----------- |
| `toggle-sidebar` | The new state of the sidebar (possible values: `'expanded'`, `'mini'`, `'disabled'`) | Event emitted when clicking on the hamburger menu. You must listen to this event to change the `sidebar-state` value |
| `change-language` | Selected language (Ex: `en_US`) |  Event emitted when changing language at dropdown. After that, the new language must be saved and the page reloaded |
| `logout` | | Issued when clicked on the Logout button |


### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `user` | `Object` | `{name: 'The user name',email: 'mail@builderall.com', gravatar: '...', locale: 'pt_BR'}` | Object referring to the logged user data. He must have the keys `name`, `email`, `gravatar`, `locale`  |
| `sidebar-state` | `String` | `'expanded'` | Sidebar state. Used to display the open or closed hamburger menu (possible values: `'expanded'`, `'mini'`, `'disabled'`) |
| `logo` | `String` | `null` | Application logo URL |
| `logo-sm` | `String` | `null` | Application logo URL on mobile |
| `label-favorite-lang` | `Number` | `'Your favorite lang'` | "Preferred language" label in the user's popup |
| `label-logout` | `String` | `'Logout'` | Label "logout" in the user's popup |
| `home-link` | `String` | `'/'` | Application home link when clicking on the logo |
| `languages` | `Array` | An array of languages `[{key: 'pt_BR', desc: 'Português (Brasil)'}, ...]` | List of available languages. You can customize this list to provide only languages that have translations. Every language must have a `key` and a `desc` |

### Slots
| Name | Description |
| -------- | ---- | ------- | ----------- |
| `items-right` | Space for icons in the header |
| `dropdown-item-before` | Space for dropdown items before language selector |
| `dropdown-item-after` | Space for dropdown items after language selector |
