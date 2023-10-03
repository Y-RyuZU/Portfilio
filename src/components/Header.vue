<script setup lang="ts">

</script>

<template>
    <v-app-bar app>
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>My App</v-app-bar-title>

        <template v-slot:append>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>

</style>