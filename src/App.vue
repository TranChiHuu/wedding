<template>
  <div class="hearts-loader" v-if="loading">
    <i class="fa-solid fa-heart heart-icon" />
    <i class="fa-solid fa-heart heart-icon" />
    <i class="fa-solid fa-heart heart-icon" />
    <i class="fa-solid fa-heart heart-icon" />
  </div>
  <main v-else>

    <section>
      <div
        id="carouselSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <img
              src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00208.jpg"
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
      <div class="text-center section-container">
        <div class="section-wrapper">
          <div>
            <p class="section-wrapper-name sm">Save the Date</p>
            <div class="section-wrapper-name">
              <div
                class="main-title"
                style="
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                Chí Hữu
                <i class="fas fa-heart"></i>
                Ái Trinh
              </div>
            </div>
          </div>

          <div id="section-display" class="section-wrapper-name sm">
            26.09.2024
            <hr />
            <p style="font-size: 2rem; margin-bottom: 0">
              Ngày : Giờ : Phút : Giây
            </p>
            {{ countdownRef }}
          </div>
        </div>
      </div>
    </section>

    <section class="couple-section my-5 py-3" id="couple">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="col col-xs-12 pt-5">
            <div class="couple-area clearfix">
              <div class="text-grid bride">
                <div class="couple-img">
                  <img width="100" height="100" src="/images/cr.png" alt="" />
                </div>
                <h3>Chí Hữu</h3>
                <ul class="d-flex justify-content-end p-0">
                  <li>
                    <a
                      href="https://www.facebook.com/chishuuwx/"
                      target="_blank"
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/michaeltran1203/"
                      target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/chishuuwx/"
                      target="_blank"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
                <p>
                  Chàng trai đến từ vùng đất đỏ Bình Phước. Là một chàng trai
                  năng động, ít nói nhưng lại rất tình cảm.
                </p>
              </div>
              <div class="middle-couple-pic">
                <img
                  src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH01078.jpg"
                  alt=""
                />
                <div class="frame-img">
                  <img src="/images/shape.png" alt="" />
                </div>
              </div>
              <div class="text-grid groom">
                <div class="couple-img">
                  <img width="100" height="100" src="/images/cd.png" alt="" />
                </div>
                <h3>Ái Trinh</h3>
                <ul class="p-0">
                  <li>
                    <a
                      href="https://www.facebook.com/skynuel.hoang/"
                      target="_blank"
                      ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com" target="_blank"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/trynh_helen/"
                      target="_blank"
                      ><i class="fa fa-instagram" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
                <p>
                  Cô gái đến từ thành phố biển Phan Thiết. Là cô gái vui vẻ, hòa
                  đồng với mọi người và lúc nào cũng nở nụ cười trên môi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-accessibilities">
      <div class="container">
        <div class="row button-accessibilities">
          <div class="col col-lg-12">
            <div class="text-center btn-container">
              <a
                href="#rsvp"
                class="accessibility-btn red-btn album btn btn-danger btn-lg"
              >
                <span class="content-button">
                  <i class="fa-solid fa-message"></i>
                  &nbsp; Gửi lời chúc
                </span>
              </a>
              <a
                href="javascript:void(0)"
                class="accessibility-btn red-btn album btn btn-danger btn-lg buttonDonate"
              >
                <span class="content-button">
                  <i class="fa-solid fa-sack-dollar" />
                  &nbsp; Mừng cưới
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <button id="play-button" class="play-button" @click="togglePlaying">
      <i class="fas" :class="playing ? 'fa-pause' : 'fa-play'"></i>
    </button>
    <div class="player-secondary-content">
      Click vào đây nếu bạn muốn phát nhạc!
    </div>
    <div class="blur">
      <span class="arrow"><i class="fa-solid fa-angle-down"></i></span>
      <span class="arrow" style="top: 18px">
        <i class="fa-solid fa-angle-down"></i>
      </span>
    </div>

    <div id="menu-access" class="">
      <div class="btn-menu-open" style="display: none">
        <img src="/svg/menu-open.svg" alt="" />
      </div>
      <div class="btn-menu-close" style="display: block">
        <img src="/svg/menu-close.svg" alt="" />
      </div>
      <ul class="p-0 m-0 list-menu-icon" style="opacity: 1">
        <li class="text-center">
          <a href="#rsvp" class="text-white">
            <span class="content-button tooltipBtn">
              <span class="tooltiptext" style="">Gửi lời chúc</span>
              <img
                class="access-icon"
                src="https://cdn.biihappy.com/ziiweb/images/static/common/wishes.png"
                alt=""
              />
            </span>
          </a>
        </li>

        <li class="text-center buttonDonate">
          <a href="#donate" class="text-white">
            <span class="content-button tooltipBtn">
              <span class="tooltiptext" style="">Mừng cưới</span>
              <img
                class="access-icon"
                src="https://cdn.biihappy.com/ziiweb/images/static/common/money_bag.png"
                alt=""
              />
            </span>
          </a>
        </li>
      </ul>
    </div>

    <!-- <DonateModel /> -->
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { handleMenu } from "./assets/js/handle-menu";
import DonateModel from "./components/DonateModel.vue";

const date = new Date("2024-09-26T00:00:00.000Z");
const countdownRef = ref("");
const loading = ref(false);
const playing = ref(false);
let audio = new Audio(
  "https://cdn.biihappy.com/ziiweb/wedding-musics/IDo-911.mp3"
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
function showRecommendPlayMusic() {
  const playerSecondaryContent = document.getElementsByClassName(
    "player-secondary-content"
  )[0] as HTMLElement;

  setTimeout(() => {
    playerSecondaryContent.classList.add("transform-0");

    setTimeout(() => {
      playerSecondaryContent.classList.remove("transform-0");
    }, 2000);
  }, 1000);
}

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000)
  countTime();
  handleMenu();
  showRecommendPlayMusic();
});
</script>

<style lang="scss">
:root {
  --main-color: white;
  --name-color: white;
  --play-color: green;
  --arrow-color: #41464b;
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
  z-index: 2;

  .fas {
    color: var(--play-color);
  }
}
.transform-0 {
  opacity: 1 !important;
  transform: translate3d(0, 0, 0) !important;
}

.player-secondary-content {
  opacity: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: fixed;
  bottom: 50px;
  left: 1rem;
  width: 310px;
  background: #fff;
  height: 40px;
  padding: 8px 11px 8px 50px;
  border: 1px solid #df4759;
  border-radius: 30px;
  z-index: 1;
  font-size: 14px;
  transition: all 200ms ease-in;
  font-family: arial;
  font-weight: 200;
  color: #000;
}

.carousel-item {
  height: 100vh;

  img {
    height: 100%;
    object-fit: contain;
  }
}

.section-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .section-wrapper {
    font-size: 40px;

    .section-wrapper-name {
      font-weight: 100;
      margin-bottom: 0px;
      box-sizing: border-box;
      color: var(--name-color, #333);
      font-family: "Dancing Script", cursive;
      font-optical-sizing: auto;
      font-style: normal;
      text-shadow: -1px 0 #333, 1px 0 #333, 0 -1px #333, 0 1px #333;

      .main-title {
        font-size: 70px;
        margin-bottom: 0px;
        font-family: "Great Vibes", cursive;
        color: red;
        text-shadow: -1px 0 var(--main-color), 1px 0 var(--main-color),
          0 -1px var(--main-color), 0 1px var(--main-color);
      }

      .fa-heart {
        gap: 3px;
        margin: 0 0.5rem;
        color: red;
        font-size: 2rem;
        text-shadow: -1px 0 white, 1px 0 white, 0 -1px white, 0 1px white;
      }

      .sm {
        font-size: 1.8rem;
      }
    }

    .section-wrapper-date {
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
  left: 50%;
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

<style lang="scss">

@import url("./assets/css/style.scss");
</style>
