<template>
  <div class="relative bg-gray-100 w-full mb-80 md:mb-0">
    <div class="relative">
      <img
        class="md:hidden"
        :src="require(`../assets/images/${imageSmall}`)"
        alt=""
      />
      <div
        class="absolute bg-gray-200 md:bg-transparent md:h-full w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left md:items-start px-20 py-20 md:py-0 md:pl-16 lg:pl-20"
      >
        <h1 class="text-xl md:text-2xl xl:text-4xl font-bold mb-4">
          {{ title }}
        </h1>
        <p class="text-sm mb-5">
          {{ text }}
        </p>
        <button
          class="bg-black text-gray-50 font-bold py-2 px-5 hover:underline w-52"
        >
          {{ btn }}<i class="fal fa-chevron-right ml-2"></i>
        </button>
      </div>
      <img
        class="hidden md:block lg:hidden"
        :src="require(`../assets/images/${imageMedium}`)"
        alt=""
      />
      <img
        class="hidden lg:block"
        :src="require(`../assets/images/${imageLarge}`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSection",
  props: ["title", "text", "btn", "imageSmall", "imageMedium", "imageLarge"],
};
</script>
