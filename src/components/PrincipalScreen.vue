<script setup>
    import DefaultLayout from '../components/layouts/DefaultLayout.vue';
    
    const interviews
    = ['/img/interviews/interview6.webp',
    '/img/interviews/interview4.webp',
    '/img/interviews/interview2.webp',
    '/img/interviews/interview5.webp'
    ];
</script>

<style>
  @keyframes rotateFrom270To90 {
    from {
      transform: rotate(180deg);
      opacity: 0;
    }
    to {
      transform: rotate(360deg);
      opacity: 1;
    }
  }

  .image-container {
    position: relative;
    width: 270px;
    height: auto;
    z-index: 1;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .image-container img:first-child {
    opacity: 1;
  }

  .image-container img:last-child {
    opacity: 0;
  }

  .image-container:hover img:first-child {
    opacity: 0;
  }

  .image-container:hover img:last-child {
    opacity: 1;
  }

  @keyframes scaleBounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
  }
</style>

<template>
    <DefaultLayout>
    <div>
        <!--CABECERA LOGO-->
          <div class="text-center bg-[#1660ae] text-white py-14">
            <h1 class="font-bold text-6xl mb-4">Docentes Gamificando</h1>
            <h3 class="tracking-[1.5px] text-[#f79502]">TRANSFORMAMOS LAS AULAS A TRAVES DE LA GAMIFICACIÓN</h3>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#1660ae"></path></svg>

        <div class="flex justify-center -mt-12 md:-mt-20 lg:-mt-36">
            <img src="/img/Equipo-principal-screen.webp" alt="Imagen del Equipo">
        </div>

        <div class="bg-[#0366d0] py-9">
          <div class="flex justify-between text-white lg:max-w-6xl lg:mx-auto pl-14">
            <div class="mt-2">
              <h1 class="text-3xl font-bold mb-3">Bienvenid@s</h1>
              <p class="text-lg mb-5">Trabajamos para ser un andamiaje en el camino hacia la  <span class="font-bold">gamificación de las aulas.</span></p>
              <p class="text-lg"><span class="font-bold">Únete a nuestra comunidad</span> y ayúdanos a crear y compartir  recursos para que ese gran <span class="font-bold">esfuerzo</span> que haces en tus aulas  pueda ser <span class="font-bold">inspirador</span> para muchas otras personas.</p>

              <div class="flex gap-9 mt-8">
                <router-link to="/team">
                    <button class="bg-white text-black font-bold transition-colors duration-300 hover:text-white hover:bg-[#f79502] px-4 py-1 rounded-full">CONÓCENOS</button>
                </router-link>
                <a class="flex gap-2 items-center font-bold transition-colors duration-300 hover:text-[#f79502]" href="https://t.me/docentesgamificando">
                    <p>CUÉNTANOS</p>
                    <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </div>
                </a>
              </div>
            </div>

            <div class="image-container">
              <img class="hidden lg:block animate-[rotateFrom270To90_1.5s_ease-out]" src="/img/LOGO-DGweb-e1629151321869.webp" width="270" height="" alt="">
              <img class="hidden lg:block" src="/img/old-logo.png" width="270" height="" alt="">
            </div>
          </div>
        </div>
        <!--CABECERA LOGO-->

        <!--MAS ALLA-->
        <div class="bg-[#1d4b80] pt-9">
            <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                <div>
                    <div class="flex flex-col mx-auto shadow-[-2px_-3px_20px_] shadow-neutral-800 px-5 pb-2 lg:pb-7">
                        <div class="font-bold text-4xl text-white">
                            <h1 class="text-center">Más allá del juego: <br> Gamificando de la A-Z!</h1>
                        </div>
                        <img width="460" class="rounded-3xl m-0 lg:m-4 bg-blue-500 transition duration-300 ease-in-out lg:hover:translate-y-4 lg:hover:scale-[1.15] " src="/img/Mas-alla-del-Juego.webp" alt="">
                    </div>
                </div>

                <div class="text-white text-center italic mt-6 mx-3 lg:mx-0">
                    <h1 class="text-3xl mb-5">🎁Estas Navidades regala gamificación 🎮📚</h1>
                    <p class="mb-5 text-lg">Un libro editado por Ediciones Algorfa que reúne el trabajo y la pasión de 20 docentes que han explorado el potencial de la gamificación para transformar el aprendizaje.</p>
                    <p class="mb-5 text-lg">Además, este libro no sólo transforma el aprendizaje, sino que apoya a la Fundación Aladina, destinando todos los beneficios de su venta a ayudar a niños con cáncer. 💛</p>
                    <p class="mb-5 text-lg">💡 En preventa ahora:</p>
                    <ul class="text-lg">
                        <li>🔹 Amazon https://acortar.link/15wnk9</li>
                        <li>🔹Central Librera https://acortar.link/k7wbCA</li>
                        <li>🔹 Serendipia https://acortar.link/hjdDoL</li>
                        <li>🔹 Agapea https://acortar.link/nHfsm7</li>
                    </ul>
                </div>
            </div>
        </div>
        <!--MAS ALLA-->

        <!--ULTIMAS ENTRADAS-->
        <div class="bg-[#1d4b80] pt-9 px-2">
            <h1 class="text-5xl font-bold text-white mb-3 max-w-6xl mx-auto underline">Últimas entradas</h1>
            <div class="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-4 pb-7 ">
                <div v-for="interview in interviews">
                    <router-link to="/interviews">
                        <img :src="interview" class="rounded-lg">
                    </router-link>
                </div>
            </div>
        </div>
        <!--ULTIMAS ENTRADAS-->

        <!--NUEVA SECCION-->
        <div class="bg-[#1d4b80] pt-5">
            <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                <div class="mx-auto shadow-[-2px_-3px_20px_] shadow-neutral-800 px-5 py-2 lg:py-7">
                    <img width="460" class="rounded-3xl m-0 lg:m-4 bg-blue-500 transition duration-300 ease-in-out lg:hover:animate-[scaleBounce_1.2s_infinite]" src="/img/nueva-seccion.webp" alt="">
                </div>

                <div class="font-bold flex flex-col justify-center text-white text-center italic mx-3 lg:mx-0">
                    <h1 class="text-6xl mb-5">Nueva sección</h1>
                    <h2 class="text-4xl mb-5">GamificApps</h2>
                    <p class="mb-5 text-lg">Aplicaciones y herramientas para llevar las gamificaciones al siguiente nivel.</p>
                    <p class="mb-5 text-lg">¿Conoces alguna aplicación o herramienta que quieras que añadamos o creemos tutoriales?</p>
                    <p class="mb-5 text-lg">Dinos cual y la añadiremos.</p>
                </div>
            </div>
        </div>
        <!--NUEVA SECCION-->

        <div class="bg-[#1d4b80] text-white pb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 justify-evenly max-w-6xl mx-auto pt-11">
                <p class="md:max-w-md">Te ofrecemos una infinidad de recursos y la posibilidad de formar parte de nuestra comunidad para aprender a crear gamificaciones sorprendentes en tu aula.</p>
                <h1 class="text-5xl text-center">Te ayudamos a diseñar las clases que sueñas</h1>
            </div>
        </div>
        
      
    </div>
  </DefaultLayout>
</template>