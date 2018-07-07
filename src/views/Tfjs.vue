<template>
  <div>
    <div>Tensorflow JS Vue</div>
    <div>{{bus.modelLoaded?'model loaded':'loading model'}}</div>
    <h1>prediction: {{predNum}}</h1>
    <canvas id="cv" width="400" height="400"></canvas>
    <div>
      <button @click="predict">predict</button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import bus from '../bus';

Object.assign(window, { axios });

export default Vue.extend({
  data() {
    return {
      bus,
      predNum: null as any as number,
      newStarting: true,
      predTimerId: -1,
    };
  },
  methods: {
    async predict() {
      const pred = await bus.predict();
      // eslint-disable-next-line
      this.predNum = pred[0];
      const { ctx } = this.bus;
      setTimeout(() => {
        ctx.clearRect(0, 0, 400, 400);
      }, 1000);
    },
  },
  mounted() {
    (window as any).bus = bus;
    this.bus.load_model();

    const canvas = document.getElementById('cv') as HTMLCanvasElement;
    this.bus.cv = canvas;
    this.bus.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const { ctx, cv } = bus;
    const cvBR = cv.getBoundingClientRect();

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 20;

    cv.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const { clientX, clientY } = e.targetTouches[0];
      const [drawX, drawY] = [clientX - cvBR.left, clientY - cvBR.top];

      ctx.lineTo(drawX, drawY);
      ctx.stroke();

      window.clearTimeout(this.predTimerId);
      this.predTimerId = window.setTimeout(() => {
        this.predict();
      }, 500);
    });

    cv.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const { clientX, clientY } = e.targetTouches[0];
      const [drawX, drawY] = [clientX - cvBR.left, clientY - cvBR.top];

      ctx.beginPath();
      ctx.moveTo(drawX, drawY);
    });
  },
});
</script>

<style lang="scss" scoped>
canvas {
  position: relative;
  height: 400px;
  width: 400px;

  border: 1px solid #777;
}
</style>
