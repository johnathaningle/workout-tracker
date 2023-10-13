<template>
    <div class="col-12 mb-3 p-3 border border-4 border-dark"
        :class="{ 'bg-light': !workoutStore.isTime && !workoutStore.isWarningTime, 'bg-warning': workoutStore.isWarningTime && !workoutStore.isTime, 'bg-danger': workoutStore.isTime && !workoutStore.isWarningTime }">
        <h2 class="w-100">{{ workoutStore.timeElapsedString }}</h2>
    </div>
</template>

<script setup>
import { useWorkoutStore } from '../stores/WorkoutStore';
const workoutStore = useWorkoutStore();
</script>