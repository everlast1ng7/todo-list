<script setup lang="ts">
    // import HeaderBlock from '@/components/HeaderBlock.vue';
    // import FooterBlock from '@/components/FooterBlock.vue';

    // import { useRoute } from 'vue-router';

    // const route = useRoute();
</script>

<template>
    <div class="app">
        <!-- <header-block :key="route.path"></header-block> -->
        <router-view></router-view>
        <!-- <footer-block></footer-block> -->
    </div>
</template>

<style lang="scss"></style>
