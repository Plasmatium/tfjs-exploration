import Vue from 'vue';
import * as tf from "@tensorflow/tfjs";

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 256, activation: 'relu', inputShape: [10] }));
model.add(tf.layers.dense({ units: 1, activation: 'linear' }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: 'meanSquaredError', optimizer: 'adam' });

// Generate some synthetic data for training.
const xs = tf.randomNormal([32, 10]);
const ys = tf.randomNormal([32, 1]);

const bus = new Vue({
  data() {
    return {
      val: [] as number[],
      hintStr: 'Epoches',
      startTime: new Date(),
      endTime: new Date(),
    };
  },
  methods: {
    async fit() {
      await model.fit(xs, ys, {
        epochs: 16,
        batchSize: 4,
        callbacks: {
          onEpochEnd: async (epoch, log) => {
            if (epoch%10 !== 0) return;
            let hintStr = `Epoch ${epoch}: loss: ${log && log.loss}`;
            console.log(hintStr)
            // await this.$nextTick()
            const el = document.getElementById("pred") as HTMLElement;
            console.log(el)
            el.innerText = hintStr
          }
        }
      });
      const data = await(model.predict(
        tf.randomNormal([1, 10])
      ) as any).data();
      console.log(data)
      this.val = data
      bus.endTime = new Date()
    }
  }
});

export default bus;
