<template>
<section class="footer_main">
    <section class="footer_top">
        <section class="per">
            <img  class="imgc" src="./icons/icons8-timer-15.png" alt=""> Hızlı Gönderi
        </section>
        <section class="per">
            <img class="imgc" src="./icons/icons8-needle-15.png" alt="">Mağazadan Değişim
        </section>
        <section class="per">
           <img class="imgc" src="./icons/icons8-open-box-24.png" alt=""> Mağazada Ücretsiz Tadilat
        </section>
        <section class="per">
            <img class="imgc" src="./icons/icons8-calendar-15.png" alt=""> Mağazadan Ücretsiz Teslimat
        </section>
        <section class="per">
            <img class="imgc" src="./icons/icons8-needle-15.png" alt=""> Kolay İade
        </section>
    </section>
    <section>
        <section class="footer_middle">
                <section class="footer">
                    <h4>Kurumsal</h4>
                    <ul>
                        <li>Hakkımızda</li>
                        <li>Franchising</li>
                        <li>Kurumsal Satış</li>
                        <li>İnsan Kaynakları</li>
                        <li>Özel Dikim</li>
                        <li>Çeyiz & Home Bayilik</li>
                    </ul>
                    <img src="https://avatars.mds.yandex.net/i?id=47ffbbf67415aa93952adb67abf7ba2a7a3ba845-4935356-images-thumbs&n=13&exp=1" alt="">
                </section>
                <section class="footer">
                    <h4>Yardım</h4>
                    <ul>
                        <li> <a href="#">Kampanya Bilgilendirme</a></li>
                        <li><a href="#">Ödeme Seçenekleri</a></li>
                        <li><a href="#">Teslimat</a></li>
                        <li><a href="#">İade ve Değişim</a></li>
                        <li><a href="#">Sıkça Sorulan Sorular</a></li>
                        <li><a href="#">Takım Elbise Kalıpları</a></li>
                        <li><a href="#">Ceket Kalıpları</a></li>
                        <li><a href="#">Bedenini Bul</a></li>
                    </ul>
                    
                </section>
                <section class="footer">
                    <img class="abdu" src="https://www.upload.ee/image/14662288/dene.png" alt="">
                </section>
                <section class="footer">
                    <h4>Bizi Takip Edin</h4>
                    <ul>
                        <li><i class='bx bxl-facebook-circle' ></i> Facebook</li>
                        <li><i class='bx bxl-instagram-alt' ></i> İnstagram</li>
                        <li><i class='bx bxl-pinterest-alt' ></i> Pinterest</li>
                        <li> <i class='bx bxl-youtube' ></i> Youtube</li>
                        <li> <i class='bx bxl-blogger' ></i> Çeyiz Blog</li>
                    </ul>
                </section>
        </section>
    </section>
</section>
</template>

<style scoped>
.footer_main{
    margin-top: 25px;
}
.footer_top{
    width:100%;
    display: flex;
    justify-content: space-evenly;
}
.per{
    margin-left:55px;
    font-size: 18px;
}
.per i{
    color:rgba(167, 167, 167, 0.526);
}
.footer_middle{
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-top: 25px;
    border-top: 1px solid gray;
    padding-top: 20px;
    justify-content: space-around;
}
.footer{
    widows: 30%;
}
.footer ul li{
    list-style: none;
}
.footer img{
    width:80px;
    margin-left: 25px;
}
.footer h4{
    font-weight: bold;
}
.abdu{
    width: 254px !important;
}
.imgc{

}
</style>
