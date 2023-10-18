<script setup lang="ts">
import diamond from "@/assets/images/minecraft/item/diamond.png";
</script>

<template>
    <v-row no-gutters>
        <v-col cols="2"/>
        <v-col cols="4" class="d-flex align-center">
            <div class="d-flex justify-flex-start align-center">
                <v-img height="10rem" width="10rem" contain :src="diamond" aspect-ratio="1" class="pixelated mr-8"/>
                <h1 class="kufam">PROFILE</h1>
            </div>
        </v-col>
        <v-col cols="6"/>
    </v-row>
</template>

<style scoped lang="scss">

</style>