<template>
  <div class="flex flex-col mb-14">
    <div class="w-full">
      <img :src="require(`../assets/images/${imageUrl}`)" alt="" />
    </div>
    <div>
      <h1 class="text-xl font-bold mt-3 md:mt-9">{{ title }}</h1>
      <p class="text-sm mt-1">
        {{ text }}
      </p>
      <button class="text-sm font-bold text-blue-600 mt-2 hover:underline">
        <a href="">
          {{ btn }}<i class="fal fa-chevron-right ml-3 text-sm"></i>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "text", "btn", "imageUrl"],
};
</script>
