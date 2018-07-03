<template>
  <div>
    <div>Tensorflow JS Vue</div>
    <div id="pred">{{bus.hintStr}}</div>
    <div>predict is {{bus.val}}</div>
    <div>cost {{bus.endTime - bus.startTime}} msec</div>
    <button @click="fit">click to fit and predict</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bus from '../bus';

export default Vue.extend({
  data() {
    return {
      bus,
    };
  },
  methods: {
    fit() {
      bus.hintStr = 'fitting...';
      bus.startTime = new Date();
      setTimeout(() => this.bus.fit(), 100);
    },
  },
  mounted() {
    (window as any).bus = bus;
  },
});
</script>

<style lang="scss" scoped>

</style>
