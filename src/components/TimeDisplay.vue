<template>
    <div class="col-12 mb-3 border border-4 border-dark text-center"
        :class="{ 'bg-light': !workoutStore.isTime && !workoutStore.isWarningTime, 'bg-warning': workoutStore.isWarningTime && !workoutStore.isTime, 'bg-danger': workoutStore.isTime && !workoutStore.isWarningTime }">
    
        <div class="row p-3">
            <div class="col-lg-6 text-center text-lg-start">
                <h1 class="fw-bold m-0">{{ workoutStore.timeElapsedString }}</h1>
            </div>
            <div class="col-lg-6 text-center text-lg-end">
                <small class="d-block m-0">Interval Seconds: <strong>{{ workoutStore.timeElapsed % workoutStore.intervalTime }}</strong></small>
                <small class="d-block m-0">Current Interval: <strong>{{ workoutStore.currentInterval }}</strong></small>
                <small class="d-block m-0">Intervals Remaining: <strong>{{ workoutStore.intervalsRemaining }}</strong></small>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWorkoutStore } from '../stores/WorkoutStore';
const workoutStore = useWorkoutStore();
</script>

<style scoped>
    .interval-progress {
        min-height: 50px;
        position: absolute;
        z-index: 1;
    }
</style>