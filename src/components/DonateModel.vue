<template>
  <!-- <div id="donate-modal" class="donate-modal" style="display: block">
    <div class="donate-modal-content">
      <div class="donate-modal-header">
        <span class="donate-modal-close">×</span>
        <strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-coin"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
            ></path>
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            ></path>
            <path
              d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            ></path>
          </svg>
          <span>Hộp mừng cưới</span>
        </strong>
      </div>
      <div class="donate-modal-body">
        <div class="donate-box">
          <div class="donate-card">
            <h3>Mừng cưới đến chú rể</h3>
            <img
              class="qr-code-image"
              src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/49bc348db7eb284d9fc249b9d958893b.jpeg"
            />
            <p>Ngân hàng: <strong>VPBank</strong></p>
            <p>Tên tài khoản: <strong>12345678910</strong></p>
            <p>Số tài khoản: <strong>Hoàng Kiến Văn</strong></p>
            <p>Chi nhánh: <strong>TP.HCM</strong></p>

            <div class="cryptos-box">
              <h4>Thông tin ví Crypto</h4>
              <div class="cryptos-items">
                <div
                  class="crypto-item"
                  data-address="bitcoin-address-demo"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  data-id="BTC"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  />
                </div>
                <div
                  class="crypto-item"
                  data-address="eth-address-demo"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  data-id="ETH"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  />
                </div>
                <div
                  class="crypto-item"
                  data-address="ustd-address-demo"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                  data-id="USDT"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                  />
                </div>
                <div
                  class="crypto-item"
                  data-address="usdc-address-demo"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/18852.png"
                  data-id="USDC"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/18852.png"
                  />
                </div>
              </div>
            </div>
            <div class="cryptos-box-view">
              <h5>
                <span class="coin-img"></span> Địa chỉ
                <span class="coin-id"></span>
              </h5>
              <div>
                <span class="coin-address"></span>
                <div class="coin-qr-code"></div>
              </div>
              <button class="cryptos-box-view-close">Đóng</button>
            </div>
          </div>
          <div class="donate-card">
            <h3>Mừng cưới đến cô dâu</h3>
            <img
              class="qr-code-image"
              src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/24343a45a211dedc5b1b0b57300eaba9.jpeg"
            />
            <p>Ngân hàng: <strong>VPBank</strong></p>
            <p>Tên tài khoản: <strong>12345678910</strong></p>
            <p>Số tài khoản: <strong>Ngô Việt Hoài</strong></p>
            <p>Chi nhánh: <strong>TP.HCM</strong></p>

            <div class="cryptos-box">
              <h4>Thông tin ví Crypto</h4>
              <div class="cryptos-items">
                <div
                  class="crypto-item"
                  data-address="dfhdfhdfh"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  data-id="BTC"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  />
                </div>
                <div
                  class="crypto-item"
                  data-address="dfhdfh"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                  data-id="BNB"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                  />
                </div>
                <div
                  class="crypto-item"
                  data-address="dfhdfhdf"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/18852.png"
                  data-id="USDC"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/18852.png"
                  />
                </div>
                <div
                  class="crypto-item"
                  data-address="dfhdfhdfh"
                  data-img="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
                  data-id="AVAX"
                >
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
                  />
                </div>
              </div>
            </div>
            <div class="cryptos-box-view">
              <h5>
                <span class="coin-img"></span> Địa chỉ ví
                <span class="coin-id"></span>
              </h5>
              <div>
                <span class="coin-address"></span>
                <div class="coin-qr-code"></div>
              </div>
              <button class="cryptos-box-view-close">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
