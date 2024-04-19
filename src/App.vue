<script>

import FooterContent from "@/public/components/footer-content.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";
import DrinkList from "@/drinks/components/drink-list.component.vue";

export default {
  name: 'App',
  components: {FooterContent, HeaderContent, DrinkList}
}

</script>

<template>
  <div class="app-container">
    <header-content></header-content>
    <main class="main-container">
      <drink-list></drink-list>
    </main>
    <footer-content></footer-content>
  </div>
</template>

<style scoped>

.main-container {
  max-width: 1200px;
  margin-inline: auto;
  width: 90%;
}

</style>
