<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

</script>

<script>
export default {
  name: "BaseBlock",
  data() {
    return {
      array: ['/img/apps/itineratios.png', 
      '/img/apps/tablasmultiplicar.png', 
      '/img/apps/mensaje.png', 
      '/img/apps/pasapalabra-navideno.png', 
      '/img/apps/juguem-al-nadal.png', 
      '/img/apps/christmas-factory.png'],
    };
  },
};
</script>

<template>
    <DefaultLayout>
        <div class="mx-6">
            <h2 class="text-2xl font-bold mb-6 mt-16 max-w-7xl mx-auto text-blue-500">Concursos</h2>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t-2">
                    <div v-for="x in array" class=" bg-white border-b-2 py-8">
                        <img :src="x" class="w-full h-auto">
                        <button class="mt-14 inline-block bg-blue-500 text-white px-8 py-1 rounded-full hover:bg-blue-600">Leer más >></button>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
