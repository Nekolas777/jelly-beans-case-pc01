<script>
import {DrinksApiService} from "@/drinks/services/drink-api.service.js";
import DrinkCard from "@/drinks/components/drink-card.component.vue";
import {Drink} from "@/drinks/models/drink.entity.js";

export default {
  name: "drink-list",
  components: {DrinkCard},
  data() {
    return {
      drinks: [],
      hasError: false,
      drinksApi: new DrinksApiService()
    }
  },
  created() {
    this.fetchDrinksInformation();
  },
  methods: {

    buildDrinkListFromResponseData( items ) {
      return items.map( item => {
        return new Drink(
            item.beanId,
            item.ingredients,
            item.backGroundColor,
            item.flavorName,
            item.description,
            item.imageUrl,
            item.glutenFree,
            item.sugarFree,
            item.seasonal,
            item.kosher,
            item.groupName,
        )
      })
    },

    fetchDrinksInformation() {
      this.drinksApi.getDrinks()
          .then( response => {
            let items = response.data.items;
            this.drinks = this.buildDrinkListFromResponseData(items);
            console.log(items);
          })
          .catch( e => {
            this.hasError = true;
            console.error(e);
          })
    },

  }
}

</script>

<template>
  <section class="py-5">
    <div class="shadow-1" v-for="drink in drinks" :key="drink.beanId" aria-label="drinks-grid-container">
      <drink-card :drink="drink"></drink-card>
    </div>
  </section>
</template>

<style scoped>

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    align-items: stretch;
  }

  @media (max-width: 600px) {
    section {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }

</style>