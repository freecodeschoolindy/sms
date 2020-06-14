<template>
  <div>
    <h1>Users</h1>
    <base-table
      :columnData="columnData"
      :rowData="formattedUsers"
    />
  </div>
</template>

<script>
import BaseTable from '@/components/utilities/BaseTable.vue';

export default {
  name: 'Users',
  components: {
    BaseTable
  },
  data: function () {
    return {
      users: [],
      columnData: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Group',
          field: 'group'
        }
      ]
    };
  },
  methods: {
    getData: async function () {
      this.users = await this.generateDummyData();
    },
    generateDummyData: function () {
      let users = [];

      for (let i = 0; i < 100; i++) {
        let firstName = 'Jane' + i;
        let preferredName = '';
        if (Math.random() > 0.5) {
          firstName = 'John';
          preferredName = 'Johnny' + i;
        }

        users.push({
          firstName,
          lastName: 'Doe',
          preferredName,
          email: 'janedoe@example.com',
          group: 'student',
          id: i
        });
      }

      return users;
    }
  },
  computed: {
    formattedUsers: function () {
      return this.users.map(function (user) {
        return {
          name: (user.preferredName || user.firstName) + ' ' + user.lastName,
          group: user.group,
          id: user.id
        };
      });
    }
  },
  created: function () {
    this.getData();
  }
};
</script>
