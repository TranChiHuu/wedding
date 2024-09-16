<template>
  <Transition :duration="1000">
    <main class="hearts-loader" v-if="loading">
      <div class="back"></div>
      <div class="heart"></div>
    </main>
    <main v-else id="top" class="pb-5 mb-5">
      <section>
        <div class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00208.jpg" class="d-block w-100"
                alt="/KAH00850.jpg" />
            </div>
            <div class="carousel-item">
              <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00716.jpg" class="d-block w-100"
                alt="/KAH00716.jpg" />
            </div>
            <div class="carousel-item">
              <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00785.jpg" class="d-block w-100"
                alt="/KAH00777.jpg" />
            </div>
          </div>
        </div>
        <div class="text-center section-container">
          <div class="section-wrapper">
            <div>
              <p class="section-wrapper-name sm" style="font-family: 'Great Vibes', cursive;">Save the Date</p>
              <div class="section-wrapper-name">
                <div class="main-title" style="
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                  ">
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
                      <a href="https://www.facebook.com/chishuuwx/" target="_blank"><i class="fa fa-facebook"
                          aria-hidden="true"></i></a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/michaeltran1203/" target="_blank"><i class="fa fa-linkedin"
                          aria-hidden="true"></i></a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/chishuuwx/" target="_blank"><i class="fa fa-instagram"
                          aria-hidden="true"></i></a>
                    </li>
                  </ul>
                  <p>
                    Chàng trai đến từ vùng đất đỏ Bình Phước. Là một chàng trai
                    năng động, ít nói nhưng lại rất tình cảm.
                  </p>
                </div>
                <div class="middle-couple-pic">
                  <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH01078.jpg" alt="" />
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
                      <a href="https://www.facebook.com/skynuel.hoang/" target="_blank"><i class="fa fa-facebook"
                          aria-hidden="true"></i></a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin"
                          aria-hidden="true"></i></a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/trynh_helen/" target="_blank"><i class="fa fa-instagram"
                          aria-hidden="true"></i></a>
                    </li>
                  </ul>
                  <p>
                    Cô gái đến từ thành phố biển Phan Thiết. Là cô gái vui vẻ,
                    hòa đồng với mọi người và lúc nào cũng nở nụ cười trên môi.
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
                <a href="#wish-list" class="accessibility-btn red-btn album btn btn-danger btn-lg">
                  <span class="content-button">
                    <i class="fa-solid fa-message"></i>
                    &nbsp; Gửi lời chúc
                  </span>
                </a>
                <a href="javascript:void(0)" class="accessibility-btn red-btn album btn btn-danger btn-lg buttonDonate">
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

      <section id="wish-list" class="d-flex justify-content-center align-items-center flex-column">
        <div class="page-title">
          <h2>
            Sổ Lưu Bút<span> <i class="fas fa-heart"></i></span>
          </h2>
        </div>
        <p class="px-4 text-center">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
          đám cưới của chúng mình!
        </p>
        <form @submit.prevent="saveWish" class="col-sm-12 row justify-content-center">
          <div class="col-md-10">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <textarea type="message" class="form-control" rows="4" placeholder="Lời chúc của bạn"
                  v-model="wish.wishText"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-9 col-sm-9 pl-0 mt-3">
                <div class="form-group">
                  <input type="name" class="form-control" id="name" placeholder="Tên của bạn" v-model="wish.wishName" />
                </div>
              </div>
              <div class="col-md-3 col-sm-3 mt-3">
                <button type="submit" class="btn btn-primary w-100">Gửi</button>
              </div>
            </div>

            <div v-if="messages.length > 0" class="text-left mt-4 p-4" style="border: 2px solid red">
              <p v-for="(message, index) in messages" :key="index" style="
                  background-color: gold;
                  padding: 7px;
                  border-radius: 5px;
                ">
              <div style="font-weight: 500;">{{ message.name }}: </div>
              <pre>{{ message.text }}</pre>
              </p>
            </div>
          </div>
        </form>
      </section>

      <button id="play-button" class="play-button" @click="togglePlaying">
        <i class="fas" :class="playing ? 'fa-pause' : 'fa-play'"></i>
      </button>
      <div class="player-secondary-content">Nhấn vào đây để nghe nhạc 🎶💖</div>
      <div class="blur">
        <span class="arrow"><i class="fa-solid fa-angle-down"></i></span>
        <span class="arrow" style="top: 18px">
          <i class="fa-solid fa-angle-down"></i>
        </span>
      </div>

      <div id="menu-access" class="">
        <div class="btn-menu-open" style="display: none">
          <i class="fas fa-bars"></i>
        </div>
        <div class="btn-menu-close" style="display: block">
          <i class="fas fa-times"></i>
        </div>
        <ul class="p-0 m-0 list-menu-icon" style="opacity: 1">
          <li class="text-center">
            <a href="#wish-list">
              <span class="content-button tooltipBtn">
                <span class="tooltiptext" style="">Gửi lời chúc</span>
                <i class="fa-solid fa-message"></i>
              </span>
            </a>
          </li>

          <li class="text-center buttonDonate">
            <a href="#wish-list">
              <span class="content-button tooltipBtn">
                <span class="tooltiptext" style="">Mừng cưới</span>
                <i class="fa-solid fa-sack-dollar" /> </span></a>
          </li>

          <li class="text-center buttonDonate">
            <a href="#top">
              <span class="content-button tooltipBtn">
                <span class="tooltiptext" style="">Lên đầu trang</span>
                <i class="fa-solid fa-jet-fighter-up"></i> </span></a>
          </li>
        </ul>
      </div>

      <!-- <DonateModel /> -->
    </main>
  </Transition>
</template>
<script setup lang="ts">
interface Wish {
  id?: string;
  name: string;
  text: string;
  date: number;
}

import { ref, onMounted, reactive, onUnmounted, Ref } from "vue";
import { handleMenu } from "./assets/js/handle-menu";
// import DonateModel from "./components/DonateModel.vue";
// import { Snowfall, SnowflakeOptions } from "./assets/js/snow";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtE6WHI7qcYSwfTkntte5GHoNCMb41b-U",
  authDomain: "wedding-8da77.firebaseapp.com",
  projectId: "wedding-8da77",
  storageBucket: "wedding-8da77.appspot.com",
  messagingSenderId: "318125328474",
  appId: "1:318125328474:web:1abf5311adf368e4dab063",
  measurementId: "G-9TEV0S3QWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const date = new Date("2024-09-26T00:00:00.000Z");
const countdownRef = ref("");
const loading = ref(true);
const playing = ref(false);
const messages: Ref<Wish[]> = ref([]);
const wish = reactive({
  wishName: "",
  wishText: "",
});
let audio = new Audio(
  "https://cdn.biihappy.com/ziiweb/wedding-musics/IDo-911.mp3"
);

function saveWish() {
  addDoc(collection(db, "messages"), {
    name: wish.wishName,
    text: wish.wishText,
    date: Date.now(),
  });
}
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
    }, 4000);
  }, 1000);
}

function slide() {
  let currentSlide = 0;

  setInterval(() => {
    const slides = document.querySelectorAll('.carousel-item');
    const activeSlides = document.querySelectorAll('.carousel-item.active');

    if (activeSlides.length > 0) {
      activeSlides[0].classList.remove('active');
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    currentSlide++;

  }, 4000);

}

function snow() {
  let defaultParams: SnowflakeOptions = {
    count: 50,
    minRadius: 5,
    maxRadius: 15,
    minSpeed: 1,
    maxSpeed: 5,
    text: "💖",
    color: "#99ccff",
    zIndex: "1000",
  };

  const ICON = ["💞", "❤️", "😍", "💖", "🥰"];
  const index = Math.floor(Math.random() * ICON.length);
  const icon = ICON[index];
  defaultParams.text = icon;
  new Snowfall(defaultParams);
}

function handleFireBase() {
  const latestQuery = query(collection(db, "messages"), orderBy("date"));
  const livemessages = onSnapshot(latestQuery, (snapshot) => {
    messages.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        text: doc.data().text,
        name: doc.data().name,
        date: doc.data().date,
      } as Wish;
    });
  });
  onUnmounted(livemessages);
}

onMounted(async () => {
  handleFireBase();
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      loading.value = false;
      resolve();
    }, 2000)
  );
  countTime();
  handleMenu();
  showRecommendPlayMusic();
  // snow();
  slide();
});
</script>

<style lang="scss">
@import url("./assets/css/style.scss");
</style>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-leave-active {
  transition-delay: 0.25s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
