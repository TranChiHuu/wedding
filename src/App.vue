<template>
  <section>
    <div class="text-center countdown-container">
      <div class="countdown-wrapper">
        <br />
        <p class="countdown-wrapper-name-sm">Wedding</p>
        <p class="countdown-wrapper-name">
          Chí Hữu <i class="fas fa-heart"></i> Ái Trinh
        </p>

        <div id="countdown-display" class="countdown-wrapper-name-sm">
          <div>26.09.2024</div>
          <hr />
          <div style="font-size: 1.2rem">Ngày : Giờ : Phút : Giây</div>
          {{ countdownRef }}
        </div>
      </div>

      <div class="blur">
        <span class="arrow"><i class="fa-solid fa-angle-down"></i></span>
        <span class="arrow" style="top: 18px">
          <i class="fa-solid fa-angle-down"></i>
        </span>
      </div>
    </div>
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
            src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00785.jpg"
            class="d-block w-100"
            alt="/KAH00777.jpg"
          />
        </div>
      </div>
    </div>
    <button id="play-button" class="play-button" @click="togglePlaying">
      <i class="fas" :class="playing ? 'fa-pause' : 'fa-play'"></i>
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const date = new Date("2024-09-26T00:00:00.000Z");
const countdownRef = ref("");
const playing = ref(false);
let audio = new Audio(
  "https://khanh-uyen.s3.ap-northeast-1.amazonaws.com/musics/play-backgroud.mp3"
);

function togglePlaying() {
  playing.value = !playing.value;
  if (playing.value) {
    playAudio();
  } else {
    pauseAudio();
  }
}
function playAudio() {
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
function countTime() {
  setInterval(() => {
    const now = new Date();
    const timeLeft = date.getTime() - now.getTime();

    const days = Math.floor(timeLeft / (1000 * 3600 * 24));
    const hours = Math.floor((timeLeft % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeLeft % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor(timeLeft / 1000) % 60;
    const formattedTime =
      `${days.toString().padStart(2, "0")} : ` +
      `${hours.toString().padStart(2, "0")} : ` +
      `${minutes.toString().padStart(2, "0")} : ` +
      `${seconds.toString().padStart(2, "0")}`;
    countdownRef.value = formattedTime;
  }, 1000);
}

onMounted(() => {
  countTime();
});
</script>

<style lang="scss">
:root {
  --main-color: #30d17f;
  --name-color: white;
  --play-color: green;
  --arrow-color: gray;
}

.play-button {
  position: fixed;
  bottom: 3rem;
  left: 1rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid var(--play-color);
  border-radius: 50%;
  padding: 8px 16px;
  cursor: pointer;
  z-index: 1;

  .fas {
    color: var(--play-color);
  }
}
.carousel-item {
  height: 100vh;

  img {
    height: 100%;
    object-fit: contain;
  }
}
.countdown-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);

  .countdown-wrapper {
    font-size: 40px;

    .countdown-wrapper-name,
    .countdown-wrapper-name-sm {
      font-size: 50px;
      margin-bottom: 0px;
      font-weight: bold;
      box-sizing: border-box;
      color: var(--name-color, #333);
      font-family: "Dancing Script", cursive;
      font-optical-sizing: auto;
      font-style: normal;
      text-shadow: -1px 0 var(--main-color), 1px 0 var(--main-color),
        0 -1px var(--main-color), 0 1px var(--main-color);

      .fa-heart {
        color: red;
        font-size: 2rem;
        text-shadow: -1px 0 white, 1px 0 white, 0 -1px white, 0 1px white;
      }
    }

    .countdown-wrapper-name-sm {
      font-size: 1.5rem;
    }
    .countdown-wrapper-date {
      font-size: 35px;
      color: red;
      font-style: italic;
      font-optical-sizing: auto;
    }
  }
}

.blur {
  position: fixed;
  bottom: 5rem;
  transform: translateX(-1rem);
}

.arrow {
  cursor: pointer;
  color: var(--arrow-color);
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  top: 0.4rem;
  animation: animate-arrow-1 1s ease-in-out infinite;
  z-index: 3;
}

@keyframes animate-arrow-1 {
  0% {
    transform: translateY(-40px);
    opacity: 0;
  }
  70%,
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
}
</style>
