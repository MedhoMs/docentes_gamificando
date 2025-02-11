<script setup>
import RouterLinkHeaderGroup from '../RouterLinkHeaderGroup.vue';
import RouterLinkHeader from '../RouterLinkHeader.vue';
</script>

<template>
  <header class="flex items-center flex-col bg-[#0e3c6e] border-b-gray-600 border-solid">
    <img src="/src/components/img/docentes-gamificando.png" alt="Docentes Gamificando" class="w-96 mt-7">

    <nav class="text-white font-bold mt-8 mb-4 flex flex-wrap space-x-4 relative">
      <RouterLinkHeader to="/pantalla">PANTALLA PRINCIPAL</RouterLinkHeader>

      <div class="relative group">
        <router-link class="px-4 hover:text-[#f79502] cursor-pointer">RECURSOS ▼</router-link>
        <div class="absolute left-0 hidden group-hover:block bg-white text-black w-48 shadow-lg rounded-md">
          <RouterLinkHeaderGroup to="/contest">Concurso</RouterLinkHeaderGroup>
          <RouterLinkHeaderGroup to="#">Herramientas</RouterLinkHeaderGroup>
          <RouterLinkHeaderGroup to="#">Materiales</RouterLinkHeaderGroup>
          <RouterLinkHeaderGroup to="#">Tutoriales</RouterLinkHeaderGroup>
        </div>
      </div>
      
      <div class="relative group">
        <router-link class="px-4 hover:text-[#f79502] cursor-pointer">EMISIONES ▼</router-link>
        <div class="absolute left-0 hidden group-hover:block bg-white text-black w-48 shadow-lg rounded-md">
          <RouterLinkHeaderGroup to="#">Directos</RouterLinkHeaderGroup>
          <RouterLinkHeaderGroup to="#">Grabaciones</RouterLinkHeaderGroup>
        </div>
      </div>
      
      <RouterLinkHeader>PROYECTOS</RouterLinkHeader>
      <RouterLinkHeader to="/team">EQUIPO</RouterLinkHeader>

      <button class="ml-4">
        <img src="/src/components/img/lupa.png" alt="Buscar" class="w-4">
      </button>
    </nav>
  </header>
  
  <section>
    <slot></slot>
  </section>

  <footer>
    <p class="bg-neutral-700 text-white text-center py-7 mt-8 mb-0 font-bold">
      Copyright © 2025 Docentes Gamificando | Desarrollado por elClaudiEons</p>
    <div class="bg-neutral-800 text-neutral-400 py-2 mt-0 text-center">
      <a href="#" class="mx-2 hover:text-white">Aviso Legal</a>
      <a href="#" class="mx-2 hover:text-white">Política de Privacidad</a>
      <a href="#" class="mx-2 hover:text-white">Política de Cookies</a>
    </div>
  </footer>
</template>
