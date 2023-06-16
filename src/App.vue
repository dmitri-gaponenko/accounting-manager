<template>
  <h1>Accounting Manager</h1>
  <am-board/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AmBoard from '@/components/Board.vue';

export default defineComponent({
  name: 'App',
  components: {
    AmBoard,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
