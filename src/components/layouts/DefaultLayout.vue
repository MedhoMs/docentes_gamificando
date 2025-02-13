<script setup>
import { ref } from 'vue';
import RouterLinkHeaderGroup from '../RouterLinkHeaderGroup.vue';
import RouterLinkHeader from '../RouterLinkHeader.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="flex items-center flex-col bg-[#0e3c6e] border-b-orange-600 border-solid">
    <a href="/">
      <img src="/src/components/img/docentes-gamificando.png" alt="Docentes Gamificando" class="w-96 mt-7">
    </a>

    <nav class="text-white font-bold mt-8 mb-4 relative">
      <!-- MENU BUTTON -->
      <button class="md:hidden p-2 focus:outline-none" @click="toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <!-- MENU BUTTON -->

      <!-- MENU PRINCIPAL -->
      <div id="menu" :class="{'hidden': !isMenuOpen, 'md:flex': true}" class="flex-wrap space-x-4">
        <RouterLinkHeader to="#">PANTALLA PRINCIPAL</RouterLinkHeader>

        <div class="relative group">
          <span class="px-4 hover:text-[#f79502] cursor-pointer">RECURSOS ▼</span>
          <div class="absolute left-0 hidden group-hover:block bg-white text-black w-48 shadow-lg rounded-md">
            <RouterLinkHeaderGroup to="/contest">CONCURSOS</RouterLinkHeaderGroup>
          </div>
        </div>

        <div class="relative group">
          <span class="px-4 hover:text-[#f79502] cursor-pointer">EMISIONES ▼</span>
          <div class="absolute left-0 hidden group-hover:block bg-white text-black w-48 shadow-lg rounded-md">
            <RouterLinkHeaderGroup to="/interviews">ENTREVISTAS</RouterLinkHeaderGroup>
          </div>
        </div>

        <RouterLinkHeader to="#">PROYECTOS</RouterLinkHeader>
        <RouterLinkHeader to="/team">EQUIPO</RouterLinkHeader>

        <button class="ml-4">
          <img src="/src/components/img/lupa.png" alt="Buscar" class="w-4">
        </button>
      </div>
    </nav>
  </header>
  
  <section>
    <slot></slot>
  </section>

  <footer>
    <p class="bg-neutral-700 text-white text-center py-7 mb-0 font-bold">
      Copyright © 2025 Docentes Gamificando | Desarrollado por elClaudiEons</p>
    <div class="bg-neutral-800 text-neutral-400 py-2 mt-0 text-center">
      <a href="#" class="mx-2 hover:text-white">Aviso Legal</a>
      <a href="#" class="mx-2 hover:text-white">Política de Privacidad</a>
      <a href="#" class="mx-2 hover:text-white">Política de Cookies</a>
    </div>
  </footer>
</template>
