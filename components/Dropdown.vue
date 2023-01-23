<template>
  <div class="highlights">
    <div class="column-double">
      <div class="sc-exqIPC leuDbu tnm__line-root">
        <ul class="liste">
          <li class="liste-item" v-for="item in ilkSutun.First">
            <NuxtLink :to="item.link" class="link">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div class="sc-exqIPC leuDbu">
          <ul class="liste2">
            <li class="liste-item" v-for="item in ucuncuSutun.Second">
              <NuxtLink :to="item.link" class="link">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="column-double">
      <div class="sc-exqIPC leuDbu tnm__line-root">
        <ul class="liste">
          <li class="liste-item" v-for="item in ikinciSutun.First">
            <NuxtLink :to="item.link" class="link">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div class="sc-exqIPC leuDbu">
          <ul class="liste2">
            <li class="liste-item" v-for="item in ikinciSutun.Second">
              <NuxtLink :to="item.link" class="link">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="sc-exqIPC leuDbu tnm__line-root">
        <ul class="liste">
          <li class="liste-item" v-for="item in ucuncuSutun.First">
            <NuxtLink :to="item.link" class="link">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div class="sc-exqIPC leuDbu">
          <ul class="liste2">
            <li class="liste-item" v-for="item in ucuncuSutun.Second">
              <NuxtLink :to="item.link" class="link">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ilkSutun: {
    First: {
      title: String,
      link: String,
    },
    Second: {
      title: String,
      link: String,
    }
  },
  ikinciSutun: {
    First: {
      title: String,
      link: String,
    },
    Second: {
      title: String,
      link: String,
    }
  },
  ucuncuSutun: {
    First: {
      title: String,
      link: String,
    },
    Second: {
      title: String,
      link: String,
    }
  }
})
function isimlendir(event) {
  console.log("asdasd");
  if (ilkSutun.Second[0] == null) {
    document.getElementById("column").classList.add("column-simple");
  }
  return true;
}
</script>
<style>
.column2>a {
  text-transform: uppercase;
}

.column2 {
  width: 100%;
  border: none;
  margin-right: 24px;
  padding-bottom: 20px;
}

.row {
  width: 14.2857%;
}

.liste2 {
  padding-left: 20px;
}

.highlights {
  display: none;
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  background: white;
  padding: 30px 0px 0px 32px;
  box-sizing: border-box;
  font-size: 0.875em;
  border-top: 1px solid rgb(218, 41, 28);
}

.column-simple {
  width: 14.2857%;
  margin-right: 24px;
  padding-bottom: 20px;
  z-index: 2;
}

.column-simple:not(column-simple--last),
.column-double:not(column-double--last) {

  border-right: 1px solid rgb(223, 223, 223);
}

.liste,
.liste2 {
  list-style: none;
  padding: 0px;
  margin: 0px;
  font-size: 0.875rem;
}

.liste-item {
  margin-top: 8px;
  font-size: 0.875rem;

}

.link,
.column-double>a,
.column2>a {
  font-size: 0.875rem;
  margin: 0px;
  padding: 0px;
  white-space: normal;
  font-weight: normal;
  font-family: ModerneRegular;
  text-decoration: none;
}

@media screen and (min-width: 1440px) {

  .link,
  .column-double>a,
  .title,
  .column2>a {
    text-shadow: unset;
    color: black;
  }
}

.column-double {
  width: 28.5714%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-right: 24px;
  padding-bottom: 20px;

}

.column-double>a {
  text-transform: uppercase;
  width: 100%;
}

.column-double>div {
  width: 50%;
  margin-left: auto;
}

.title {
  margin-top: 8px;
  font-size: 0.875rem;
  margin: 0px;
  padding: 0px;
  white-space: normal;
  font-weight: normal;
  font-family: ModerneRegular;
}
</style>

<style scoped>
li {
  display: list-item;
  text-align: -webkit-match-parent;
}

a {
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .3s;
  touch-action: manipulation;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
