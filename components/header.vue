<script>
export default {
  data() {
    return {
      sonuc: 0,
    }
  },
  methods: {
    giris(){
      sonuc = 1;
      this.$emit('submit', sonuc);
      console.log("test");
    }
  }
};
</script>

<template>
<section class="top_main">
  <section class="top">500 TL ve  Üzeri Alışverişlerde Ücretsiz Kargo</section>
  <section class="main_header">
    <section class="header_top">
        <section @click="$emit('login-form', 2)" class="logo">
          <img  src="https://kigili.akinoncdn.com/static_omnishop/kig522/assets/img/logo.png" alt="">
        </section>
        <section class="search">
          <input type="text" placeholder="ara"><i class='bx bx-search-alt-2'></i>
        </section>
        <section class="right_bar">
          <li><a href="#" @click="$emit('login-form', 1)">Giriş Yap</a></li>
          <li class="line"></li>
          <li><a href="#" @click="$emit('login-form', 3)">Üye Ol</a></li>
          <li><a href="#"><i class='bx bxs-basket' ></i></a></li>
        </section>
    </section>
  </section>
</section>
</template>