<template>
  <div class="container-fluid p-3 my-5">
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="col-12 p-3 mb-3 border border-4 border-dark bg-light">
          <h5 class="text-center mb-3">Workout Timer</h5>
          <button class="btn btn-success w-100 mb-3" @click="start" v-if="state == 'paused'">Start</button>
          <button class="btn btn-secondary w-100 mb-3" @click="pause" v-if="state == 'started'">Pause</button>
          <button class="btn btn-secondary w-100 mb-3" @click="reset" v-if="state == 'paused' && timeElapsed > 0">Reset</button>
        </div>
        <div class="col-12 p-3 border border-4 border-dark bg-light">
          <label for="length">Workout Time (minutes)</label>
          <input v-model="totalTime" name="length" type="number" max="60" min="5" step="1" class="form-control">
          <label for="warmup">Warmup (minutes)</label>
          <input v-model="warmupTime" name="warmup" type="number" max="15" min="1" step="1" class="form-control">
          <label for="cooldown">Cooldown (minutes)</label>
          <input v-model="cooldownTime" name="cooldown" type="number" max="15" min="1" step="1" class="form-control">
        </div>
      </div>
      <div class="col-md-7  text-center bg-light">
        
        <div class="col-12 p-3 border border-4 border-dark bg-light">
          <h2 class="w-100">{{ timeElapsedString }}</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="progress-bar border bg-light">
    <div v-if="timeElapsed > 0" class="bg-dark h-100 opacity-50" :style="{ width: ((timeElapsed / 60.0) / totalTime) * 100.0 + '%' }"></div>
    <div class="warmup bg-danger h-100 opacity-75" :style="{ width: (warmupTime / totalTime) * 100.0 + '%' }"></div>
    <div class="cooldown bg-success h-100 opacity-75" :style="{ width: (cooldownTime / totalTime) * 100.0 + '%' }"></div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';


//import HelloWorld from './components/HelloWorld.vue'
const timeElapsed = ref(0);
const interval = ref(null);
const state = ref('paused');

//varaibles to store the requested times the user would like to workout, warmup, etc
const totalTime = ref(30);
const warmupTime = ref(1);
const cooldownTime = ref(1);

//create a computed string to represent the time elapsed
const timeElapsedString = computed(() => {
  const minutes = Math.floor(timeElapsed.value / 60);
  const seconds = timeElapsed.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

function pause() {
  state.value = 'paused';
  clearInterval(interval.value);
}

function reset() {
  timeElapsed.value = 0;
}

function start() {
  state.value = 'started';
  interval.value = setInterval(() => {
    timeElapsed.value++;
  }, 1000);
}

</script>

<style>
.warmup {
  position: absolute;
  bottom: 0;
  left: 0;
}

.cooldown {
  position: absolute;
  bottom: 0;
  right: 0;
}

.progress-bar {
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
