<template>
    <div class="progress-bar border bg-light">
        <div v-if="workoutStore.timeElapsed > 0" class="bg-dark h-100 opacity-50"
            :style="{ width: ((workoutStore.timeElapsed / 60.0) / workoutStore.totalTime) * 100.0 + '%' }"></div>
        <div v-if="workoutStore.showWarmAndCooldownBars" class="warmup bg-danger h-100 opacity-75"
            :style="{ width: (workoutStore.warmupTime / workoutStore.totalTime) * 100.0 + '%' }"></div>
        <div v-if="workoutStore.showWarmAndCooldownBars" class="cooldown bg-success h-100 opacity-75"
            :style="{ width: (workoutStore.cooldownTime / workoutStore.totalTime) * 100.0 + '%' }"></div>
    </div>
</template>

<script setup>
    import { useWorkoutStore } from '../stores/WorkoutStore';
    const workoutStore = useWorkoutStore();
</script>

<style scoped>
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