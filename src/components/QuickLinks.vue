<template>
  <div class="max-w-2xl mx-7 md:mx-auto py-16 md:py-20">
    <ul
      class="flex flex-col md:flex-row items-start justify-between text-center"
    >
      <li
        class="flex md:flex-col items-center hover:underline cursor-pointer w-full md:w-28 mb-6 md:mb-0"
      >
        <img
          class="h-5 md:h-full"
          src="../assets/images/365_logo.png"
          alt=""
        /><a class="text-sm font-bold ml-2 md:ml-0 md:mt-2" href=""
          >Válassza ki a Microsoft 365-verzióját</a
        >
      </li>
      <li
        class="flex md:flex-col items-center hover:underline cursor-pointer w-full md:w-28 mb-6 md:mb-0"
      >
        <img
          class="h-5 md:h-full"
          src="../assets/images/surface_logo.png"
          alt=""
        /><a class="text-sm font-bold ml-2 md:ml-0 md:mt-2" href=""
          >Fedezze fel a Surface-eszközöket</a
        >
      </li>
      <li
        class="flex md:flex-col items-center hover:underline cursor-pointer w-full md:w-28 mb-6 md:mb-0"
      >
        <img
          class="h-5 md:h-full"
          src="../assets/images/xbox_logo.png"
          alt=""
        /><a class="text-sm font-bold ml-2 md:ml-0 md:mt-2" href=""
          >Xbox vásárlása</a
        >
      </li>
      <li
        class="flex md:flex-col items-center hover:underline cursor-pointer w-full md:w-28"
      >
        <img
          class="h-5 md:h-full"
          src="../assets/images/windows10_logo.png"
          alt=""
        /><a class="text-sm font-bold ml-2 md:ml-0 md:mt-2" href=""
          >Windows 10 vásárlása</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuickLinks",
};
</script>
