<template>
  <div id="app">
    <div class="container">
      <server-header></server-header>
      <hr/>
      <div class="row">
        <server-status></server-status>
        <server-detail></server-detail>
      </div>
      <hr/>
      <server-info></server-info>
    </div>
  </div>
</template>

<script>
import ServerHeader from './components/shared/Header.vue';
import ServerStatus from './components/server/ServerStatus.vue';
import ServerDetail from './components/server/ServerDetail.vue'
import ServerInfo from './components/shared/Info.vue';

export default {
  components: {
    ServerHeader,
    ServerStatus,
    ServerDetail,
    ServerInfo
  }
}
</script>

<style>

</style>
