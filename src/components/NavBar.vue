<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Workout Tracker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02"
        aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="nav-link" @click="share">Share</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
//copy the current url to clipboard and log a toast message
function share() {
  // Create a temporary input element
  const tempInput = document.createElement('input');
  
  // Set its value to the current URL
  tempInput.value = window.location.href;
  
  // Append it to the body
  document.body.appendChild(tempInput);
  
  // Select the input field's content
  tempInput.select();
  
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  
  // Remove the temporary input element
  document.body.removeChild(tempInput);

  toast.success("Copied to clipboard", {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  });
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  