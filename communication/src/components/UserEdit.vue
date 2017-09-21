<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
    <button @click="resetAgeFn()">Reset Age</button>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';

  export default {
    props: {
      'userAge': Number,
      'resetAgeFn': Function
    },
    methods: {
      editAge() {
        this.userAge = 20;
        // this.$emit('ageWasEdited', this.userAge);
        // eventBus.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge(this.userAge);
      },
      resetAge() {
        this.userAge = 30;
      }
    }
  }
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
