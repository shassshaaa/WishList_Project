<template>
  <h2 class="category-title">
    {{categori.title}}
  </h2>
  <div class="catalog-items">
    <item2
        v-if="categori.key === 'budget'"
        v-for="wish of WishListStore.wishesAll"
        :key="wish.article"
        :wish="wish"
    />
    <item2
        v-if="categori.key === 'art'"
        v-for="wish of WishListStore.wishesArt"
        :key="wish.article"
        :wish="wish"
    />
    <item2
        v-if="categori.key === 'beauty'"
        v-for="wish of WishListStore.wishesBeauty"
        :key="wish.article"
        :wish="wish"
    />
    <item2
        v-if="categori.key === 'home'"
        v-for="wish of WishListStore.wishesHome"
        :key="wish.article"
        :wish="wish"
    />
    <item2
        v-if="categori.key === 'game'"
        v-for="wish of WishListStore.wishesGame"
        :key="wish.article"
        :wish="wish"
    />
    <item2
        v-if="categori.key === 'zachem'"
        v-for="wish of WishListStore.wishesZachem"
        :key="wish.article"
        :wish="wish"
    />
    <item2
        v-if="categori.key === 'dorogo'"
        v-for="wish of WishListStore.wishesDorogo"
        :key="wish.article"
        :wish="wish"
    />
  </div>
</template>

<script>
import item2 from "@/components/item2.vue";
export default {
name: 'WishList_Category',
components: {
item2,
},
}
</script>

<script setup>



const props = defineProps({
  categori: {
    type: Object,
    required: true,
    default () {
      return {}
    }
  }
})

import {useWishListStore} from "../pinia/store";
const WishListStore = useWishListStore()


</script>


