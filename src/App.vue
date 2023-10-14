<template>
  <NavBar />
  <div class="p-3 px-lg-5 my-3" :class="{ 'container-fluid': workoutStore.isDisplayingVideo, 'container': !workoutStore.isDisplayingVideo }">
    <div class="row">
      <div class="mb-3 mb-md-0" :class="{ 'col-md-4': workoutStore.isDisplayingVideo, 'col-12': !workoutStore.isDisplayingVideo }">
        <TimeDisplay />
        <ControlButtons />
        <TimeControls />
      </div>
      <div v-if="workoutStore.isDisplayingVideo" class="col-md-8 text-center">
        <VideoPlayer />
      </div>
    </div>
  </div>
  <ProgressBar />
  <FooterBar />
  <CompleteModal />
  <IntervalProgress />
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
import FooterBar from './components/FooterBar.vue';
import IntervalProgress from './components/IntervalProgress.vue';

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


