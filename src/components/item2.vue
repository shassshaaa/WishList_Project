<template>
  <div class="wish-card">
    <div class="wish-image">
      <img :src="'src/assets/images/' + wish.image">
    </div>
    <h2 class="wish-name"> {{wish.name}} </h2>
    <p class="wish-about"> {{wish.about}}</p>
  </div>
</template>



<script>
export default {
  name: 'item2',
  methods: {
    sendData2parent() {
      this.$emit('sendArticle', this.wishes_data.article)

    }
  }
}

</script>

<script setup>
const props = defineProps({
    wish: {
      type: Object,
      required: true,
      default () {
        return {}
      }
  },
})
</script>
