<template>
  <NavBar /> 
  <div class="container-fluid p-3 my-3">
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="col-12 p-3 mb-3 border border-4 border-dark bg-light">
          <button class="btn btn-success w-100" @click="start" v-if="state == 'paused'">{{ timeElapsed > 0 ? 'Resume' : 'Start' }}</button>
          <button class="btn btn-secondary w-100" @click="pause" v-if="state == 'started'">Pause</button>
          <button class="btn btn-secondary w-100 mt-3" @click="reset" v-if="state == 'paused' && timeElapsed > 0">Reset</button>
        </div>
        <div class="col-12 p-3 border border-4 border-dark bg-light">
          <label for="length">Workout Time (minutes)</label>
          <input v-model="totalTime" name="length" type="number" max="60" min="5" step="1" class="form-control">
          <label for="warmup">Warmup (minutes)</label>
          <input v-model="warmupTime" name="warmup" type="number" max="15" min="1" step="1" class="form-control">
          <label for="cooldown">Cooldown (minutes)</label>
          <input v-model="cooldownTime" name="cooldown" type="number" max="15" min="1" step="1" class="form-control">
          <label for="audioUrl">Youtube URL (share URL)</label>
          <input name="audioUrl" class="form-control" v-model="youtubeUrl" type="text">
        </div>
      </div>
      <div class="col-md-7 text-center">

        <div class="col-12 mb-3 p-3 border border-4 border-dark" :class="{ 'bg-light': !isTime && !isWarningTime, 'bg-warning': isWarningTime && !isTime, 'bg-danger': isTime && !isWarningTime  }">
          <h2 class="w-100">{{ timeElapsedString }}</h2>
        </div>
        <div class="col-12 p-3 border border-4 border-dark">
          <iframe class="w-100" style="min-height: 300px;" :src="audioUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="progress-bar border bg-light">
    <div v-if="timeElapsed > 0" class="bg-dark h-100 opacity-50" :style="{ width: ((timeElapsed / 60.0) / totalTime) * 100.0 + '%' }"></div>
    <div v-if="showWarmAndCooldownBars" class="warmup bg-danger h-100 opacity-75" :style="{ width: (warmupTime / totalTime) * 100.0 + '%' }"></div>
    <div v-if="showWarmAndCooldownBars" class="cooldown bg-success h-100 opacity-75" :style="{ width: (cooldownTime / totalTime) * 100.0 + '%' }"></div>

  </div>
  <div class="modal fade" id="workout-complete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Workout Complete!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Congrats on completing your workout. Would you like to start another one?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="restart">Yes</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="reset">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
//import bootstrap
import * as bootstrap from 'bootstrap';
import NavBar from './components/NavBar'

//import HelloWorld from './components/HelloWorld.vue'
const audio = ref(null);
const timeElapsed = ref(0);
const youtubeStartTime = ref(0);
const interval = ref(null);
const state = ref('paused');
const isWarningTime = ref(false);
const isTime = ref(false);
const youtubeUrl = ref('https://youtu.be/rKDhP1R7wy0?si=cDHpAM-1qAOoPFmS');
const audioUrl = computed(() => {
  var val = youtubeUrl.value;
  val = val.replace('https://youtu.be', 'https://youtube.com/embed')
  if (state.value == 'started') {
    return val + '&autoplay=1' + '&start=' + youtubeStartTime.value;
  }
  return val + '&start=' + youtubeStartTime.value;
});

onMounted(() => {
  audio.value = null;
})

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
  youtubeStartTime.value = timeElapsed.value;
  audio.value = null;
  clearInterval(interval.value);
}

function restart() {
  reset();
  start();
}

function reset() {
  timeElapsed.value = 0;
  youtubeStartTime.value = 0;
  audio.value = null;
}

const showWarmAndCooldownBars = computed(() => {
  return !(totalTime.value < (warmupTime.value + cooldownTime.value))
});

//warn the user with audio and by changing the background color when the interval is up
function handleWarningIndicator() {
  if ((timeElapsed.value + 4) % 60 == 0) {
      audio.value.play();
      isWarningTime.value = true;
      setTimeout(() => {
        isWarningTime.value = false;
        isTime.value = true;
        setTimeout(() => {
          isTime.value = false;
        }, 1000);
      }, 3000);
    }
}

function start() {
  audio.value = new Audio(require('@/assets/timer.mp3'));
  state.value = 'started';
  interval.value = setInterval(() => {
    timeElapsed.value++;
    handleWarningIndicator();
    //pause once complete
    if (timeElapsed.value / 60 >= totalTime.value) {
      clearInterval(interval.value);
      state.value = 'paused';
      var myModal = new bootstrap.Modal(document.getElementById('workout-complete'), {
        keyboard: false
      })
      myModal.show()

    }
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
