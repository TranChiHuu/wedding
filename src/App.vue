<template>
  <Transition :duration="1000">
    <main class="hearts-loader" v-if="loading">
      <div class="back"></div>
      <div class="heart-item"></div>
    </main>
    <main v-else>
      <section id="top">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
          data-interval="4000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/images/couple/LEE_8753.jpg"
                class="d-block w-100"
                alt="/KAH00777.jpg"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/images/couple/KAH00907.jpg"
                class="d-block w-100"
                alt="/KAH00850.jpg"
              />
            </div>
            <div class="carousel-item">
              <img
                src="/images/couple/LEE_8963.jpg"
                class="d-block w-100"
                alt="/KAH00716.jpg"
              />
            </div>
          </div>
        </div>
        <div class="text-center section-container">
          <div class="section-wrapper">
            <div>
              <p
                class="section-wrapper-name sm"
                style="font-family: Great Vibes, cursive"
              >
                Save the Date
              </p>
              <br />
              <br />
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
              25.09.2024
              <hr />
              <p style="font-size: 2rem; margin-bottom: 0">
                Ngày : Giờ : Phút : Giây
              </p>
              <span id="countdown"></span>
            </div>
          </div>
        </div>
      </section>

      <section class="couple-section py-5" id="couple">
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

                  <i class="fas fa-heart" style="color: red"></i>
                </div>
                <div class="middle-couple-pic">
                  <img src="/images/couple/KAH01078.jpg" alt="" />
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
                    Cô gái đến từ thành phố biển Phan Thiết. Là cô gái vui vẻ,
                    hòa đồng với mọi người và lúc nào cũng nở nụ cười trên môi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-accessibilities py-5">
        <div class="container">
          <div class="row button-accessibilities">
            <div class="col col-lg-12">
              <div class="text-center btn-container">
                <a
                  href="#wish"
                  class="accessibility-btn red-btn album btn btn-danger btn-lg"
                >
                  <span class="content-button">
                    <i class="fa-solid fa-message"></i>
                    &nbsp; Gửi lời chúc
                  </span>
                </a>
                <a
                  href="#donate"
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
      <section class="story-section section-padding py-5" id="story">
        <div class="container">
          <div class="row">
            <div class="title text-center my-5">Chuyện tình yêu</div>
          </div>

          <div class="row">
            <div class="col col-xs-12">
              <div class="story-timeline">
                <div class="round-shape"></div>
                <div class="row">
                  <div class="col-6">
                    <div class="story-text right-align-text">
                      <h3>Định mệnh gặp nhau</h3>
                      <p>
                        Ngày ấy chỉ vô tình chúng mình làm cùng 1 nơi, cùng chơi
                        chung Team. Khi đó chúng mình bằng tuổi nhau, cứ thế
                        xưng hô “Cậu” với “Tớ” mà bằng cách nào đó đã đưa đẩy
                        chúng mình dính vào nhau.
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="img-holder">
                      <img
                        src="/images/couple/KAH02110.jpg"
                        alt=""
                        class="img img-responsive"
                      />
                      <div class="story-shape-img">
                        <img src="/images/shape1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="img-holder right-align-text left-site">
                      <img
                        src="/images/couple/KAH02037.jpg"
                        alt=""
                        class="img img-responsive"
                      />
                      <div class="story-shape-img">
                        <img src="/images/shape1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-6 text-holder">
                    <span class="heart"> <i class="fas fa-heart"></i> </span>
                    <div class="story-text">
                      <h3>Lửa gần rơm lâu ngày cũng bén</h3>
                      <p>
                        Vài tháng sau, anh ngỏ ý “Cậu đồng ý làm bạn gái Tớ
                        nhé”, mình đã đồng ý ( dù ngày xưa đặt mẫu người yêu là
                        sẽ không quen người yêu bằng tuổi )
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 text-holder right-heart">
                    <span class="heart">
                      <i class="fa-regular fa-calendar-check"></i>
                    </span>
                    <div class="story-text right-align-text">
                      <h3>Tình yêu là sự cộng hưởng</h3>
                      <p>
                        Và rồi, chúng mình có cơ hội tìm hiểu nhau, yêu thương
                        nhau và cùng nhau vượt qua nhiều kí ức của tuổi trẻ.
                      </p>
                      <p>
                        Sự quan tâm, chia sẻ và đồng hành đã giúp chúng mình đến
                        gần nhau hơn.
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="img-holder right-align-text">
                      <img
                        src="/images/couple/LEE_8745.jpg"
                        alt=""
                        class="img img-responsive"
                      />
                      <div class="story-shape-img">
                        <img src="/images/shape1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="img-holder video-holder left-site">
                      <img
                        src="/images/couple/KAH01560.jpg"
                        alt=""
                        class="img img-responsive"
                      />
                      <div class="story-shape-img">
                        <img src="/images/shape1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-6 text-holder">
                    <span class="heart">
                      <i class="fa-solid fa-dove"></i>
                    </span>
                    <div class="story-text">
                      <h3>Vượt qua tiêu cực</h3>
                      <p>
                        Trong tình yêu, mặc dù chúng mình có nhiều khuyết điểm
                        nhưng sự thật trên đời này không ai hợp ai hoàn toàn cả,
                        vì vậy chúng mình chọn cách chia sẻ, nhẫn nại và thay
                        đổi điều đó tích cực lên mỗi ngày.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 text-holder right-heart">
                    <span class="heart">
                      <i class="fa-regular fa-calendar-check"></i>
                    </span>
                    <div class="story-text right-align-text">
                      <h3>Giây phút quyết định</h3>
                      <p>
                        Sau hơn 5 năm - một hành trình không phải quá dài, nhưng
                        đủ cho chúng mình nhận ra rất nhiều điều. Hạnh phúc
                        không phải điều gì quá cao siêu hay xa vời, với Em và
                        Anh đơn giản chỉ là yêu và được yêu 💖.
                      </p>
                      <p>
                        Chúng mình quyết định chính thức về làm con dâu, con rể
                        của gia đình, đi chung một con đường, một chặng hành
                        trình mà nơi ấy không chỉ có tình yêu, mà còn có cả sự
                        thấu hiểu và trách nhiệm.
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="img-holder video-holder">
                      <img
                        src="/images/couple/KAH01387.jpg"
                        alt=""
                        class="img img-responsive"
                      />
                      <div class="story-shape-img">
                        <img src="/images/shape1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="img-holder video-holder left-site">
                      <img
                        src="/images/couple/KAH01229.jpg"
                        alt=""
                        class="img img-responsive"
                      />
                      <div class="story-shape-img">
                        <img src="/images/shape1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-6 text-holder">
                    <span class="heart">
                      <i class="fa-solid fa-dove"></i>
                    </span>
                    <div class="story-text">
                      <h3>Ngày chung đôi</h3>
                      <p>
                        Và bây giờ chúng ta cùng nhau bước sang chương mới với
                        một cương vị mới đặc biệt hơn.
                      </p>
                      <p>
                        Chặng đường phía trước của chúng mình còn rất dài, sẽ
                        gặp những khó khăn, trở ngại nhưng chúng ta cùng vun
                        đắp, vượt qua mọi khó khăn trong cuộc sống “hạnh phúc
                        đến già“ Cậu nhé!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col offset-lg-6 col-lg-6 col-12 text-holder">
                    <span class="heart">
                      <i class="fa-solid fa-ring"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>

      <section id="invitation" class="section-invitation">
        <div class="container">
          <div class="section-heading">
            <h2 class="title text-center">
              <p>Sự kiện cưới</p>
            </h2>
          </div>
          <p
            style="font-family: 'Great Vibes', cursive; font-size: large"
            class="text-center"
          >
            Chúng mình mong rằng <br />
            bạn sẽ tham gia cùng chúng mình để có những giây phút tuyệt vời
          </p>
          <div class="invitation">
            <div class="invitation-container">
              <div class="invitation-card">
                <div><b>Lễ Vu Quy</b></div>
                <img src="/images/couple/KAH00907.jpg" alt="" />
                <h3 class="card-title">Nhà Hàng Tiệc Cưới Minh Thuỳ</h3>
                <address class="">
                  <p>Khu Phố 15, P.Mũi Né, Tp.Phan Thiết, Bình Thuận</p>
                </address>
                <div class="invitation-body">
                  <div class="invi_time">
                    <p class="fw-bold">
                      Vào lúc
                      <span class="invi_hours"> 18:00 </span>
                    </p>
                    <div class="invi_group_time">
                      <span class="invi_date_text"> Thứ Tư </span>
                      <span class="invi_date_number">
                        <p class="invi_date">25</p>
                        /
                        <p class="invi_month">09</p>
                      </span>
                      <span class="invi_year_text"> 2024 </span>
                    </div>

                    <p class="invi_amlich">
                      Nhằm ngày 23 tháng 08 năm Giáp Thìn
                    </p>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <a
                    href="https://maps.app.goo.gl/JsNb1AeRY7LvsnvN9"
                    target="_blank"
                  >
                    Bản đồ
                  </a>
                </div>
              </div>
              <div class="invitation-card">
                <div><b>Lễ Tân Hôn</b></div>
                <img src="/images/couple/KAH01560.jpg" alt="" />
                <h3 class="card-title">Sân Tô Gia Phát</h3>
                <address class="">
                  <p>Khắc Khoan, Phú Nghĩa, Bù Gia Mập, Bình Phước</p>
                </address>
                <div class="invitation-body">
                  <div class="invi_time">
                    <p class="fw-bold">
                      Vào lúc
                      <span class="invi_hours"> 11:00 </span>
                    </p>
                    <div class="invi_group_time">
                      <span class="invi_date_text"> Thứ Bảy </span>
                      <span class="invi_date_number">
                        <p class="invi_date">28</p>
                        /
                        <p class="invi_month">09</p>
                      </span>
                      <span class="invi_year_text"> 2024 </span>
                    </div>

                    <p class="invi_amlich">
                      Nhằm ngày 26 tháng 08 năm Giáp Thìn
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <a
                    href="https://maps.app.goo.gl/PyCW1SxCmC7GrHR46"
                    target="_blank"
                  >
                    Bản đồ
                  </a>
                </div>
              </div>
              <div class="invitation-card">
                <div><b>Lễ Báo Hỷ</b></div>
                <img src="/images/couple/KAH02110.jpg" alt="" />
                <h3 class="card-title">Nhà Hàng Làng Nướng Nam Bộ</h3>
                <address class="">
                  <p>302A Đ.Tô Hiến Thành, P.15, Q10, TP.Hồ Chí Minh</p>
                </address>
                <div class="invitation-body">
                  <div class="invi_time">
                    <p class="fw-bold">
                      Vào lúc
                      <span class="invi_hours"> 18:00 </span>
                    </p>
                    <div class="invi_group_time">
                      <span class="invi_date_text"> Thứ Bảy </span>
                      <span class="invi_date_number">
                        <p class="invi_date">12</p>
                        /
                        <p class="invi_month">10</p>
                      </span>
                      <span class="invi_year_text"> 2024 </span>
                    </div>

                    <p class="invi_amlich">
                      Nhằm ngày 10 tháng 09 năm Giáp Thìn
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <a
                    href="https://maps.app.goo.gl/MDgtpkzBQU1a1vFD8"
                    target="_blank"
                  >
                    Bản đồ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="videosection">
        <h2 class="title text-center mt-5">
          <p>Video cưới của chúng mình</p>
        </h2>

        <video
          controls
          class="w-100"
          style="background-color: black"
          src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/Slideshow.mp4"
        >
          <source
            src="https://trinhhuu.s3.ap-southeast-1.amazonaws.com/Slideshow.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <section class="album-section">
        <h2 class="title text-center mt-5">
          <p>Album cưới của chúng mình</p>
        </h2>
        <div class="album" id="album">
          <div id="guide">
            <div class="guide-text">Nhấn vào hình để xem rõ hơn nhé ❤️</div>
          </div>
          <div class="card" v-for="image in images" :key="image">
            <div class="card-image">
              <a
                :href="`/images/couple/${image}`"
                data-fancybox="gallery"
                data-caption="Caption Images 1"
              >
                <img :src="`/images/couple/${image}`" :alt="image" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 donate-section section-bg-affect" id="donate">
        <div class="container-fluid">
          <div class="w-100">
            <div class="title text-center m-0">Hộp mừng cưới</div>
            <p class="section-sub-title mb-4 text-center">
              Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt
              như đám cưới của chúng tôi.
            </p>
            <div class="row justify-content-around donate-box mb-1">
              <div class="col-xs-12 col-md-6 mb-4 donate-wrap">
                <div class="donate-card p-3 rounded text-center">
                  <strong class="d-block sub-title mb-2 text-uppercase"
                    >Chú rể</strong
                  >
                  <img
                    class="qr-code-image m-auto mb-2"
                    src="/images/QR.png"
                    height="150"
                  />

                  <p class="mb-1">Ngân hàng: <strong>TPBank</strong></p>
                  <p class="mb-1">
                    Tên tài khoản: <strong>3868 8638 888</strong>
                  </p>
                  <p class="mb-1">
                    Số tài khoản: <strong>Trần Chí Hữu</strong>
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 donate-wrap">
                <div class="donate-card p-3 rounded text-center">
                  <strong class="d-block sub-title mb-2 text-uppercase"
                    >Cô dâu</strong
                  >

                  <img
                    class="qr-code-image m-auto mb-2"
                    src="/images/QR1.png"
                    height="150"
                  />

                  <p class="mb-1">Ngân hàng: <strong>TechcomBank</strong></p>
                  <p class="mb-1">
                    Tên tài khoản: <strong>19030772691014</strong>
                  </p>
                  <p class="mb-1">
                    Số tài khoản: <strong>Hoàng Thị ÁI Trinh</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="wish" class="py-5 px-3">
        <div class="page-title">
          <h2>
            Sổ Lưu Bút<span> <i class="fas fa-heart"></i></span>
          </h2>
        </div>
        <p class="px-4 text-center">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
          đám cưới của chúng mình nha!
        </p>
        <form
          @submit.prevent="saveWish"
          class="col-sm-12 row justify-content-center"
        >
          <div class="col-md-10">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <textarea
                  type="message"
                  class="form-control"
                  rows="4"
                  required
                  placeholder="Lời chúc của bạn"
                  v-model="wish.wishText"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-9 col-sm-9 pl-0 mt-3">
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    id="name"
                    placeholder="Tên của bạn"
                    required
                    v-model="wish.wishName"
                  />
                </div>
              </div>
              <div class="col-md-3 col-sm-3 mt-3">
                <button type="submit" class="btn btn-primary w-100">Gửi</button>
              </div>
            </div>

            <div
              v-if="messages.length > 0"
              class="text-left mt-4 p-4"
              style="border: 2px solid red"
            >
              <div
                v-for="(message, index) in messages"
                :key="index"
                class="mb-3"
                style="background-color: gold; padding: 7px; border-radius: 5px"
              >
                <div style="font-weight: 500">{{ message.name }}:</div>
                <span>{{ message.text }}</span>
              </div>
            </div>
          </div>
        </form>
      </section>

      <button id="play-button" class="play-button" @click="togglePlaying">
        <i class="fas" :class="playing ? 'fa-pause' : 'fa-play'"></i>
      </button>
      <div class="player-secondary-content">Nhấn vào đây để nghe nhạc 🎶💖</div>

      <div id="scrollBottom">
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
            <a href="#wish">
              <span class="content-button tooltipBtn">
                <span class="tooltiptext" style="">Gửi lời chúc</span>
                <i class="fa-solid fa-message"></i>
              </span>
            </a>
          </li>

          <li class="text-center buttonDonate">
            <a href="#donate">
              <span class="content-button tooltipBtn">
                <span class="tooltiptext" style="">Mừng cưới</span>
                <i class="fa-solid fa-sack-dollar" /> </span
            ></a>
          </li>

          <li class="text-center" id="scrollBtn">
            <a href="#top">
              <span class="content-button tooltipBtn">
                <span class="tooltiptext" style="">Lên đầu trang</span>
                <i class="fa-solid fa-jet-fighter-up"></i> </span
            ></a>
          </li>
        </ul>
      </div>

      <!-- <DonateModel /> -->

      <section id="footer" class="mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center" style="font-family: Signatie">
              <h2 class="full">
                Chí Hữu
                <i class="fas fa-heart" style="color: red"></i>
                Ái Trinh
              </h2>
              <h2 class="short">
                Hữu <i class="fas fa-heart" style="color: red"></i> Trinh
              </h2>
            </div>
          </div>
          <div class="text-center">
            <p>Made by Michael (Huu Tran) in 2024</p>
          </div>
        </div>
      </section>
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
import { images } from "./assets/js/constant";
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

const date = new Date("2024-09-25T00:00:00.000Z");
const loading = ref(true);
const playing = ref(false);
const showedGuide = ref(false);
const messages: Ref<Wish[]> = ref([]);
const wish = reactive({
  wishName: "",
  wishText: "",
});
let audio = new Audio(
  "https://trinhhuu.s3.ap-southeast-1.amazonaws.com/videoplayback.m4a"
);

function saveWish() {
  addDoc(collection(db, "messages"), {
    name: wish.wishName,
    text: wish.wishText,
    date: Date.now(),
  });
  wish.wishName = "";
  wish.wishText = "";
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
  playing.value = true;
  audio.play();
}
function pauseAudio() {
  playing.value = false;
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
    const countdown = document.getElementById("countdown");
    if (countdown) {
      countdown.innerHTML = formattedTime;
    }
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

// function snow() {
//   let defaultParams: SnowflakeOptions = {
//     count: 60,
//     minRadius: 10,
//     maxRadius: 23,
//     minSpeed: 3,
//     maxSpeed: 6,
//     text: "💖",
//     color: "#99ccff",
//     zIndex: "1000",
//   };

//   const ICON = ["💞", "❤️", "💖"];
//   const index = Math.floor(Math.random() * ICON.length);
//   const icon = ICON[index];
//   defaultParams.text = icon;
//   new Snowfall(defaultParams);
// }

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

function toggleScrollBtn() {
  const scrollBtn = document.getElementById("scrollBtn");

  if (!scrollBtn) {
    return; // Exit if no button exists in DOM
  }
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    scrollBtn.style.display = "block"; // Show the button if not at the top
  } else {
    scrollBtn.style.display = "none"; // Hide the button when at the top
  }
}

function checkBottom() {
  const scrollBottomBtn = document.getElementById("scrollBottom");

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  if (!scrollBottomBtn) {
    return; // Exit if no button exists in DOM
  }
  // Check if the user has scrolled to the bottom of the page
  if (scrollTop + windowHeight >= documentHeight) {
    scrollBottomBtn.style.display = "none"; // Hide the button at the bottom
  } else {
    scrollBottomBtn.style.display = "block"; // Show the button if not at the bottom
  }
}

function introAlbum() {
  if (showedGuide.value) {
    return;
  }
  const targetElement = document.getElementById("album");
  const guide = document.getElementById("guide");

  if (!targetElement || !guide) {
    return;
  }
  const rect = targetElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top >= -50 && rect.top <= windowHeight) {
    guide.classList.add("show");
    showedGuide.value = true;
    setTimeout(() => {
      guide.classList.remove("show");
    }, 2000);
  } else {
    showedGuide.value = false;
    guide.classList.remove("show");
  }
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

  // Listen to scroll events
  window.onscroll = function () {
    toggleScrollBtn();
    checkBottom();
    introAlbum();
  };
  const imgs = document.getElementsByTagName("img");
  Array.from(imgs).forEach((img) => {
    img.classList.add("lozad");
  });
});
</script>

<style lang="scss">
@import url("./assets/css/style.scss");
</style>

<style>
#scrollBtn {
  display: none;
}

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
