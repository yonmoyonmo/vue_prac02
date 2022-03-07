<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        canvas Test
        <div>{{ message }}</div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="11">
        <canvas id="wonmo_canvas"></canvas>
        <div>
          <v-btn @click="drawRect">Add Rect</v-btn>
          <v-btn @click="subWidth">-</v-btn>
          <v-btn @click="addWidth">+</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    message: "Vue + Canvas API",
    vueCanvas: null,
    rectWidth: 200,
  }),
  mounted() {
    const canvas = document.getElementById("wonmo_canvas");
    const context = canvas.getContext("2d");
    this.vueCanvas = context;
  },
  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },
    addWidth() {
      this.rectWidth += 10;
      this.drawRect();
    },
    subWidth() {
      this.rectWidth -= 10;
      this.drawRect();
    },
  },
};
</script>
<style scoped>
#wonmo_canvas {
  height: 200px;
  width: 400px;
  border: 1px solid gray;
}
</style>
