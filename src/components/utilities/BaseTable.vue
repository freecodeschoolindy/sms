<template>
  <div>
    <vue-good-table
      :columns="columnData"
      :rows="rowData"
    />
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'BaseTable',
  components: {
    VueGoodTable
  },
  props: {
    columnData: {
      type: Array,
      default: function () {
        return [];
      }
    },
    rowData: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data: function () {
    return {
    };
  },
  methods: {},
  computed: {}
};
</script>
