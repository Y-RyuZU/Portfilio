<script setup lang="ts">
import iron_ingot from "@/assets/images/minecraft/item/iron_ingot.png";
import { ref, onMounted } from 'vue';
import dimaond from "@/assets/images/minecraft/item/diamond.png"
import gold_ingot from "@/assets/images/minecraft/item/gold_ingot.png"
// import iron_ingot from "@/assets/images/minecraft/item/iron_ingot.png"
import coal from "@/assets/images/minecraft/item/coal.png"

const skillLevel = ref(new Map<string, string>());
onMounted(async () => {
    skillLevel.value.set("お任せください", dimaond);
    skillLevel.value.set("得意っす", gold_ingot);
    skillLevel.value.set("普通", iron_ingot);
    skillLevel.value.set("触ったことある", coal);
});

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
        <v-col cols="2"/>
        <v-col>
            <v-sheet height="100%" class="text-left pa-4" rounded color="grey-lighten-4">
                <div v-for="[key, value] in skillLevel" class="d-flex align-center">
                    <div class="mr-2">
                        <v-img :src="value" aspect-ratio="1" height="2rem" width="2rem" contain/>
                    </div>
                    <div class="hiragino">...{{ key }}</div>
                </div>
            </v-sheet>
        </v-col>
        <v-col/>
    </v-row>
</template>

<style scoped lang="scss">

</style>