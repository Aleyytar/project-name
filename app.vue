


<script setup>
import headerBottom from './components/headerbottom.vue'
import banner from './components/banner.vue'
import banner2 from './components/banner2.vue'
import ccategory from './components/category.vue'
import item from './components/item.vue'
import bottomBanner from './components/bottomBanner.vue'
import footers from './components/footers.vue'
import giris from './components/giris.vue'
import uyeol from './components/uyeol.vue'
</script>
<script>
import MainHeader from './components/header.vue'
export default {
  data() {
    return {
      home: true,
      girise: false,
      uyeole: false,
    }
  },
  methods: {
    login(sonuc) {
      if(sonuc == 1){
        this.home = false;
        this.uyeole = false;
        this.girise = true;

      }else if(sonuc == 2){
        this.girise = false;
        this.uyeole = false;
        this.home = true;
      }else{
        this.girise = false;
        this.home = false;
        this.uyeole = true;
      }
      return null;
    },
    },
    components: {
      MainHeader
    },
}
</script>
<template>
      <MainHeader v-on:login-form="login($event)"/>
      <headerBottom/>
      <div v-if="home" class="test">
        <banner />
        <banner2 />
        <ccategory />
        <item />
        <bottomBanner />
      </div>
      <section v-if="girise">
        <giris />
      </section>
      <section v-if="uyeole">
        <uyeol />
      </section>
      <footers />

</template>


<style scoped>

</style>

