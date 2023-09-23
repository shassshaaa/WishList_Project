<script>

import WishList from "./components/WishList.vue"


export default {
  name: 'App',
  components: {
  WishList,
  },
}
</script>


<template>
  <div class="wishlist-body">
    <WishList>
    </WishList>
  </div>
</template>

<style>

.wishlist-body {
    width: 70vw;
    height: 100vh;
    margin: auto;
    margin-top: 5vh;
  }


</style>
