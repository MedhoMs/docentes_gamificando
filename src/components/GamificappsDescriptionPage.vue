<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import SocialMediaLayout from './layouts/SocialMediaLayout.vue';

const gamificapps
    = ['/img/apps/wordwall.png', 
      '/img/apps/peardeck.webp', 
      '/img/apps/liveworksheets.png', 
      '/img/apps/Learning_Apps.jpg', 
      '/img/apps/googleforms.png', 
      '/img/apps/Kahoot-Logo.png', 
    ];
</script>

<template>
    <DefaultLayout>
        <h1 class="text-center text-4xl bg-[#11375f] p-6 text-white font-bold">WORDWALL</h1>
        <div class="bg-gradient-to-b from-[#29bfff] to-white flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center border-2 border-gray-500 mb-3">
            <img src="/img/descriptions/wordwall-description.webp" alt="" class="w-2/3 md:w-2/12 pl-2 py-3">
            <div class="text-center">
                <h3 class="pt-4 md:pl-4">
                    Wordwall es una herramienta digital que permite crear y 
                    editar actividades para el <br> aula de forma sencilla.
                </h3>
                <div class="pt-3 flex justify-center">
                    <button class="bg-orange-500 text-white px-8 py-1 rounded-full flex gap-1 mb-2">
                        ENLACE AL RECURSO
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-diamond"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4a1 1 0 0 1 .783 .378l.074 .108l3 5a1 1 0 0 1 -.032 1.078l-.08 .103l-8.53 9.533a1.7 1.7 0 0 1 -1.215 .51c-.4 0 -.785 -.14 -1.11 -.417l-.135 -.126l-8.5 -9.5a1 1 0 0 1 -.172 -1.067l.06 -.115l3.013 -5.022l.064 -.09a.982 .982 0 0 1 .155 -.154l.089 -.064l.088 -.05l.05 -.023l.06 -.025l.109 -.032l.112 -.02l.117 -.005h12zm-8.886 3.943a1 1 0 0 0 -1.371 .343l-.6 1l-.06 .116a1 1 0 0 0 .177 1.07l2 2.2l.09 .088a1 1 0 0 0 1.323 -.02l.087 -.09a1 1 0 0 0 -.02 -1.323l-1.501 -1.65l.218 -.363l.055 -.103a1 1 0 0 0 -.398 -1.268z" /></svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-b from-[#29bfff] flex flex-col items-center">
            <h1 class="text-4xl font-bold text-white pb-5">TUTORIALES E INFORMACIÓN</h1>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/XasQqNRJqRE?si=rvgSv_dBIanKmqVX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div>&nbsp;</div>
                <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/u_Ll0nfZnno?si=SPK5IqFEsQflBnF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        
        <div class=" max-w-7xl mx-auto pt-5">
            <h3>Entradas relacionadas:</h3>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4 p-8 max-w-7xl mx-auto">
            <div v-for="gamificapp in gamificapps" class="bg-neutral-300 p-4 rounded-lg flex justify-center items-center shadow-md">
              <router-link to="/description">
                <img :src="gamificapp" class="max-w-full h-auto">
              </router-link>
            </div>
        </div>
        
        <SocialMediaLayout></SocialMediaLayout>
    </DefaultLayout>
</template>