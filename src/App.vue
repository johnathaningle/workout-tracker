<template>
  <NavBar />
  <div class="container-fluid p-3 my-3">
    <div class="row">
      <div class="col-md-4 mb-3">
        <ControlButtons />
        <TimeControls />
      </div>
      <div class="col-md-7 text-center">
        <TimeDisplay />
        <VideoPlayer />
      </div>
    </div>
  </div>
  <ProgressBar />
  <CompleteModal />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import NavBar from './components/NavBar';
import TimeControls from './components/TimeControls';
import ControlButtons from './components/ControlButtons';
import VideoPlayer from './components/VideoPlayer';
import ProgressBar from './components/ProgressBar';
import CompleteModal from './components/CompleteModal';
import TimeDisplay from './components/TimeDisplay';

import { useWorkoutStore } from './stores/WorkoutStore';

const workoutStore = useWorkoutStore();

const router = useRouter();


onMounted(() => {
  workoutStore.audio = null;
  ///wait for the router to be ready
  setTimeout(() => {
    //set the workout settings based on the query strings (if available)
    if (router.currentRoute.value.query.t) {
      workoutStore.totalTime = parseInt(router.currentRoute.value.query.t);
    }
    if (router.currentRoute.value.query.w) {
      workoutStore.warmupTime = parseInt(router.currentRoute.value.query.w);
    }
    if (router.currentRoute.value.query.c) {
      workoutStore.cooldownTime = parseInt(router.currentRoute.value.query.c);
    }
    if (router.currentRoute.value.query.yt) {
      workoutStore.youtubeUrl = router.currentRoute.value.query.yt;
    }
    if (router.currentRoute.value.query.id) {
      workoutStore.intervalTime = parseInt(router.currentRoute.value.query.id);
    }
  }, 500);
})
</script>


