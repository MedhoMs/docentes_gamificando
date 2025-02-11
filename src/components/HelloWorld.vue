<script>
export default {
  name: "BaseBlock",
  data() {
    return {
      array: ['/src/components/img/wordwall.png', 
      '/src/components/img/peardeck.webp', 
      '/src/components/img/liveworksheets.png', 
      '/src/components/img/Learning_Apps.jpg', 
      '/src/components/img/googleforms.png', 
      '/src/components/img/Kahoot-Logo.png', 
      '/src/components/img/plickers.png', 
      '/src/components/img/quizizz.png', 
      '/src/components/img/decktoys.webp', 
      '/src/components/img/duolingo.webp', 
      '/src/components/img/Classcraft.png', 
      '/src/components/img/@mcgnb.png', 
      '/src/components/img/Google-Classroom.png', 
      '/src/components/img/Yugioh_Logo.webp', 
      '/src/components/img/Dragon.png', 
      '/src/components/img/t.jpg', 
      '/src/components/img/book.webp', 
      '/src/components/img/capcut.png', 
      '/src/components/img/quivervision.png', 
      '/src/components/img/Superman.png', 
      '/src/components/img/edpuzzle.png', 
      '/src/components/img/class-dojo.png', 
      '/src/components/img/canva.webp', 
      '/src/components/img/Genially.png'],
    };
  },
};
</script>

<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <section>
      <div class="flex items-center flex-col pt-4 bg-[#1681f5] text-white font-bold">
        <h1 class="text-3xl pb-3">GamificApps</h1>
        <h3 class="pb-5">Aplicaciones y herramientas para llevar las gamificaciones al siguiente nivel.</h3>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-8 max-w-7xl mx-auto">
        <div v-for="x in array" class="bg-neutral-300 p-4 rounded-lg flex justify-center items-center shadow-md">
          <img :src="x" class="max-w-full h-auto object-contain">
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
