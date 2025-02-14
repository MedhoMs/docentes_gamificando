<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import SocialMediaLayout from './layouts/SocialMediaLayout.vue';

const interviews
    = ['/img/interviews/interview8.webp',
    '/img/interviews/interview4.webp',
    '/img/interviews/interview2.webp'
    ];
</script>

<template>
    <DefaultLayout>
        <h1 class="text-center text-4xl bg-[#11375f] p-6 text-white font-bold">GAMIFICANDO CON SUPERHEROES UTILIZANDO GENIALLY Y MYCLASSGAME</h1>
        <div>
            <div class="bg-gradient-to-b from-[#29bfff] to-white">
                <h3 class="max-w-4xl mx-auto font-semibold py-5 text-left px-4 lg:px-0">Hoy tengo el placer y el honor de recibir a David Ruiz conocido en redes como @Dondavidruiz. Un maestro como
                    pocos, descendiente de las últimas generaciones de alumnos y alumnas que fuimos a la EGB y un apasionado de su
                    familia, sus amigos y su profesión. En la actualidad es tutor de primaria en el CEIP Kantica de Arroyo de la
                    Encomienda en Valladolid y formador de formadores, rompiendo moldes y revolucionando la forma de enseñar de una
                    manera apasionada y con la gamificación como estandarte. Si quieres ver cómo #Gamificar hasta el mínimo detalle
                    usando #Genially como página web y #MyClassGame como gestor de seguimiento del alumnado, no puedes perderte
                    este programa. Alfons se convierte en alumno de David para enseñarnos todos los recovecos de esta magnifica
                    escuela de superhéroes Kantic@2.
                </h3>

                <!--PONENTES-->
                <h3 class="font-semibold max-w-4xl mx-auto px-4 lg:px-0">Ponentes:</h3>
                <div class="flex flex-col max-w-4xl mx-auto px-4 lg:px-0">
                    <div class="flex gap-5">
                        <h4 class="flex items-center">Alfons Nàcher Martínez</h4>
                        <div class="flex gap-2 mt-3 md:mt-0">
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler text-white icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>                                
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler text-white icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler text-white icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler text-white icons-tabler-outline icon-tabler-world-www"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" /><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" /><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" /><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg>
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler text-white icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex gap-7 mt-2 mb-2">
                        <h4 class="flex items-center">Juan Torres Mancheño</h4>
                        <div class="flex gap-2 mt-3 md:mt-0">
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline text-white icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>                                
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline text-white icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline text-white icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline text-white icon-tabler-world-www"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" /><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" /><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" /><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg>
                            </a>
                            <a href="" class="border rounded-full bg-blue-700 px-1 py-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled text-white icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <!--PONENTES-->
            </div>

            <hr><hr>

            <div class="bg-gradient-to-b from-white via-[#29bfff] to-[#a3a3a3]">
                <div class="max-w-4xl mx-auto">
                    <iframe width="905" height="536" class="hidden md:block" src="https://www.youtube.com/embed/TARRGdNJdUQ?si=lMtG5ackUxlArVhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="flex justify-center">
                        <iframe width="380" height="336" class="md:hidden" src="https://www.youtube.com/embed/TARRGdNJdUQ?si=lMtG5ackUxlArVhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <h3 class="max-w-4xl mx-auto mt-2 mb-10 flex justify-center md:">SUMMARY</h3>

                <div class="grid grid-cols-3 max-w-3xl mx-auto gap-4 mb-7">
                    <div v-for="interview in interviews">
                        <router-link to="/interviews">
                            <img :src="interview" class="rounded-lg">
                        </router-link>
                    </div>
                </div>
                <SocialMediaLayout></SocialMediaLayout>
            </div>
        </div>
    </DefaultLayout>
</template>