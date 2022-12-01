<template>
<section class="login_main">
    <h3>Giriş Yap</h3>
    <section class="inputs">
        <input type="text" placeholder="Kullanıcı Adı">
        <input type="password" placeholder="Şifre">
        <input class="submite" type="submit" value="Giriş Yap">
        <p><a href="#" style="float:right; color:black;">Şifremi Unuttum</a></p>
        <p style="text-align:center;">ya da</p>
        <input class="facebook" type="submit" value="Facebook">
        <p style="text-align:center;margin-top:5px;">Üye değilsen</p>
        <p style="text-align:center;"><a href="#" style="color:black;">UYE OLSUN</a></p>
    </section>
</section>
</template>

<style scoped>
.login_main{
    width: 400px;
    height: 500px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 35px;
}
.inputs{
    display:flex;
    flex-direction: column;
}
.inputs input{
    padding: 6px;
    margin-top: 20px;
}
.submite{
    background-color: #48a960;
    border: none;
    color:white;
    padding: 14px !important;
}

.facebook{
    background-color: #42539d;
    text-align: center;
    color:white;
    border: none;
    padding: 14px !important;
}

</style>
