<template>
  <div>
    <li class="list-group-item" style="cursor: pointer" @click="serverSelected">
      Server #{{ server.id }}, Status: {{ server.status }}
    </li>
  </div>
</template>

<script>
import { serverBus } from '../../main.js';

export default {
  props: {
    'server': Object
  },
  methods: {
    serverSelected() {
      serverBus.$emit('serverSelected', this.server);
    }
  }
}
</script>
