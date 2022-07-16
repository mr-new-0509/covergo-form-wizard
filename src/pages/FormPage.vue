
<template>
  <p class="text-4xl font-bold">Tell us about yourself</p>

  <div class="flex justify-center">
    <div class="w-72">
      <!-- Name input -->
      <div class="flex justify-center mt-6">
        <div class="flex flex-col items-start">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            class="border border-gray-400 rounded-sm px-2 h-10 mt-1 w-72"
            v-model="name"
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
            class="border border-gray-400 rounded-sm px-2 h-10 mt-1 w-72"
            min="0"
            v-model="age"
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
            class="border border-gray-400 rounded-sm px-2 h-10 mt-1 w-72"
            v-model="locationIndex"
          >
            <option
              v-for="(location, index) in locations"
              :key="location.code"
              :value="index"
            >
              {{ location.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Type radios -->
      <div class="flex w-72 mt-6">
        <input
          type="radio"
          id="standard"
          name="type"
          class="mr-2"
          value="standard"
          v-model="type"
        />
        <label for="standard">Standard</label>
      </div>
      <div class="flex w-72 mt-3">
        <input
          type="radio"
          id="safe"
          name="type"
          class="mr-2"
          value="safe"
          v-model="type"
        />
        <label for="safe">
          Safe(+
          {{
            (ratesOfTypes["safe"] - ratesOfTypes["standard"]) * 
            age * 
            locations[locationIndex].rate *
            defaultRate
          }}{{currency}}, {{ (ratesOfTypes["safe"] - ratesOfTypes["standard"]) * 100 }}%)
        </label>
      </div>
      <div class="flex w-72 mt-3">
        <input
          type="radio"
          id="super-safe"
          name="type"
          class="mr-2"
          value="superSafe"
          v-model="type"
        />
        <label for="super-safe">
          Super safe(+
          {{
            (ratesOfTypes["superSafe"] - ratesOfTypes["standard"]) * 
            age * 
            locations[locationIndex].rate *
            defaultRate
          }}{{currency}}, {{ (ratesOfTypes["superSafe"] - ratesOfTypes["standard"]) * 100 }}%)
        </label>
      </div>
    </div>
  </div>

  <p class="text-2xl font-bold mt-12">
    Your premium is: {{ price }}{{ currency }}.
  </p>

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
    <button
      class="
        border border-black
        hover:border-black
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
      @click="handleSubmit"
    >
      Buy
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { DATA_OF_LOCATIONS, RATES_OF_TYPES } from "../utils/data";
import { DEFAULT_RATE } from "../utils/constants";
import { IFormPageData } from "../utils/interfaces";

export default defineComponent({
  data: (): IFormPageData => ({
    name: "",
    age: 0,
    locationIndex: 0,
    type: "standard",
    locations: DATA_OF_LOCATIONS,
    ratesOfTypes: RATES_OF_TYPES,
    price: 0,
    rateByLocation: DATA_OF_LOCATIONS[0].rate,
    rateByType: RATES_OF_TYPES["standard"],
    currency: DATA_OF_LOCATIONS[0].currency,
    defaultRate: DEFAULT_RATE,
  }),

  methods: {
    ...mapMutations("formStore", ["setFormMut"]),

    getRateByLocation(index: number) {
      this.rateByLocation = this.locations[index].rate;
      this.currency = this.locations[index].currency;
      this.price =
        this.age * this.rateByLocation * this.rateByType * DEFAULT_RATE;
    },
    getRateByType(type: string) {
      this.rateByType = RATES_OF_TYPES[type];
      this.price =
        this.age * this.rateByLocation * this.rateByType * DEFAULT_RATE;
    },
    getPriceByAge(age: number) {
      this.price = age * this.rateByLocation * this.rateByType * DEFAULT_RATE;
    },

    handleSubmit() {
      if (this.age > 100 || this.age < 0) {
        this.$router.push("/age-error");
      } else {
        if (!this.name) {
          alert("Please input your name.");
        } else {
          this.setFormMut({
            name: this.name,
            age: this.age,
            location: DATA_OF_LOCATIONS[this.locationIndex].name,
            type: this.type,
            premium: `${this.price}${this.currency}`,
          });
          this.$router.push("/summary");
        }
      }
    },
  },

  watch: {
    locationIndex(newLocationIndex) {
      this.getRateByLocation(newLocationIndex);
    },
    type(newType) {
      this.getRateByType(newType);
    },
    age(newAge) {
      this.getPriceByAge(newAge);
    },
  },
});
</script>

