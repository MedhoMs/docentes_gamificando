<script>
export default {
  name: "BaseBlock",
  data() {
    return {
      array: ['/img/apps/wordwall.png', 
      '/img/apps/peardeck.webp', 
      '/img/apps/liveworksheets.png', 
      '/img/apps/Learning_Apps.jpg', 
      '/img/apps/googleforms.png', 
      '/img/apps/Kahoot-Logo.png', 
      '/img/apps/plickers.png', 
      '/img/apps/quizizz.png', 
      '/img/apps/decktoys.webp', 
      '/img/apps/duolingo.webp', 
      '/img/apps/Classcraft.png', 
      '/img/apps/@mcgnb.png', 
      '/img/apps/Google-Classroom.png', 
      '/img/apps/Yugioh_Logo.webp', 
      '/img/apps/Dragon.png', 
      '/img/apps/t.jpg', 
      '/img/apps/book.webp', 
      '/img/apps/capcut.png', 
      '/img/apps/quivervision.png', 
      '/img/apps/Superman.png', 
      '/img/apps/edpuzzle.png', 
      '/img/apps/class-dojo.png', 
      '/img/apps/canva.webp', 
      '/img/apps/Genially.png'],
    };
  },
};
</script>

<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <section class="pb-8">
      <div class="flex items-center flex-col pt-4 bg-[#1681f5] text-white font-bold">
        <h1 class="text-3xl pb-3">GamificApps</h1>
        <h3 class="pb-5">Aplicaciones y herramientas para llevar las gamificaciones al siguiente nivel.</h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8 max-w-7xl mx-auto">
        <div v-for="x in array" class="bg-neutral-300 p-4 rounded-lg flex justify-center items-center shadow-md">
          <router-link to="/gamificappsdescription">
            <img :src="x" class="max-w-full h-auto object-contain">
          </router-link>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
