<template>
    <div class="col-12 p-3 mb-3 border border-4 border-dark bg-light">
        <button class="btn btn-success w-100" @click="workoutStore.start" v-if="workoutStore.state == 'paused'">{{
            workoutStore.timeElapsed > 0 ? 'Resume' : 'Start' }}</button>
        <button class="btn btn-secondary w-100" @click="workoutStore.pause" v-if="workoutStore.state == 'started'">Pause</button>
        <button class="btn btn-secondary w-100 mt-3" @click="workoutStore.reset"
            v-if="workoutStore.state == 'paused' && workoutStore.timeElapsed > 0">Reset</button>
    </div>
</template>

<script setup>
import { useWorkoutStore } from '../stores/WorkoutStore';
const workoutStore = useWorkoutStore();
</script>