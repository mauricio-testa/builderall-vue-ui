<template>
  <b-card>
    <!-- Text inputs -->
    <bui-form-group
      label="Label with help"
      help="Help text"
    >
      <b-form-input
        type="text"
        value="Form input"
      />
    </bui-form-group>

    <bui-form-group
      label="Input error"
      error="error text"
    >
      <b-form-input
        type="text"
        value="Form input error"
      />
    </bui-form-group>

    <bui-form-group
      label="Textarea"
      help="Help text"
    >
      <b-form-textarea
        required
        value="Textarea"
        rows="3"
      />
    </bui-form-group>

    <bui-form-group
      label="Textarea error"
      error="Wrong!"
      help="Help text"
    >
      <b-form-textarea
        required
        value="Textarea"
        rows="3"
      />
    </bui-form-group>

    <bui-form-group label="Search">
      <b-form-input type="search" />
    </bui-form-group>

    <bui-form-group
      class="my-3"
      label="Big input"
    >
      <b-input
        size="xl"
        placeholder="aksdj"
      />
    </bui-form-group>

    <!-- Select -->
    <bui-form-group label="Select">
      <b-form-select :options="['one', 'two']" />
    </bui-form-group>

    <bui-form-group
      label="Select complete"
      help="I need help"
      required
      error="Error!"
    >
      <b-form-select :options="['one', 'two']" />
    </bui-form-group>

    <!-- Checkbox -->
    <bui-form-group
      label="Switches"
      required
      help="oi!!!!"
    >
      <b-form-checkbox
        switch
        :checked="true"
      >
        <label> Switch </label>
      </b-form-checkbox>
      <b-form-checkbox
        switch
        class="bui-switch-success"
        :checked="true"
      >
        <label> Switch </label>
      </b-form-checkbox>
    </bui-form-group>

    <bui-form-group>
      <b-form-checkbox
        class="bui-checkbox-rounded"
        :checked="true"
      >
        <label> Checkbox rounded </label>
      </b-form-checkbox>
    </bui-form-group>

    <b-form-checkbox
      id="boxed"
      class="bui-checkbox-boxed bui-checkbox-rounded my-3"
      size="lg"
      :checked="true"
    >
      <label for="boxed">Checkbox boxed e rounded</label>
      <bui-icon
        v-b-tooltip.hover="'Tooltipzão'"
        name="info"
        :size="18"
      />
    </b-form-checkbox>

    <!-- radio -->
    <bui-form-group
      label="Radios"
      help="I need help"
      required
    >
      <b-form-radio-group
        :options="['one', 'two']"
        name="radio-options"
      />
    </bui-form-group>

    <bui-form-group label="Radio box">
      <b-form-radio-group
        :options="['Radio 1','Radio 2']"
        class="bui-radiogroup-box"
      />
    </bui-form-group>

    <!-- date time picker -->
    <bui-form-group label="Date">
      <b-form-datepicker />
    </bui-form-group>

    <bui-form-group label="Hour">
      <b-form-timepicker minutes-step="5" />
    </bui-form-group>
  </b-card>
</template>
