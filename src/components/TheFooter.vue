<template>
  <div class="container mx-auto mt-12 py-10 px-5 md:px-10 lg:px-20 bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4">
      <!--grid 1-->
      <div class="mb-10">
        <h1 class="text-base text-gray-600 font-bold mb-2">Újdonságok</h1>
        <ul v-for="elem in array1" :key="elem">
          <li class="mb-1">
            <a class="text-xs text-gray-500 hover:underline" href="">{{
              elem
            }}</a>
          </li>
        </ul>
      </div>
      <!--grid 2-->
      <div class="mb-10">
        <h1 class="text-base text-gray-600 font-bold mb-2">Microsoft Store</h1>
        <ul v-for="elem in array2" :key="elem">
          <li class="mb-1">
            <a class="text-xs text-gray-500 hover:underline" href="">{{
              elem
            }}</a>
          </li>
        </ul>
      </div>
      <!--grid 3-->
      <div class="mb-10">
        <h1 class="text-base text-gray-600 font-bold mb-2">Oktatás</h1>
        <ul v-for="elem in array3" :key="elem">
          <li class="mb-1">
            <a class="text-xs text-gray-500 hover:underline" href="">{{
              elem
            }}</a>
          </li>
        </ul>
      </div>
      <!--grid 4-->
      <div class="mb-10">
        <h1 class="text-base text-gray-600 font-bold mb-2">Nagyvállalat</h1>
        <ul v-for="elem in array4" :key="elem">
          <li class="mb-1">
            <a class="text-xs text-gray-500 hover:underline" href="">{{
              elem
            }}</a>
          </li>
        </ul>
      </div>
      <!--grid 5-->
      <div class="mb-10">
        <h1 class="text-base text-gray-600 font-bold mb-2">Fejlesztő</h1>
        <ul v-for="elem in array5" :key="elem">
          <li class="mb-1">
            <a class="text-xs text-gray-500 hover:underline" href="">{{
              elem
            }}</a>
          </li>
        </ul>
      </div>
      <!--grid 6-->
      <div class="">
        <h1 class="text-base text-gray-600 font-bold mb-2">Vállalat</h1>
        <ul v-for="elem in array6" :key="elem">
          <li class="mb-1">
            <a class="text-xs text-gray-500 hover:underline" href="">{{
              elem
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!--bottom-->
    <div class="flex items-center mt-12">
      <i class="far fa-globe-americas text-xl text-gray-500 mr-2"></i>
      <p class="text-xs text-gray-500">Magyar (Magyarország)</p>
    </div>
    <div class="mt-3">
      <ul class="flex text-xs flex-wrap">
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href=""
            >Kapcsolatfelvétel a Microsofttal</a
          >
        </li>
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href="">Adatvédelem</a>
        </li>
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href=""
            >Cookie-k kezelése</a
          >
        </li>
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href=""
            >Használati feltételek</a
          >
        </li>
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href="">Védjegyek</a>
        </li>
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href=""
            >A hirdetéseinkről</a
          >
        </li>
        <li class="mb-1">
          <a class="hover:underline text-gray-600 mr-6" href=""
            >EU Compliance DoCs</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      array1: ["Microsoft 365", "Windows 10-alkalmazások"],
      array2: [
        "Fiókprofil",
        "Letöltőközpont",
        "Microsoft Store-támogatás",
        "Visszaküldés",
        "Rendeléskövetés",
        "Újrahasznosítás",
        "Commercial Warranties",
      ],
      array3: [
        "A Microsoft az oktatásban",
        "Office diákok",
        "Office 365 iskoláknak",
        "A Microsoft Azure az oktatásban",
      ],
      array4: [
        "Microsoft Azure",
        "Microsoft partneri anyagok",
        "Pénzügyi szolgáltatások",
      ],
      array5: [
        "Microsoft Visual Studio",
        "Windows-fejlesztői központ",
        "Fejlesztői központ",
        "Microsoft-fejlesztői program",
        "Channel 9",
      ],
      array6: [
        "Karrier",
        "A Microsoft bemutatása",
        "Vállalati hírek",
        "Adatvédelem a Microsoftnál",
        "Befektetők",
        "Korrupció- és Vesztegetésellenes Elkötelezettségünk",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1750px;
}
</style>
