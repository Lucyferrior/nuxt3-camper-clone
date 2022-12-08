<template>
    <div class="satınalma">
        <div class="sepet-bilgi">
            <h2 class="siparis-yazı">SİPARİŞ ÖZETİ</h2>
            <div class="style_customSelect__K0ARn">
                <div class="secim">
                    <div class="select-selector">
                        <span class="selection-search">
                            <input type="search" autocomplete="off" class="search-input" style="opacity:0"
                                role="combobox" aria-expanded="false" aria-haspopup="listbox"
                                aria-owns="rc_select_0_list" aria-autocomplete="list" aria-controls="rc_select_0_list"
                                aria-activedescendant="rc_select_0_list_-1" value="" readonly="true" unselectable="on"
                                id="rc_select_0">
                        </span>
                        <span class="selection-item">
                            <div class="shipmentWrapper">
                                <p class="select-label"><span></span><br><span class="description"></span></p><span
                                    class="shipmentprice">ücretsiz<svg height="9" viewBox="0 0 18 9" width="18">
                                        <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none"
                                            stroke="#000" stroke-linecap="square"
                                            transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                                    </svg></span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="nested-loading">
                <div class="spin-container">
                    <div class="icon-position-right" role="tablist">
                        <div class="item-active">
                            <div class="collapse-header" role="tab" tabindex="0" aria-expanded="true"><span
                                    class="collapse-arrow"><svg height="9" viewBox="0 0 18 9" width="18">
                                        <path d="m4-4 3.67495264 3.67495264 4.32504736 4.32504736-8 8" fill="none"
                                            stroke="#000" stroke-linecap="square"
                                            transform="matrix(0 1 -1 0 12.96 -3.141463)"></path>
                                    </svg></span><span>Promosyon kodum var</span></div>
                            <div class="content-active" role="tabpanel">
                                <div class="content-box">
                                    <div class="pkodgenel">
                                        <div class="floatlabel"><input type="text" value="" class="ant-input"><label
                                                class="promosyon">Promosyon kodu</label>
                                        </div><button type="button" class="buton-uyg"><span>UYGULA</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="toplamlar">
                <p class="toplam-fiyat">Ana Toplam<span
                        data-ge-basket-productsubtotalprice="data-ge-basket-productsubtotalprice">0</span></p>
                <p class="toplam-fiyat"><span></span><span>ücretsiz</span></p>
                <h2 class="toplam">Toplam<span data-ge-basket-totals="data-ge-basket-totals">0</span>
                </h2>
            </div>
        </div>
        <HelperComponentsButton class="buy_btn" text="Satın Alma İşlemini Onaylayın"/>
        <div class="summaryftr">
            <p>Müşteri hizmetleri<!-- --> :<a href="tel:0850 777 27 37"><u> <!-- -->0850 777 27
                        37</u></a><br><span>Ayrıca,
                    iletişim formunu doldurarak da bizimle iletişime geçebilirsiniz. Çalışma saatlerimiz her gün 09:00 -
                    19:00. Resmi tatiller hariç.</span></p>
        </div>
    </div>
</template>

<style>
.buy_btn{
    font-size: 1rem;
}
.summary u {
    text-decoration: underline;
}

.summaryftr a {
    color: inherit;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color .3s;
}

.summaryftr p {
    margin-top: 0;
    margin-bottom: 1em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.summaryftr {
    font-size: .75em;
    margin-top: 32px;
    text-align: center;
}

.toplam {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 0;
    border-top: 1px solid #919191;
    font-size: 1em;
    font-family: ModerneLLWeb-Medium, sans-serif;
}

.toplam-fiyat:nth-last-child(2) {
    margin-bottom: 16px;
}

.toplam-fiyat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    font-size: var(--title-size);
    margin-top: 0;
}

.toplamlar {
    padding-top: 14px;
    border-top: 1px solid var(--color-disabled-primary);
}

.divider {
    margin-top: 1em;
    border-bottom: 1.2px solid gray;
}

.spin-container::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all .3s;
    content: "";
    pointer-events: none;
    box-sizing: border-box;
}

.buton-uyg>span {
    display: inline-block;
}

.buton-uyg {
    height: auto;
    outline: 0;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    touch-action: manipulation;
    padding: 2.4px 15px;
    font-size: 16px;
    border-radius: 0;
    color: #000;
    background: #fff;
    border: 1px solid #d9d9d9;
    text-transform: none;
    overflow: visible;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;


}

.promosyon {
    font-size: var(--title-size);
    font-weight: 400;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 17px;
    transition: all .2s ease;
    color: var(--color-text-secondary);
    touch-action: manipulation;
    cursor: default;
}

.ant-input {
    width: calc(100% - 5px);
    padding: 20px 12px 12px 11px;
    font-size: var(--title-size);
    touch-action: manipulation;
}

.floatlabel {
    position: relative;
}

.pkodgenel>div {
    flex: auto;

}

.pkodgenel {
    display: flex;

}

.content-box {
    padding-top: 4px;
    padding: 0;

}

.content-active {
    background-color: var(--color-white);
    border-top: 0;
    border-radius: 0 0 0 0;

}

.collapse-header::after {
    display: table;
    clear: both;
    content: "";
}

.collapse-arrow svg {
    transition: transform .24s;
    transform: rotate(180deg);
    height: 9;
    width: 18;
}

.collapse-arrow {
    padding-top: 5px;
    position: absolute;
    top: 50%;
    right: 16px;
    left: auto;
    margin: 0;
    transform: translateY(-50%);
    display: inline-block;
    font-size: 12px;
    vertical-align: -1px;
    color: #000;
    line-height: 1.5715;
    cursor: pointer;

}

.collapse-header {
    position: relative;
    border-radius: 0;
    padding: 18px 0 8px;
    color: #000;
    line-height: 1.5715;
    cursor: pointer;
    transition: all .3s, visibility 0s;
    background-color: var(--color-white);
    margin-bottom: 0.2em;
    font-size: var(--description-size);
}

.item-active {
    border-radius: 0;
    border-bottom: none;
}

.icon-position-right {
    background-color: #fafafa;
    border: 0;
    line-height: 1.5715;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 16px;
}

.spin-container {
    position: relative;
    transition: opacity .3s;
}

.nested-loading {
    position: relative;
}

.select-selector::after {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: "\a0";

}

.shipmentprice>svg {
    margin-left: 10px;

}

svg:not(:root) {
    overflow: hidden;
}

.description {
    color: var(--color-disabled-primary);
    text-transform: uppercase;
    font-size: 11px;

}

.select-label {
    margin-bottom: 0;
    text-align: start;
    margin-right: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    font-size: 14px;
    margin-top: 0;

}

.shipmentWrapper {
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 9px 15px;
    align-items: center;

}

.selection-item {
    position: relative;
    user-select: none;
    padding: 0;
    line-height: 30px;
    transition: all .3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.search-input {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    appearance: none;
    height: 30px;
    cursor: pointer;
    width: 100%;
    touch-action: manipulation;
    overflow: visible;

}

.selection-search {
    position: absolute;
    top: 0;
    right: 11px;
    bottom: 0;
    left: 11px;
}

.select-selector {
    padding: 0;
    height: auto;
    position: relative;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
    display: flex;

}

.secim {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 16px;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
}


@media screen and (min-width: 1440px) {
    .siparis-yazı {
        display: none;
        font-size: 21px;
        margin-bottom: 24px;
    }
}

.sepet-bilgi {
    padding: 16px 0;
}

.satınalma {
    position: sticky;
    top: 40px;
}
</style>
