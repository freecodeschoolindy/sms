<template>
  <div>
    <h1>{{ userType }} Profile</h1>

    <h2>Publicly visible:</h2>

    <fieldset class="half">
      <label for="firstName">First Name:</label>
      <input v-model="user.firstName" id="firstName" />
    </fieldset>

    <fieldset class="half">
      <label for="lastName">Last Name:</label>
      <input v-model="user.lastName" id="lastName" />
    </fieldset>

    <fieldset class="half">
      <label for="preferredName">Preferred Name:</label>
      <input v-model="user.preferredName" id="preferredName" />
    </fieldset>

    <pre>
    Public Profile: Visible to others logged in, maybe to those not logged in?
      Preferred Name
      GitHub Username
      Codepen Username
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
    </pre>


  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  data: function () {
    return {
      userType: 'Student',
      user: {
        firstName: 'Jane',
        preferredName: 'Janey',
        lastName: 'Doe'
      }
    };
  },
  methods: {},
  computed: {}
};
</script>
