<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

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
        
        <div class="flex flex-row justify-center gap-2 pb-8">
            <a rel="nofollow noopener noreferrer" class="share-twitter sd-button share-icon border-2 border-gray rounded-lg px-2 flex gap-1" data-shared="sharing-twitter-27495" href="https://docentesgamificando.com/wordwall/?share=twitter&nb=1" target="_blank" title="Haz clic para compartir en Twitter">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /></svg>
                <span>Twitter</span>
            </a>
            <a rel="nofollow noopener noreferrer" class="share-facebook sd-button share-icon border-2 border-gray rounded-lg px-2 flex gap-1" data-shared="sharing-facebook-27495" href="https://docentesgamificando.com/wordwall/?share=facebook&nb=1" target="_blank" title="Haz clic para compartir en Facebook">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
                <span>Facebook</span>
            </a>
            <a rel="nofollow noopener noreferrer" class="share-pinterest sd-button share-icon border-2 border-gray rounded-lg px-2 flex gap-1" data-shared="sharing-pinterest-27495" href="https://docentesgamificando.com/wordwall/?share=pinterest&nb=1" target="_blank" title="Haz clic para compartir en Pinterest">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-pinterest"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 0 1 -8.512 18.023l2.364 -5.315a3.5 3.5 0 0 0 2.398 .952c2.708 0 4.75 -2.089 4.75 -5a6 6 0 1 0 -11.64 2.041a1 1 0 1 0 1.88 -.682a4 4 0 1 1 7.76 -1.36c0 1.818 -1.156 3.001 -2.75 3.001c-.609 0 -1.153 -.361 -1.478 -1.022l1.142 -2.572a1 1 0 0 0 -1.828 -.812l-4.392 9.882a10 10 0 0 1 -4.694 -8.476l.005 -.324a10 10 0 0 1 14.995 -8.336" /></svg>                                                       
                <span>Pinterest</span>
            </a>
            <a rel="nofollow noopener noreferrer" class="share-telegram sd-button share-icon border-2 border-gray rounded-lg px-2 flex gap-1" data-shared="sharing-telegram-27495" href="https://docentesgamificando.com/wordwall/?share=telegram&nb=1" target="_blank" title="Haz clic para compartir en Telegram">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                <span>Telegram</span>
            </a>
            <a rel="nofollow noopener noreferrer" class="share-jetpack-whatsapp sd-button share-icon border-2 border-gray rounded-lg px-2 flex gap-1" data-shared href="https://docentesgamificando.com/wordwall/?share=jetpack-whatsapp&nb=1" target="_blank" title="Haz clic para compartir en WhatsApp">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                <span>WhatsApp</span>
            </a>
        </div>
    </DefaultLayout>
</template>