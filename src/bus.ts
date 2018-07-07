import Vue from 'vue';
import * as tf from '@tensorflow/tfjs';

Object.assign(window, { tf });
// Define a model for linear regression.
const offscreenCV = document.createElement('canvas');
const offscreenCtx = offscreenCV.getContext('2d') as CanvasRenderingContext2D;

Object.assign(offscreenCV, { width: 28, height: 28, style: 'border: 1px solid blue' });
// document.body.appendChild(offscreenCV);

const bus = new Vue({
  data() {
    return {
      model: null as any as tf.Model,
      modelLoaded: false,
      ctx: null as any as CanvasRenderingContext2D,
      cv: null as any as HTMLCanvasElement,
      offscreenCV,
      offscreenCtx,
      pendingPredictData: null as any as Uint8Array,
      currNumImgData: [] as number[],
    };
  },
  methods: {
    async load_model() {
      this.model = await tf.loadModel("https://raw.githubusercontent.com/Plasmatium/tfjs-exploration/master/src/assets/shared_model/model.json");
      this.modelLoaded = true;
    },
    getImgTensor() {
      const {
        ctx, cv, offscreenCV, offscreenCtx,
      } = bus;
      offscreenCtx.clearRect(0, 0, 28, 28);
      offscreenCtx.drawImage(cv, 0, 0, 28, 28);
      const imgData = offscreenCtx.getImageData(0, 0, 28, 28).data;

      const data = [];
      for (let i = 0; i < 28 * 28 * 4; i += 4) {
        data.push(imgData[i + 2] / 255.0 - 0.5);
      }
      this.currNumImgData = data;
      return tf.tensor4d(data, [1, 28, 28, 1]);
    },
    async predict() {
      const pred = this.model.predict(this.getImgTensor());
      (pred as any).print();
      const predOneHot = await pred;

      const predNum = await (await tf.argMax(predOneHot as any, 1)).data();
      return predNum;
    },
  },
});

export default bus;
