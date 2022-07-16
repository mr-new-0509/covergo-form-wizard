<template>
  <p class="text-4xl font-bold">Tell us about yourself</p>

  <div class="flex justify-center">
    <div class="w-56">
      <!-- Name input -->
      <div class="flex justify-center mt-6">
        <div class="flex flex-col items-start">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            class="border border-gray-400 rounded-sm px-2 h-10 mt-1 w-56"
          />
        </div>
      </div>

      <!-- Age input -->
      <div class="flex justify-center mt-6">
        <div class="flex flex-col items-start">
          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            class="border border-gray-400 rounded-sm px-2 h-10 mt-1 w-56"
            min="0"
          />
        </div>
      </div>

      <!-- Location input -->
      <div class="flex justify-center mt-6">
        <div class="flex flex-col items-start">
          <label for="location">Where do you live</label>
          <select
            id="location"
            name="location"
            class="border border-gray-400 rounded-sm px-2 h-10 mt-1 w-56"
          >
            <option>Hong Kong</option>
          </select>
        </div>
      </div>

      <div class="flex w-56 mt-6">
        <input type="radio" id="standard" name="type" class="mr-2" />
        <label for="standard">Standard</label>
      </div>
      <div class="flex w-56 mt-3">
        <input type="radio" id="safe" name="type" class="mr-2" />
        <label for="safe">Safe</label>
      </div>
      <div class="flex w-56 mt-3">
        <input type="radio" id="super-safe" name="type" class="mr-2" />
        <label for="super-safe">Super safe</label>
      </div>
    </div>
  </div>

  <p class="text-2xl font-bold mt-12">Your premium is: 500HKD.</p>

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
      to="/"
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
      to="/summary"
    >
      Next
    </router-link>
  </div>
</template>