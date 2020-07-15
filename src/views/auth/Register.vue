<template>
  <form class="grid-x">
    <div class="cell small-4 grid-x grid-padding-x">
      <div class="cell">
        <h2>Register Page</h2>
      </div>

      <div class="cell">
        <input type="text" v-model="github" placeholder="Github Username">
      </div>
      <div class="cell">
        <input type="text" v-model="email" placeholder="Email">
      </div>
      <div class="cell">
        <label>Select Student Status
          <select v-model="studentStatus">
            <option value="current">I am currently a student</option>
            <option value="former">I am a former student</option>
            <option value="waitlist">I want to be on the wait list to become a student</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div class="cell">
        <input type="text" v-model="firstName" placeholder="First Name">
      </div>
      <div class="cell">
        <input type="text" v-model="lastName" placeholder="Last Name">
      </div>
      <div class="cell">
        <input type="text" v-model="preferredName" placeholder="Preferred Name">
      </div>
      <div class="cell">
        <button @click="registerUser" class="button">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      github: '',
      email: '',
      firstName: '',
      lastName: '',
      preferredName: '',
      studentStatus: ''
    }
  },
  methods: {
    registerUser() {

    }
  }
}
</script>
