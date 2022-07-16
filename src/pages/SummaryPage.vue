<template>
  <p class="text-4xl font-bold">Summary</p>
  <!-- <p class="text-2xl font-bold mt-8">${name},</p> -->
  <p class="text-md mt-6">Name: {{ name }}</p>
  <p class="text-md mt-3">Age: {{ age }}</p>
  <p class="text-md mt-3">Where do you live: {{ location }}</p>
  <p class="text-md mt-3">Package: {{ capitalizeFirstLetter(type) }}</p>
  <p class="text-md mt-3">Premium: {{ premium }}</p>
  <div class="flex justify-center items-center mt-24">
    <router-link
      class="
        border border-black
        bg-white
        hover:bg-black
        rounded-sm
        text-black
        hover:text-white
        w-32
        py-2
        transition
        ease-in
        duration-150
        mr-6
      "
      to="/form"
    >
      Back
    </router-link>
    <router-link
      class="
        border border-black
        bg-black
        hover:bg-white
        rounded-sm
        text-white
        hover:text-black
        w-32
        py-2
        transition
        ease-in
        duration-150
      "
      to="/"
    >
      Buy
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("formStore", ["name", "age", "location", "type", "premium"]),
  },
  methods: {
    capitalizeFirstLetter(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
});
</script>