<template>
    <div>
        <div class="comment">
            <div class="comment-inner">
                <div class="comment-content">
                    <div class="content-author">
                        <span class="author-name">
                            <div class="style_rateWrapper__11XlG">                           
                                <span class="isim">{{author}}</span>
                            </div>
                        </span>
                        <span class="author-time">
                            <span class="datetime">
                                {{time}}
                            </span>
                            </span>
                        </div>
                    <div class="content-detail">
                        <p class="twin">{{title}}</p>
                        <p class="yorum">{{text}}</p>
                        <p class="translate">yorumu çevir</p>
                        <p class="orjinal">Orijinal olarak
                            yayınlandı<!-- --> <!-- -->Twins</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            title:String,
            text:String,
            time: String,
            author: String
        }
    }
</script>
<style>
.orjinal{
    font-size: .875em;
    margin-top: 10px;
    padding: 10px;
    background: #f6f6f6;
    font-weight: 400;
}
.translate{
    font-size: .75em;
    margin: 1.5rem 0 0;
}
.yorum{
    margin-top: 16px;
    font-size: .75em;
}
.twin{
    font-size: .875em;
}
.content-detail p{
    margin-bottom: inherit;
    white-space: pre-wrap;
}
.datetime{
    position: relative;
    top: 3px;
    color: var(--color-black);
}
.author-time{
    color: #ccc;
    white-space: nowrap;
    cursor: auto;
}
.isim{
    text-transform: capitalize;
    color: var(--color-black);
    margin-left: 10px;
    vertical-align: text-bottom;
}
.author-name>*{
    color: rgba(0,0,0,.45);
}
.author-name{
    color: rgba(0,0,0,.45);
    transition: color .3s;
}
.content-author>span{
    padding-right: 8px;
    font-size: 12px;
    line-height: 18px;
}
.content-author{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 4px;
    font-size: 16px;
}
.comment-content{
    position: relative;
    flex: 1 1 auto;
    min-width: 1px;
    font-size: 16px;
    word-wrap: break-word;
}
.comment-inner{
    display: flex;
    padding: 16px 0;
}
.comment{
    position: relative;
    background-color: inherit;
}
    
</style>