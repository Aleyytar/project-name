<template>
    <section class="login_main">
        <h3>Üye Ol</h3>
        <section class="inputs">
            <p style="font-size:12px;">Vereceğiniz kişisel bilgileriniz satın alma ve üyelik işlemlerinizin gerçekleştirmesi süreçlerinde tarafımızca işlenecektir. Kişisel Verilerin Korunması Hakkında Bilgilendirme metnine buradan ulaşabilirsiniz.</p>
            <section class="rel">
                <input type="text" placeholder="Adınız">
                <input type="text" placeholder="Soyadını">
            </section>
            <input type="mail" placeholder="E-posta">
            <input type="number" placeholder="Telefon">
            <input type="password" placeholder="Şifre">
            <input class="submite" type="submit" value="Üye ol">
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
    .rel{
        display:flex;
        justify-content: space-between;
        
    }
    .rel input{
        width: 47%;
    }
    
    </style>
    