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
        <div class="max-w-7xl mx-auto bg-neutral-800">
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div v-for="person in team" :key="person.name" class="border-2 border-black p-7 grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <img :src="person.image">
                    </div>
                    <section class="flex flex-col text-white">
                        <div>
                            {{ person.name }}
                            <div>
                                {{ person.job }}
                            </div>
                        </div>
                        
                        <div>
                            {{ person.description }}
                        </div>

                        <div>
                            <a :href="person.links.twitter" class="border rounded-full bg-orange-500 inline-block p-1">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="text-white h-4 w-4 icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /></svg>
                            </a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        
    </DefaultLayout>
</template>