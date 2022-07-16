<template>
  <p class="text-4xl font-bold">Hello There!</p>
  <p class="text-md mt-6">
    Let's buy some insurance. It is going to take only a few steps
  </p>
  <div class="flex justify-center mt-6">
    <router-link
      class="
        border border-black
        bg-black
        hover:bg-white
        rounded-sm
        text-white
        hover:text-black
        px-16
        py-2
        transition
        ease-in
        duration-150
      "
      to="/form"
    >
      Start
    </router-link>
  </div>
</template>