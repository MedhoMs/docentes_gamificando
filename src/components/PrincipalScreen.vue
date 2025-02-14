<script setup>
    import DefaultLayout from '../components/layouts/DefaultLayout.vue';
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
    z-index: 1; /* Asegura que la imagen esté por encima del contenido normal */
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
</style>

<template>
    <DefaultLayout>
    <div>
        <div class="text-center bg-[#1660ae] text-white py-14">
            <h1 class="font-bold text-4xl mb-4">Docentes Gamificando</h1>
            <h3 class="tracking-[1.5px]">TRANSFORMAMOS LAS AULAS A TRAVES DE LA GAMIFICACIÓN</h3>
        </div>

        <div class="flex justify-center">
            <img src="/img/Equipo-principal-screen.webp" alt="Imagen del Equipo">
        </div>

        <div class="bg-[#1660ae] py-9">
          <div class="flex justify-between text-white md:max-w-6xl md:mx-auto">
            <div class="mt-2">
              <h1 class="text-3xl font-bold mb-3">Bienvenid@s</h1>
              <p class="text-lg mb-5">Trabajamos para ser un andamiaje en el camino hacia la <br> <span class="font-bold">gamificación de las aulas.</span></p>
              <p class="text-lg"><span class="font-bold">Únete a nuestra comunidad</span> y ayúdanos a crear y compartir <br> recursos para que ese gran <span class="font-bold">esfuerzo</span> que haces en tus aulas <br> pueda ser <span class="font-bold">inspirador</span> para muchas otras personas.</p>
            </div>
            <div class="image-container">
              <img class="hidden lg:block animate-[rotateFrom270To90_1.5s_ease-out]" src="/img/LOGO-DGweb-e1629151321869.webp" width="270" height="" alt="">
              <img class="hidden lg:block" src="/img/old-logo.png" width="270" height="" alt="">
            </div>
          </div>
        </div>
      
    </div>
  </DefaultLayout>
</template>