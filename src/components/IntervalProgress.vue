<template>
    <div class="interval-progress bg-secondary opacity-50" :style="{width:  ((workoutStore.timeElapsed % workoutStore.intervalTime) / workoutStore.intervalTime) * 100 + '%' }"></div>
</template>

<script setup>
import { useWorkoutStore } from '../stores/WorkoutStore';
const workoutStore = useWorkoutStore();
</script>

<style scoped>
  .interval-progress {
    height: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
  }
</style>