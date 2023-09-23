<template>
  <div class="container">
    <h1 class="wishlist-title">
      WISHLIST
    </h1>
    <p class="wishlist-title-text">
      Список хотелок, если в английском не бум-бум (как и я...)
    </p>
    <div class="about-wish-list">
      <div class="about-image">
        <div class="gif-cover">
          <div class="gif-container">
            <img class="gif-cat" src="src/assets/images/rupert-cat.gif">
          </div>
        </div>
      </div>
      <div class="about-text">
        <p>
          Добро пожаловать на страничку с моими пожеланиями ко дню рождения. Можете выбрать любой вариант из данного списка, который придется вам по душе и по карману.
        </p>
        <p>
          Собственные идеи и аргументы “у меня на счету 5 копеек” - принимаются и не возбранаяются. Эта страничка создана, чтобы избавить всех (в том числе и меня) от вопроса “чо дарить”, не более :)
        </p>
        <p>
          Ссылок нет и возможности забить что-то прямо здесь тоже - но вы держитесь ♥
        </p>
      </div>
    </div>
    <div class="category-wishes">
      <p class="category-text">
        Перейдем к основным категориям...
      </p>
      <WishList_Category
          v-for="categori of WishListStore.Catigories"
          :key="categori.article"
          :categori="categori"/>
    </div>
  </div>

</template>


<script>

import WishList_Category from "@/components/WishList_Category.vue";

export default {
  name: 'WishList_Catalog',
  components: {
    WishList_Category
  }
}
</script>

<script setup>
import {useWishListStore} from "../pinia/store";

const WishListStore = useWishListStore()
</script>


