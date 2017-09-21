<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- v-bind로 props 변수를 넘겨줌 -->
        <app-user-detail :my-name="name" :user-age="age" @nameWasReset="name = $event" :reset-fn="resetName">
        </app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :user-age="age" @ageWasEdited="age = $event" :reset-age-fn="resetAge">
        </app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function() {
    return {
      name: 'Park',
      age: 30
    };
  },
  methods: {
    changeName() {
      this.name = 'Max';
    },
    resetName() {
      this.name = 'Park';
    },
    resetAge() {
      this.age = 30;
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
