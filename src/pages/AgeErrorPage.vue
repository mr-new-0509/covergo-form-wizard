<template>
  <p class="text-4xl font-bold">Ooops</p>
  <p class="text-md mt-6">Your age is over our accpeted limit.</p>
  <p class="text-md">We are sorry but we cannot insure you now.</p>
  <div class="flex justify-center mt-12">
    <router-link
      class="
        border border-black
        bg-black
        hover:bg-white
        rounded-sm
        text-white
        hover:text-black
        w-64
        py-2
        transition
        ease-in
        duration-150
      "
      to="/"
    >
      Ok :(
    </router-link>
  </div>
</template>