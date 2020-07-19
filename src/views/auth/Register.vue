<template>
  <form class="grid-x">
    <div class="cell small-4 grid-x grid-padding-x">
      <div class="cell">
        <h2>Register Page</h2>
      </div>

      <div class="cell">
        <label>
          Github Username:
          <input v-model="github" type="text" placeholder="Github Username" />
        </label>
      </div>
      <div class="cell">
        <label>
          Email:
          <input v-model="email" type="text" placeholder="Email" />
        </label>
      </div>
      <div class="cell">
        <label>
          Select Student Status:
          <select v-model="studentStatus">
            <option value="current">I am currently a student</option>
            <option value="former">I am a former student</option>
            <option value="waitlist">I want to be on the wait list to become a student</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div class="cell">
        <label>
          First Name:
          <input v-model="firstName" type="text" placeholder="First Name" />
        </label>
      </div>
      <div class="cell">
        <label>
          Last Name:
          <input v-model="lastName" type="text" placeholder="Last Name" />
        </label>
      </div>
      <div class="cell">
        <label>
          Preferred Name:
          <input v-model="preferredName" type="text" placeholder="Preferred Name" />
        </label>
      </div>
      <div class="cell">
        <button class="button" @click="registerUser">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      github: '',
      email: '',
      firstName: '',
      lastName: '',
      preferredName: '',
      studentStatus: ''
    };
  },
  methods: {
    registerUser: function () {

    }
  }
};
</script>
