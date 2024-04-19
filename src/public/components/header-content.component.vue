<script>
export default {
  name: "header-content"
}
</script>

<template>
  <pv-toolbar class="sticky top-0 py-5 px-3 bg-primary border-noround">
    <template #start>
      <h1 class="text-lg font-medium uppercase">Jelly Bean Peru Store<i class="pi pi-heart-fill ml-2"/></h1>
    </template>
    <template #end>
      <pv-avatar
          class="w-3rem h-3rem shadow-6 cursor-pointer"
          aria-label="profileImage"
          image="https://avatars.githubusercontent.com/u/129230632?v=4"
          shape="circle"
      >
      </pv-avatar>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>