<template>
  <b-table
    striped
    :items="backups"
    :fields="fields"
  >
    <template #cell(actions)="row">
      <!-- info(row.item, row.index, $event.target) -->
      <bui-icon
        name="trash"
        size="18"
      />
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      backups: [
        { created_at: '2021-02-0209:00:00', note: 'test backup' },
        { created_at: '2021-02-0209:00:00', note: 'test backup' },
        { created_at: '2021-02-0209:00:00', note: 'test backup' }
      ],
      fields: [
        { key: 'created_at', label: 'Created at', sortable: true },
        { key: 'note', label: 'Obs', sortable: true },
        { key: 'actions', label: '' }
      ]
    }
  }
}
</script>