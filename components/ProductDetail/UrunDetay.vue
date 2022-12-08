<template>
    <div class="style_productInfoSection__34hDR"   id="product-info">
        <div class="space" role="separator"></div>
        <ul class="kargo-genel">
            <li class="kargo">1399 TL üzeri alışverişlerde ücretsiz kargo</li>
            <li class="kargo"></li>
            <li class="kargo"></li>
            <li class="kargo"></li>
            <li class="kargo"></li>
            <li class="kargo"></li>
            <li class="kargo"></li>
        </ul>
        <div class="select"
            role="tablist">
            <div class="select-yazı">
                <div class="collapse-header" role="tab" tabindex="0" aria-expanded="false"><span
                        class="collapse-arrow"><svg height="9" viewBox="0 0 18 9" width="18">
                            <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none" stroke="#000"
                                stroke-linecap="square" transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                        </svg></span>
                    <h3>AÇIKLAMA</h3>
                </div>
                <div class="content-hidden gizlenebilir"  role="tabpanel"
                    style="">
                    <div class="yazı-genel"><span class="acıklama">XL EXTRALIGHT® Organix™ dış
                            tabanlı (%30 biyolojik bazlı şeker kamışı) beyaz, boyanmamış deri ve süet kadın spor
                            ayakkabısı.<br><br>1988 doğumlu, klasik TWINS konseptimiz - farklı ama tamamlayıcı - gerçekten
                            benzersiz bir çift oluşturmak için eşlerin tıpatıp aynı olması gerektiği fikrine meydan
                            okuyor.</span></div>
                </div>
            </div>
            <div class="select-yazı">
                <div class="collapse-header" role="tab" tabindex="0" aria-expanded="false"><span
                        class="collapse-arrow"><svg height="9" viewBox="0 0 18 9" width="18">
                            <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none" stroke="#000"
                                stroke-linecap="square" transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                        </svg></span>
                    <h3>Özellikler</h3>
                </div>
                <div class="yazı-buyuk gizlenebilir" role="tabpanel"
                    style="">
                    <div class="yazı-genel">
                        <div class="content-feature"><span><b>Üst Kısım</b><br>Deri / Nubuk</span></div>
                        <div class="content-feature"><span><b>Renk</b><br>Beyaz</span></div>
                        <div class="content-feature"><span><b>Dış Taban/Özellikler</b><br>%70 EVA / %30 doğal
                                EVA</span></div>
                        <div class="content-feature"><span>Hafiflik için EVA (%30 biyolojik bazlı şeker
                                kamışı)<br>Hafiflik için XL EXTRALIGHT® Organix™</span></div>
                        <div class="content-feature"><span><b>İç Taban</b><br>OrthoLite® Tabanlık</span></div>
                        <div class="content-feature"><span><b>Astar</b><br>%72 geri dönüştürülmüş polyester %28
                                dana derisi</span></div>
                    </div>
                </div>
            </div>
            <div class="select-yazı">
                <div class="collapse-header" role="tab" tabindex="0" aria-expanded="false"><span
                        class="collapse-arrow"><svg height="9" viewBox="0 0 18 9" width="18">
                            <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none" stroke="#000"
                                stroke-linecap="square" transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                        </svg></span>
                    <h3>AYAKKABI BAKIMI</h3>
                </div>
                <div class="yazı-buyuk gizlenebilir" role="tabpanel"
                    style="">
                    <div class="yazı-genel">
                        <div class="content-feature">Camper ayakkabılar uzun süre dayanıklı olmaları için üst
                            kalite malzemelerden yapılmıştır. Tek yapmanız gereken basamakları takip etmek ve... o kadar!
                        </div><br>
                        <div class="content-feature">1. Kiri gidermek için yumuşak bir bez kullanın.<br><br>2.
                            Deriyi kir ve nemden korumak için Camper "Protect &amp; Care Spray" kullanın.<br><br>3. Deriyi
                            temizlemek ve nemlendirmek için Camper "Clean &amp; Care" kullanın.<br><br>4. Daha fazla koruma
                            için "Nanopro Waterproofing Spray" uygulayın. Bu ürünü mağazalarımızdan satın alabilirsiniz. En
                            yakın mağazayı bul <a href="/tr_TR/shops" target="_blank">Mağazalar</a></div>
                        <div class="content-feature">Ayakkabılarınıza iyi bakarsanız, çok uzun yollar
                            gidebileceğinizi düşünüyoruz.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.content-feature{
    font-size: var(--description-size);
}
.yazı-buyuk{
    background-color: transparent;
    border-top: 0;
    color: #000;
}
.gizlenebilir{
    height: 0;
    overflow: hidden;
}

.select-yazı:hover .gizlenebilir{
    height: min-content;
    transition: all .3 ease-in;

}
@media screen and (min-width: 1440px) {
    .acıklama{
        font-size: var(--description-size);
    }
    }
.yazı-genel{
    padding-top: 4px;
    padding-left: 0!important;
    padding-right: 0!important;
    padding: 16px;

}
.content-hidden{
    background-color: transparent;
    border-top: 0;
    color: #000;

}
.collapse-header::after{
    display: table;
    clear: both;
    content: "";
}
.collapse-header h3{
    font-size: inherit;
    font-weight: 400;

}
svg:not(:root) {
    overflow: hidden;
}
.collapse-arrow svg{
    transition: transform .24s;
}
.collapse-arrow{
    position: absolute;
    top: 50%;
    right: 16px;
    left: auto;
    margin: 0;
    transform: translateY(-50%);
    display: inline-block;
    font-size: 12px;
    vertical-align: -1px;
}
.collapse-header::before{
    display: table;
    content: "";
}
@media screen and (min-width: 1440px) {
    .collapse-header{
        font-size: var(--description-size);
    }
    }
.collapse-header{  
    padding: 12px 40px 12px 16px;
    position: relative;
    color: #000;
    line-height: 1.5715;
    cursor: pointer;
    transition: all .3s,visibility 0s;
    padding-left: 0!important;
    padding-right: 0!important;
    text-transform: capitalize;
    }
.select-yazı{
    border-bottom: 1px solid #d9d9d9;

}
.select{
    border-top: 1px solid var(--color-divider);
    background-color: white;
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 16px;
    line-height: 1.5715;
    list-style: none;

}
.kargo:last-child{
    margin-bottom: 6px;
}
.kargo{
    margin-bottom: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
}
@media screen and (min-width: 1440px) {
    .kargo-genel{
        font-size: var(--description-size);
    }
    }
.kargo-genel{
    display: block;
    list-style-type: disc;
    padding: 0 0 16px

}
    .space{
     border-top-color: var(--color-divider);
     margin-top: 20px;
     margin-bottom: 16px;
     display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum",;
    border-top: 1px solid rgba(0,0,0,.06);

    }

</style>

<style scoped>
ul {
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
h3 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #000;
}
</style>
