<template>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="workoutStore.restart">Yes</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="workoutStore.reset">No</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { useWorkoutStore } from '../stores/WorkoutStore';
import * as bootstrap from 'bootstrap';

const workoutStore = useWorkoutStore();

watch(() => workoutStore.isComplete, (newValue) => {
    if (newValue) {
        var myModal = new bootstrap.Modal(document.getElementById('workout-complete'), {
            keyboard: false,
        });
        myModal.show();
    }
});
</script>