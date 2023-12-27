<script setup lang="ts">
import HotbarMenu from './components/header/HotbarMenu.vue';
</script>

<template>
    <v-app>
        <div class="fixed top-0 right-0 z-50">
            <HotbarMenu />
        </div>
        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>

<style lang="scss">
.kufam {
    color: #404040;
    font-family: 'Kufam', sans-serif;
    font-size: 6rem;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 1rem;
}

.hiragino {
    color: #2C2C2C;
    font-family: 'Hiragino Sans', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.2rem;
}

.open {
    color: #000;
    font-family: 'Open Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.2rem;

}
</style>
