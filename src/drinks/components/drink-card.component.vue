<script>

import {Drink} from "@/drinks/models/drink.entity.js";

export default {
  name: "drink-card",
  props: {
    drink: Drink
  },
}
</script>

<template>
  <pv-card class="p-3 flex flex-column gap-2 align-items-center justify-content-start h-full"
           :style="`backgroundColor: #f6f7f9`">
    <template #header>
      <img class="w-full h-12rem" :src="drink.imageUrl" :alt="drink.flavorName">
    </template>
    <template #title>
      <h1 class="text-blue-700 text-xl">{{ drink.flavorName }}</h1>
    </template>
    <template #subtitle>
      <p class="mt-2">{{ drink.description }}</p>
    </template>
    <template #content>
      <h3 class="font-medium mt-2 mb-1 text-red-500">Ingredients:</h3>
      <p class="line-height-2">{{ drink.ingredients.join(", ") }}</p>
    </template>
    <template #footer>
      <p class="mt-2"><span class="font-medium text-green-600">Group name:</span> {{ drink.groupName.join(", ") }}</p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>