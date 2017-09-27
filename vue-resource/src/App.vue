<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">submit</button>
        <hr>
        <input type="text" class="form-control" v-model="node">
        <button class="btn btn-primary" @click="fetchData">GetData</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{ u.username }} : {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods: {
    /* submit() {
      console.log('submit');
      this.$http.post('', this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    }, */
    submit() {
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    /* fetchData() {
      this.$http.get('')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          this.users = result;
        });
    }, */
    fetchData() {
      this.resource.getData({node: this.node})
        .then(response => {
          return response.json();
        })
        .then(data => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          this.users = result;
        });
    },
    created() {
      const customActions = {
        getData: {method: 'GET'},
        saveAlt: {method: 'POST', url: 'alternative.json'}
      };
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
}
</script>

<style>

</style>
