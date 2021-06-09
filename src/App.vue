<template>
  <div class="container mx-auto lg:px-20">
    <TheNavbar />
    <TheSection
      title="Új Surface Laptop 4"
      text="Maximális hatékonyság az ultravékony dizájn, a gyors multitasking és a
          kiváló teljesítmény tökéletes egyensúlyával"
      btn="Vásároljon most"
      imageSmall="header_1_small.png"
      imageMedium="header_1_medium.png"
      imageLarge="header_1_large.png"
    />
    <QuickLinks />
    <div
      class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 px-5 md:px-10 lg:px-0"
    >
      <Card
        title="Microsoft Teams"
        text="Csevegjen, beszélgessen vagy tervezzen együtt családjával és a barátaival – mindezt egyetlen alkalmazással."
        btn="Részletek"
        imageUrl="teams.png"
      />
      <Card
        title="Xbox Game Pass Ultimate"
        text="Xbox Live Gold és több mint 100 kiváló minőségű konzol és PC-játék. Játssz a barátaiddal, és találj rá a következő kedvenc játékodra!"
        btn="Csatlakozás"
        imageUrl="xbox.png"
      />
      <Card
        title="Microsoft Edge"
        text="Világszínvonalú teljesítmény több adatvédelemmel, nagyobb termelékenységgel és nagyobb értékkel a böngészés közben."
        btn="Letöltés"
        imageUrl="edge.png"
      />
      <Card
        title="Microsoft OneDrive"
        text="Mentse fájljait és fényképeit a OneDrive-ra, és bármely eszközről, bárhonnan elérheti őket."
        btn="Részletek"
        imageUrl="onedrive.png"
      />
    </div>
    <TheSectionRight
      title="Windows 10-frissítés"
      text="Új funkciók, amelyekkel a szenvedélyeinek élhet, jobb kapcsolatokat alakíthat ki, és visszanyerhet egy kis időt"
      btn="Részletek"
      imageSmall="section_small.jpg"
      imageMedium="section_medium.jpg"
      imageLarge="section_large.jpg"
    />
    <h1 class="text-2xl pt-10 pb-5 font-bold px-6 md:px-10 lg:px-0">
      Üzleti használatra
    </h1>
    <div
      class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 px-5 md:px-10 lg:px-0"
    >
      <Card
        title="Surface Vállalati verzió"
        text="Nem számít, mit csinál, egy Surface segít abban."
        btn="Vásárlás"
        imageUrl="surface.png"
      />
      <Card
        title="Microsoft 365 vállalatok számára"
        text="Őrizze meg lépéselőnyét a hatékony produktivitásnövelő, kapcsolattartást segítő és biztonsági alkalmazásokkal."
        btn="Vásároljon most"
        imageUrl="365.png"
      />
      <Card
        title="Windows 10 Enterprise"
        text="A 90 napos üzemeltetői próbaváltozat letöltése."
        btn="Letöltés"
        imageUrl="enterprise.png"
      />
      <Card
        title="Bemutatkozik a Microsoft Viva"
        text="Fedezze fel az új munkavállalói élményplatformot, amelynek célja, hogy segítsen az embereknek egymással kapcsolatba lépni, összpontosítani, tanulni és boldogulni a munkahelyükön."
        btn="Részletek"
        imageUrl="viva.png"
      />
    </div>
    <Social />
  </div>
  <div class="w-full bg-gray-100">
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheSection from "./components/TheSection";
import TheSectionRight from "./components/TheSectionRight";
import QuickLinks from "./components/QuickLinks";
import Card from "./components/Card";
import Social from "./components/Social";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheSection,
    TheSectionRight,
    QuickLinks,
    Card,
    Social,
    TheFooter,
  },
};
</script>

<style scoped>
.container {
  max-width: 1750px;
}
</style>
