<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

const contests
    = [
      {
        image: '/img/apps/itineratios.png',
        title: 'title',
        description: 'description',
      }, 
      {
        image: '/img/apps/tablasmultiplicar.png',
        title: 'title',
        description: 'description',
      }, 
      {
        image: '/img/apps/mensaje.png',
        title: 'title',
        description: 'description',
      }, 
      {
        image: '/img/apps/pasapalabra-navideno.png',
        title: 'title',
        description: 'description',
      }, 
      {
        image: '/img/apps/juguem-al-nadal.png',
        title: 'title',
        description: 'description',
      }, 
      {
        image: '/img/apps/christmas-factory.png',
        title: 'title',
        description: 'description',
      },
      ];
</script>

<template>
    <DefaultLayout>
        <div class="mx-6 pb-8">
            <h2 class="text-2xl font-bold mb-6 mt-16 max-w-7xl mx-auto text-blue-500">Concursos</h2>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t-2">
                    <div v-for="contest in contests" class="bg-white border-b-2 py-8">
                        <div>
                          {{ contest.title }}
                        </div>
                        <img :src="contest.image" class="w-full h-auto">
                        <div>
                          {{ contest.description }}
                        </div>
                        <button class="mt-14 inline-block bg-blue-500 text-white px-8 py-1 rounded-full hover:bg-blue-600">Leer más >></button>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
