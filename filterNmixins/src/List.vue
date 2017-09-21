<template>
  <div>
    <button @click="fruits.push('berries')">Add New Item</button>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruit'

export default {
  mixins: [fruitMixin],
  created() {
    console.log('inside list Created!');
  }
}
</script>

<style>

</style>
