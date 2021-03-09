<template>
  <div>
    <b-row class="bui-card-container">
      <b-col
        v-for="i in 6"
        :key="i"
        sm="12"
        md="6"
        lg="6"
      >
        <b-card
          no-body
          class="bui-card-item"
        >
          <template #header>
            <b-card-title>Card Title</b-card-title>
          </template>

          <b-card-body> Card content</b-card-body>

          <b-card-footer>
            <b-button variant="secondary">
              Admin
            </b-button>
            <div class="card-footer-right">
              <span>Infos here</span>
              <b-dropdown
                no-caret
                left
                dropleft
                lazy
                variant="link"
                :popper-opts="{ positionFixed: true, eventsEnabled: true }"
                toggle-class="text-decoration-none p-0"
              >
                <template #button-content>
                  <bui-icon
                    name="three-dots-vertical"
                    :size="13"
                  />
                </template>

                <b-dropdown-item>
                  <bui-icon
                    name="gear"
                    :size="20"
                  />
                  <span> Manage </span>
                </b-dropdown-item>
                <b-dropdown-item>
                  <bui-icon
                    name="pencil"
                    :size="20"
                  />
                  <span> Rename </span>
                </b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>
                  <bui-icon
                    name="trash"
                    :size="20"
                  />
                  <span> Delete </span>
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
