# BUINotifications

BuiNotifications is a sidebar that displays system notifications on the side opposite the main sidebar. It provides a standard layout for displaying notifications and emits events so that you can code your own "read" and "readAll" methods

## Demo
<Demo componentName="examples-bui-notifications-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-notifications-doc.vue
</SourceCode>

## Complete example

### Demo
<Demo componentName="examples-bui-notifications-doc-complete" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-notifications-doc-complete.vue
</SourceCode>

## API Reference

### Events
| Name | Args | Description |
| -------- | ---- | ------- | 
| `hidden` |  | When the sidebar is hidding |
| `shown` |  | When the sidebar is showing. You can fetch the notifications at this event if you want |
| `read` | Notification object | When a notification was clicked. When this happens you must inform the microservice that that notification has been read and, if you have an action, execute it |
| `readAll` |  | Command to mark all notifications as read |


### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `notifications` | `Array` | `[]` | An array of notification objects, where each notification must contain `_id`,` read`, `message`,` description` and `createdAt` |
| `label-notifications` | `String` | `'Notifications'` | Label for sidebar title |
| `label-empty` | `String` | `'Empty'` | Label to show when don't have notifications |
| `label-read-all` | `String` | `Mark all as read` | Label to "mark all as read" action |
| `label-view-all` | `String` | `'View All'` | Label to "view all" action  |
| `loading` | `Boolean` | `false` | If true, a `b-spinner` will be displayed while searching for notifications |
| `id` | `String` | `bui-notifications` | Sidebar ID. It is based on this ID that you must configure the sidebar's opening directive. For example, if the ID is `xpto-notifications`, for you to open the sidebar you must use` v-b-toggle.xpto-notifications` |


### Slots
| Name | Description |
| -------- | ---- | 
| `empty` | Content to display when there are no notifications |
| `notification-date` | Slot for notification dates. This is where you must enter your own date formatting. |