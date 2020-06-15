<template>
  <div>
    <h1>{{ userType }} Profile</h1>

    <h2>Publicly visible:</h2>

    <base-text-field
      v-for="field in fields"
      v-model="user[field.id]"
      :id="field.id"
      :label="field.label"
      :placeholder="field.placeholder"
      :key="field.id"
    />

  </div>
</template>

<script>
import BaseTextField from '@/components/utilities/BaseTextField.vue';

export default {
  name: 'UserDetails',
  components: {
    BaseTextField
  },
  data: function () {
    return {
      userType: 'Student',
      user: {
        firstName: 'Jane',
        preferredName: 'Janey',
        lastName: 'Doe',
        codepenUsername: 'jdoe',
        githubUsername: 'jdoe'
      },
      fields: [
        {
          id: 'firstName',
          label: 'First Name',
          placeholder: 'Richard'
        },
        {
          id: 'lastName',
          label: 'Last Name',
          placeholder: 'Sanchez'
        },
        {
          id: 'preferredName',
          label: 'Preferred Name',
          placeholder: 'Rick'
        },
        {
          id: 'githubUsername',
          label: 'GitHub Username',
          placeholder: 'rsanchez'
        },
        {
          id: 'codepenUsername',
          label: 'CodePen Username',
          placeholder: 'rsanchez'
        }
        /*
          Public Profile: Visible to others logged in, maybe to those not logged in?
            Certificates/Badges

          Private Profile: Visible to only the user and organizers/admins
            FreeCodeCamp.org progress page url: freecodecamp.org/codecafecentral
            Email
            Discord Name
            Phone
            Attendenance (not editable by students)
            List of labs:
              Link to the lab starter
              input field for a link to their completed version
        */
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>
