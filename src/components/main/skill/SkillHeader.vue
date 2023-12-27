<script setup lang="ts">
import iron_ingot from "@/assets/images/minecraft/item/iron_ingot.png";
import { ref, onMounted } from 'vue';
import dimaond from "@/assets/images/minecraft/item/diamond.png"
import gold_ingot from "@/assets/images/minecraft/item/gold_ingot.png"
import coal from "@/assets/images/minecraft/item/coal.png"

</script>

<template>
    <v-row no-gutters>
        <v-col cols="2"/>
        <v-col cols="4" class="d-flex align-center">
            <div class="d-flex align-center">
                <v-img :src="iron_ingot" aspect-ratio="1" height="10rem" width="10rem" contain class="pixelated mr-8"/>
                <div class="kufam">SKILL</div>
            </div>
        </v-col>
        <v-col/>
    </v-row>
</template>

<style scoped lang="scss">

</style>