<script setup lang="ts"></script>

<template>
  <section>
    <div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00009.jpg" class="d-block w-100" alt="/KAH00850.jpg" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00716.jpg" class="d-block w-100" alt="/KAH00716.jpg" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/KAH00777.jpg" class="d-block w-100" alt="/KAH00777.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.carousel-item {
  height: 100vh;

  img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
