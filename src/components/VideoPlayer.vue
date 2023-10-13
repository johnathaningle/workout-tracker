<template>
    <div class="col-12 p-3 border border-4 border-dark h-100">
        <iframe class="w-100 h-100" :src="workoutStore.audioUrl" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>

<script setup>
import { useWorkoutStore } from '../stores/WorkoutStore';
const workoutStore = useWorkoutStore();
</script>