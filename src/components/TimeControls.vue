<template>
    <div class="col-12 p-3 border border-4 border-dark bg-light">
        <label for="length">Workout Time (minutes)</label>
        <input @input="updateParameters" v-model="workoutStore.totalTime" name="length" type="number" max="60" min="5"
            step="1" class="form-control">
        <label for="warmup">Warmup (minutes)</label>
        <input @input="updateParameters" v-model="workoutStore.warmupTime" name="warmup" type="number" max="15" min="1"
            step="1" class="form-control">
        <label for="cooldown">Cooldown (minutes)</label>
        <input @input="updateParameters" v-model="workoutStore.cooldownTime" name="cooldown" type="number" max="15" min="1"
            step="1" class="form-control">
        <label for="intervalDuration">Interval Duration (seconds)</label>
        <input @input="updateParameters" type="number" name="intervalDuration" id="intervalDuration" min="5" max="120"
            v-model="workoutStore.intervalTime" class="form-control">
        <label for="audioUrl">Youtube URL (share URL)</label>
        <input @input="updateParameters" name="audioUrl" class="form-control" v-model="workoutStore.youtubeUrl" type="text">
    </div>
</template>

<script setup>
import { useWorkoutStore } from '../stores/WorkoutStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const workoutStore = useWorkoutStore();
//update the url with the updated values
const updateParameters = () => {
    //create a string representation of the route with the four query string params
    var r = '';
    //if we are not localhost, alter the url structure
    if (window.location.href.indexOf('localhost') < 1) {
        //the production build of this requires this first part of the url
        r += '/workout-tracker';
    }
    r += '/?t=' + workoutStore.totalTime + '&w=' + workoutStore.warmupTime + '&c=' + workoutStore.cooldownTime + '&id=' + workoutStore.intervalTime + '&yt=' + workoutStore.youtubeUrl;


    // Use router.push to update the URL with the new parameters
    router.push(r);
}
</script>