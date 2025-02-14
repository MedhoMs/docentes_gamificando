<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue';

const team = [
    {
        "name": "Francisco Martínez",
        "job": "Gestor de directos",
        "description": "Siempre es buen momento para aprender y compartir. si puedo ayudar allí me tendréis.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Francisco1.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Francis Martínez",
        "job": "Villamates",
        "description": "Si la vida son la suma de nuestras experiencias, mejor que sean jugando.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/09/Francis-Villamates.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Bernardo Jarreño",
        "job": "Proyectos intercentros",
        "description": "Somos un grupo de personas con ganas de innovar y no parar de participar en aquellos proyectos en los que la gamificación es el eje.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Bernardo.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Alfons Nàcher",
        "job": "Coordinador DG, Web",
        "description": "Todo lo que gamifiques se aprenderá mejor y perdurará en la memoria como un recuerdo genuino.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Alfons-Nacher.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Dacil Gonzalez",
        "job": "Diseñadora",
        "description": "Despertar la pasión por aprender a través de la motivación y la diversión.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Dacil-Gonzalez.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Rafa",
        "job": "Sandbox educación",
        "description": "Sueño con hacer la vida de los docentes y estudiantes más emocionante.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/09/rafa.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Rosy Hernández",
        "job": "Soporte Facebook",
        "description": "La gamificación convierte la rutina en algo memorable, motivando al alumnado a “querer aprender”, para ser los verdaderos protagonistas de su aprendizaje",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/09/Rosy.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Santi Toro",
        "job": "Editor de Vídeos - Spielberg",
        "description": "Mira despacio por tu objetivo, enfoca a tus alumnos y revela la foto para su felicidad",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/09/plantilla-team-member-1.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Sara Ovejero",
        "job": "Coordinadora directos de DG",
        "description": "Si puedes imaginarlo puedes resolverlo. ¿Te animas a crear un mundo gamificado a tu alrededor?",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Sara-Ovejero1.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Sara Navarro",
        "job": "Soporte logístico",
        "description": "",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Sara-Navarro.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Iñaki Ibargoyen",
        "job": "Coordinador de DG",
        "description": "La colaboración entre docentes nos lleva a un nivel superior donde el trabajo cunde más y lo hacemos más a gusto.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Inaki.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Aitor",
        "job": "Experto en Redes, Twitch",
        "description": "La gamificación es como el Ketchup, pega con todo.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Aitor1.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Jujo",
        "job": "Alianza Tierra-Koi",
        "description": "La gamificación convierte la rutina en algo memorable, motivando al alumnado a “querer aprender”, para ser los verdaderos protagonistas de su aprendizaje",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Jujo.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Vicente Palomo",
        "job": "Experto RPG-Maker",
        "description": "Gamificación como nexo de unión entre diferentes metodologías; motivación, inclusión y cooperación.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/08/Vicente-Palomo1.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Julián Yepes",
        "job": "Soporte Instagram",
        "description": "Despertar la pasión por aprender a través de la motivación y la diversión.",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/09/julian.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    },
    {
        "name": "Juan Sáez",
        "job": "Diseñador Tecnopedagógico",
        "description": "Divertirse aprendiendo es la base de mi vida",
        "image": "https://i0.wp.com/docentesgamificando.com/wp-content/uploads/2021/09/Juan.jpg?fit=340%2C340&ssl=1",
        "links": {
            "instagram": "#",
            "twitter": "#",
            "facebook": "#",
            "web": "#",
            "email": "#"
        }
    }
]
</script>

<template>
    <DefaultLayout>
        <div class="bg-neutral-800 pb-8 pt-5">
            <div class="max-w-7xl mx-auto bg-neutral-800">
                <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div v-for="person in team" :key="person.name" class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex justify-center">
                            <img class="border-solid border-orange-500 border-4 aspect-square" :src="person.image">
                        </div>
                        <section class="flex flex-col text-white justify-between p-2">
                            <div class="text-center">
                                <div class="font-bold">
                                    {{ person.name }}
                                </div>
                                
                                <div>
                                    {{ person.job }}
                                </div>
                            </div>
                            
                            <div class="text-sm pl-3 mt-3 md:mt-3 md:mb-3 text-gray-400">
                                {{ person.description }}
                            </div>
                        
                            <div class="flex justify-center flex-wrap gap-2 mt-3 md:mt-0">
                                <a :href="person.links.twitter" class="rounded-full bg-orange-500 px-1 py-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>                                
                                </a>
                                <a :href="person.links.twitter" class="rounded-full bg-orange-500 px-1 py-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                </a>
                                <a :href="person.links.twitter" class="rounded-full bg-orange-500 px-1 py-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                                </a>
                                <a :href="person.links.twitter" class="rounded-full bg-orange-500 px-1 py-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world-www"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" /><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" /><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" /><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg>
                                </a>
                                <a :href="person.links.twitter" class="rounded-full bg-orange-500 px-1 py-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                                </a>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    </DefaultLayout>
</template>