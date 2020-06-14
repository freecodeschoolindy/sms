<template>
  <div>
    <vue-good-table
      :columns="columnData"
      :rows="rowData"
    >
      <template slot-scope="props" slot="table-row">
        <template v-if="props.column.linkOptions">
          <router-link
            v-text="props.formattedRow[props.column.field]"
            :to="{
              name: props.column.linkOptions.routeName,
              params: {
                id: props.row[props.column.linkOptions.idField]
              }
            }"
          />
        </template>
        <template v-else>
          {{ props.formattedRow[props.column.field] }}
        </template>
      </template>
    </vue-good-table>
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
