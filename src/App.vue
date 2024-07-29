<template>
  <section>
    <div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img
            src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00009.jpg"
            class="d-block w-100"
            alt="/KAH00850.jpg"
          />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img
            src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00716.jpg"
            class="d-block w-100"
            alt="/KAH00716.jpg"
          />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img
            src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00777.jpg"
            class="d-block w-100"
            alt="/KAH00777.jpg"
          />
        </div>
      </div>
    </div>

    <div id="countdown-container" class="text-center countdown-container">
      <p id="countdown-display" style="font-size: 48px; color: #0097a7">
        {{ countdownRef }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const date = new Date("2024-09-26T00:00:00.000Z");
const countdownRef = ref("");
onMounted(() => {
  setInterval(() => {
    const now = new Date();
    const timeLeft = date.getTime() - now.getTime();

    const days = Math.floor(timeLeft / (1000 * 3600 * 24));
    const hours = Math.floor((timeLeft % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor(timeLeft / 1000) % 60;
    const formattedTime =
      `${days.toString().padStart(2, "0")}:` +
      `${hours.toString().padStart(2, "0")}:` +
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}`;
    countdownRef.value = formattedTime;
  }, 1000);
});
</script>

<style lang="scss">
.carousel-item {
  height: 100vh;

  img {
    height: 100%;
    object-fit: contain;
  }
}
.countdown-container {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.countdown-display {
  font-size: 48px;
  color: #0097a7; /* teal-like color */
  text-align: center;
}
</style>
