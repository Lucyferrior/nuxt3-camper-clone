<template>
    <ClientOnly>

        <header class="style_headerNav__1B5VI">
            <div class="headroom-wrapper">
                <div
                class="headroom">
                <div class="tnm--desktop">
                    <a 
                        class="logo">
                        <NuxtLink to="/">
                            <img alt="Camper"
                            src="https://www.camper.com/cms/api/assets/tiers-banners-homes/03158e4d-c9ae-4945-8a35-cb1362d17021/camper-logo.svg">
                        </NuxtLink>
                        </a>
                        
                    <div class="alt_kategoriler"><span class="tnm__title cizgili-main ">
                        <a
                               
                                class="kategori-isim cizgililer">
                                <NuxtLink to="/products">
                                    Kadın
                                </NuxtLink>
                            </a>


                        </span></div>
                        <div class="alt_kategoriler"><span class="tnm__title cizgili-main  "><a
                               
                                class="kategori-isim cizgililer "> 
                                <NuxtLink to="/products">
                                    Erkek
                                </NuxtLink>
                            </a>
                            <div class="tnm-highlights"></div>
                        </span>
                    </div>
                    
                    <div class="alt_kategoriler"><span class="tnm__title cizgili-main "><a
                        class="kategori-isim cizgililer">
                                <NuxtLink to="/products">Çocuk
                                    
                                </NuxtLink>
                            </a>
                           
                        </span></div>
                        <div class="alt_kategoriler"><span class="tnm__title cizgili-main "><a
                               
                                 class="kategori-isim cizgililer">
                                 <NuxtLink to="/products">Camperlab</NuxtLink>
                                </a>
                                
                            </span></div>
                            
                    <div class="arama">
                        <a class="sc-dSnXvR dzBcKB last-item">
                            <NuxtLink to="/search-page">
                            <span class="searcherspan">
                                <input type="text"
                                placeholder="ARAMA" class="searcher">
                                <span class="searchericon">
                                    <img alt="Search"
                                        src="https://www.camper.com/cms/api/assets/tiers-banners-homes/33b5eba4-3c7e-4547-805c-8a94b80e73e6/search.svg"
                                        width="17px" height="17px">
                                    </span>
                                </span>
                            </NuxtLink>
                            </a>
                            
                            <span class="cizgili-main"><a href="https://www.camper.com/tr_TR/shops" class="mağaza-bul cizgililer">Mağaza bul</a></span>

                        <div class="hesap">
                            <div class="account-icon cizgili-main"><span class="label cizgililer">Hesabım</span></div>
                        </div>

                        <div class="sc-cGKJhA fTwFWY">
                            <div class="sepet-icon">
                            <a href="/tr_TR/bolsa" class="icon-link">
                                <span class="sepet-sayı">2</span>
                            </a>
                        </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
</ClientOnly>
</template>

<style>
.icon-link:hover{
    background-color: black;
    color: white;
    
    }
@media screen and (min-width: 992px) {
    .sepet-sayı{
        font-size: var(--xsmall-size);
        transform: translate(0);
        position: relative;
    }}
.sepet-sayı{
    font-family: ModerneRegular,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    display: inline-block;
    text-align: center;
    vertical-align: -webkit-baseline-middle;
    color: var(--color-black);
}
@media screen and (min-width: 992px) {
    .icon-link{
        background-size: 16px auto;
        width: 18px;
        background-position: 50% 20%;
    }
 }
.icon-link{
    background: url(@/assets/shop-trigger.svg) 50% no-repeat;
    height: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sepet-icon{
    align-items: center;
    align-self: stretch;
    display: flex;
}
.cizgili-main>.cizgililer::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    border-top: 4px solid red;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    width: 0;
    }
    .cizgili-main:hover>.cizgililer::after {
    width: 100%;
    }

.logo img{
    width:64px;
    height:33px;
}
.headroom{

        position: relative;
        top: 0px;
        left: 0px;
        right: 0px;
        transform: translate3d(0px, 0px, 0px);
        z-index: 99!important;

       
    }
    .tnm--desktop{
        display: flex;
        z-index: 1;
        align-items: center;
        position: relative;
        padding: 0px 24px;
        border-bottom: 1px solid rgb(223, 223, 223);
    }
    .logo{
        margin:5px 1.5em 0px 0px;
    }
    .logo img{
        vertical-align: middle;
        border-style: none;
    }
    .alt_kategoriler .tnm__title{
        display: block;
        padding-right: 2em;
    }
    .kategori-isim{
    position: relative;
    padding: 1em 0px;
    display: block;
    text-transform: uppercase;
    }

    @media screen and (min-width: 1440px) {
        .kategori-isim{
        font-size: 0.75em;
        }
     }

     .tnm__title>a::after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        border-top: 4px solid red;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        width: 0;
    }
     
    .tnm__title:hover>a::after {
        width: 100%;
    }
    .tnm-highlights{
    display: none;
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    padding: 30px 0px 0px 32px;
    box-sizing: border-box;
    font-size: 0.875em;
    border-top: 1px solid rgb(218, 41, 2)
    }

    .arama{
    margin-left: auto;
    margin-right: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    order: 100;
    }

    .arama a{
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color .3s;
    }
    
    .arama .searcherspan{
    width: 128px;
    margin-right: 1.3em;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid rgb(202, 198, 198);
    padding: 3px;
    }

    .arama .searcher{
        padding: 0px;
        border: none;
        outline: none;
        font-size: 0.75em;
        cursor: pointer;
    }

    [role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
        touch-action: manipulation;
    }

    button, input {
        overflow: visible;
        margin: 0;
    }

    .arama .searchericon{
    vertical-align: middle;
    border-style: none;
    }
    
    .arama .mağaza-bul{
        
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-size: 0.75em;
        margin-right: 1.3em;
        text-transform: uppercase;
        position: relative;
        padding: 1em 0px;
    }

    .hesap{
        margin-right: 1.3em;
    }


    .account-icon .label{
        position: relative;
        padding: 0.8em 0px;
        text-transform: uppercase;
    }
   
    

</style>


