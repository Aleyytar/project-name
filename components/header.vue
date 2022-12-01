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

<style scoped>
  .top_main{
    width: 100%;
  }
  .top{
    display: block;
    widows: 100%;
    height: 35px;
    background: rgb(85, 147, 142);
    color: white;
    text-align: center;
    font-family: 'Poppins';
    font-weight: bold;
    line-height: 35px;
    cursor: pointer;
  }
  @media screen and (max-width: 750px) {
    .top{
       background-color: #59CE8F !important;
       cursor: pointer;
    }
 }
  .main_header{
    width: 100%;
    height: 90px;
  }
.header_top{
  display: flex;
  width: 78%;
  margin: 0 auto;
  margin-top: 45px;
  justify-content: space-between;
}
.header_top .logo img{
 height: 60px;
 cursor: pointer;

}
.header_top .search{
  width: 20%;
  display: flex;
}
.header_top .search input{
  width: 100%;
  padding: 10px;
  border:none;
  height: 35px;
  border-bottom: 1px solid gray;
  outline: none;
}
.search i{
  margin-left: -28px;
  margin-top: 5px;
  font-size: 30px;
  
}

.search input::placeholder{
  color:black;
  font-weight: bold;
  font-family: 'Poppins';
}
.right_bar{
  display: flex;
}
.right_bar li{
  list-style: none;
  margin-left: 5px;
  padding: 5px;
}
.right_bar li a{
  text-decoration: none;
  color: black;
}
.line{
  width: 1px;
  background: gray;
  height: 20px;
  padding: 0px !important;
  margin-top: 8px;
}
</style>