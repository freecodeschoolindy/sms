<template>
  <fieldset class="half">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      v-bind="$attrs"
      :name="id"
      :type="type || 'text'"
      :value="value"
      data-test="baseTextFieldInput"
      @input="$emit('input', $event.target.value)"
      v-on="getListeners"
    />
  </fieldset>
</template>

<script>
export default {
  name: 'BaseTextField',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    }
  },
  computed: {
    getListeners: function () {
      // eslint-disable-next-line no-unused-vars
      const { input, ...others } = this.$listeners;
      return { ...others };
    }
  }
};
</script>
