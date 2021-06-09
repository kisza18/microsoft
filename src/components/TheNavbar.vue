<template>
  <header class="w-full h-14 md:px-5 lg:px-0">
    <div class="relative flex w-full h-full mx-auto">
      <!--hamburger-->
      <div class="md:hidden h-full flex items-center p-4">
        <button class="focus:outline-none" @click="toggleHamburger" href="">
          <i v-if="!hamburger" class="fal fa-bars text-xl"></i>
          <i v-if="hamburger" class="fal fa-times text-xl"></i>
        </button>
      </div>
      <!--logo-->
      <div class="logo absolute md:static h-full flex items-center md:mr-2">
        <a class="py-4 pl-3 pr-2 mb-2" href=""
          ><img class="w-28" src="../assets/images/nav_logo.png" alt=""
        /></a>
      </div>
      <!--nav-list-->
      <nav class="hidden md:block nav-list-container h-full pl-1">
        <ul class="flex items-center h-full text-xs">
          <li class="h-full flex items-center p-3">
            <a class="border-b-2 border-transparent hover:border-black" href=""
              >Microsoft 365</a
            >
          </li>
          <li class="h-full flex items-center p-3">
            <a class="border-b-2 border-transparent hover:border-black" href=""
              >Office</a
            >
          </li>
          <li class="h-full flex items-center p-3">
            <a class="border-b-2 border-transparent hover:border-black" href=""
              >Windows</a
            >
          </li>
          <li class="hidden h-full lg:flex items-center p-3">
            <a class="border-b-2 border-transparent hover:border-black" href=""
              >Surface</a
            >
          </li>
          <li class="hidden h-full lg:flex items-center p-3">
            <a class="border-b-2 border-transparent hover:border-black" href=""
              >Xbox</a
            >
          </li>
          <li class="hidden h-full lg:flex items-center p-3">
            <a class="border-b-2 border-transparent hover:border-black" href=""
              >Támogatás</a
            >
          </li>
          <li class="relative lg:hidden h-full flex items-center p-3">
            <div
              v-if="more"
              class="absolute z-0 left-0 h-full w-full flex items-center p-3 bg-gray-200"
            ></div>
            <button
              @click="toggleMore"
              class="relative z-10 border-b-2 border-transparent hover:border-black focus:outline-none"
            >
              Több
            </button>
            <i class="relative z-10 fal fa-angle-down ml-1"></i>
            <div class="absolute z-10 bg-gray-200 top-14 left-0">
              <ul v-if="more">
                <li>
                  <a
                    class="block p-5 pr-24 hover:underline hover:bg-gray-300"
                    href=""
                    >Surface</a
                  >
                </li>
                <li>
                  <a
                    class="block p-5 pr-24 hover:underline hover:bg-gray-300"
                    href=""
                    >Xbox</a
                  >
                </li>
                <li>
                  <a
                    class="block p-5 pr-24 hover:underline hover:bg-gray-300"
                    href=""
                    >Támogatás</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <!--right-nav-->
      <div class="absolute flex right-nav right-0 h-full">
        <div class="hidden md:flex relative h-full items-center p-3 text-xs">
          <button
            @click="toggleAll"
            class="relative z-10 border-b-2 border-transparent hover:border-black focus:outline-none"
          >
            Minden ami Microsoft
          </button>
          <i class="relative z-10 fal fa-angle-down ml-1"></i>
        </div>
        <div>
          <ul class="flex items-center h-full text-xs">
            <li class="h-full flex items-center p-2">
              <a
                class="hidden 2xl:block border-b-2 border-transparent hover:border-black"
                href=""
                >Keresés</a
              >
              <a class="hidden md:block" href=""
                ><i class="fal fa-search ml-2 2xl:mb-1 text-base"></i
              ></a>
            </li>
            <li class="h-full flex items-center p-2">
              <a
                class="hidden 2xl:block border-b-2 border-transparent hover:border-black"
                href=""
                >Bevásárlókocsi</a
              >
              <a href=""
                ><i class="fal fa-shopping-cart ml-2 2xl:mb-1 text-base"></i
              ></a>
            </li>
            <li class="h-full flex items-center p-2">
              <a
                class="hidden 2xl:block border-b-2 border-transparent hover:border-black"
                href=""
                >Bejelentkezés</a
              >
              <a href=""
                ><i class="fal fa-user-circle ml-2 text-3xl text-gray-500"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <!--hamburger list-->
      <div
        v-if="hamburger"
        class="absolute z-10 top-14 left-0 w-full bg-gray-100 md:hidden"
      >
        <div>
          <ul>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Microsoft 365</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Office</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Windows</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Surface</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Xbox</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Támogatás</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Szoftverek</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Számítógépek és eszközök</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Szórakozás</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Üzleti</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-200" href=""
                >Developer & IT</a
              >
            </li>
            <li>
              <a class="block text-md p-4 border-b border-gray-800" href=""
                >Egyéb</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      more: false,
      all: false,
      hamburger: false,
      array1: [
        "Windows-alkalmazások",
        "OneDrive",
        "Outlook",
        "Skype",
        "OneNote",
        "Microsoft Teams",
      ],
      array2: ["Xbox vásárlása", "Tartozékok"],
      array3: [
        "Xbox Game Pass Ultimate",
        "Xbox Live Gold",
        "Xbox és játékok",
        "PC játékok",
        "Windows-játékok",
      ],
      array4: [
        "Microsoft Azure",
        "Microsoft 365",
        "Microsoft Industry",
        "Power Platform",
      ],
      array5: [
        ".NET",
        "Windows Server",
        "Windows fejlesztői központ",
        "Dokumentumok",
        "Power Apps",
      ],
      array6: [
        "Díjmentes letöltések és biztonság",
        "Oktatás",
        "Ajándékkártyák",
      ],
    };
  },
  methods: {
    toggleMore() {
      this.more = !this.more;
      this.all = false;
    },
    toggleAll() {
      this.all = !this.all;
      this.more = false;
    },
    toggleHamburger() {
      this.hamburger = !this.hamburger;
    },
  },
};
</script>

<style scoped>
.container {
  width: 1000px;
}
.logo {
  left: calc(50% - 70px);
}
</style>
