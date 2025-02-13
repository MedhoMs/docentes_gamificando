<script setup>
const model = defineModel()

</script>
<template>
    <router-link class="block px-4 py-2 hover:bg-[#f79502] hover:text-white hover:rounded-md">
        <slot></slot>
    </router-link>
</template>