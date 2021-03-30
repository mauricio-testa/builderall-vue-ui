<template>
  <b-card
    no-body
    class="bui-card-collapse site-details-content"
  >
    <b-card-header
      v-b-toggle.collapse-1
      class="justify-content-between"
    >
      Site Manage
      <div class="d-flex align-items-center">
        <b-button
          variant="success"
          @click.stop
        >
          <bui-icon
            name="save"
            variant="white"
            size="18"
          />
          Save
        </b-button>
        <bui-icon
          name="arrow-right"
          :rotate="270"
          size="12"
          class="ml-ltr-3 mr-rtl-3"
        />
      </div>
    </b-card-header>
    <b-collapse
      id="collapse-1"
      class="mt-2"
      visible
    >
      <b-card-body>
        <b-card-text>
          Hello!
        </b-card-text>
      </b-card-body>
      <b-card-footer class="justify-content-end">
        <b-button variant="success">
          <bui-icon
            name="save"
            variant="white"
            size="18"
          />
          Save
        </b-button>
      </b-card-footer>
    </b-collapse>
  </b-card>
</template>
