<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

const interviews
    = [
        {
        image: '/img/interviews/interview1.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      }, 
      {
        image: '/img/interviews/interview2.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      }, 
      {
        image: '/img/interviews/interview3.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      }, 
      {
        image: '/img/interviews/interview4.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      }, 
      {
        image: '/img/interviews/interview5.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      }, 
      {
        image: '/img/interviews/interview6.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      },
      {
        image: '/img/interviews/interview7.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      },
      {
        image: '/img/interviews/interview8.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      },
      {
        image: '/img/interviews/interview9.webp',
        title: 'Gamificando con superhéroes utilizando Genially y MyClassGame',
        description: 'David Ruiz nos detalla toda su gamificación en la que utiliza Genially como página web y MyClassGame como gestor de Genially',
      },
    ];
</script>

<template>
    <DefaultLayout>
        <div class="bg-blue-300">
            <div class="text-center bg-[#11375f] p-6 text-white font-bold">
                <h1 class="text-4xl pb-6 font-bold">ENTREVISTAS</h1>
                <h3>Entrevistas a docentes quienes nos cuentan sus gamificaciones y sus experiencias en educación.</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 max-w-4xl mx-auto gap-4 mt-5 pb-8">
                <div v-for="interview in interviews" class="bg-white rounded-lg flex flex-col shadow-[-2px_2px_15px_] shadow-neutral-600">
                    <div class="flex justify-center">
                      <router-link to="/interviews_description">
                        <img :src="interview.image" class="md:rounded-t-lg md:rounded-tr-lg">
                      </router-link>
                    </div>
                    <div class="flex flex-col text-blue-900 py-3 px-2 ">
                        <div class="text-base font-semibold">
                            {{ interview.title }}
                        </div>
                        <div class="mt-2 text-sm">
                            {{ interview.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>