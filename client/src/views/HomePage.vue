<template>
    <div class="not_page_wrapper">        
        <div class="not_page">
            <h1>Добро пожаловать!</h1>
            <router-link to='/all' class="main_btn">Информация по объектам титульного строительства</router-link>
            <router-link to='/more/moreinfo' class="main_btn">Информация по абонентам объектов титульного строительства</router-link>
        </div>
    </div>
</template>

<style>
    .not_page_wrapper {
        background: rgb(174,214,238);
        background: radial-gradient(circle, rgba(174,214,238,1) 0%, rgba(148,233,232,1) 100%);
        position: relative;
        left: 2%;
        max-width: 100%;
        width: 90vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .not_page {
        text-align: center;
        position: relative;
        display: flex;
        flex-flow: column nowrap;
    }
    .main_btn {
        margin: 1% auto;
    }
    .not_page a:hover {
        background-color: #94fd94;
        color: black;
    }
    .info {
        font-size: 1.2rem;
        background: -webkit-linear-gradient(#333333, #239428);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .main_btn {
        border-radius: 25px;
        color: black;
    }
    @media screen and (max-width:1840px) {
        .not_page_wrapper {
            margin-top: 5%;
        }
    }
</style>