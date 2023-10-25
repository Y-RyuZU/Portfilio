<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';

interface Skill {
    name: string;
    level: string;
    imagePath: string;
}

import diamond from "@/assets/images/minecraft/item/diamond.png"
import gold_ingot from "@/assets/images/minecraft/item/gold_ingot.png"
import iron_ingot from "@/assets/images/minecraft/item/iron_ingot.png"
import coal from "@/assets/images/minecraft/item/coal.png"

const skills = ref(new Array<Skill>());
onMounted(() => {
    skills.value.push({name: "HTML", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: diamond});
    skills.value.push({name: "CSS", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: gold_ingot});
    skills.value.push({name: "JavaScript", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: iron_ingot});
    skills.value.push({name: "TypeScript", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: coal});
    skills.value.push({name: "Java", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: diamond});
    skills.value.push({name: "Kotlin", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: gold_ingot});
    skills.value.push({name: "Python", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: iron_ingot});
    skills.value.push({name: "C", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: coal});
    skills.value.push({name: "C++", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: diamond});
    skills.value.push({name: "C#", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: gold_ingot});
    skills.value.push({name: "PHP", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: iron_ingot});
    skills.value.push({name: "Ruby", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: coal});
    skills.value.push({name: "Go", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: diamond});
    skills.value.push({name: "Rust", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: gold_ingot});
    skills.value.push({name: "Swift", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: iron_ingot});
    skills.value.push({name: "Dart", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: coal});
    skills.value.push({name: "SQL", level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明", imagePath: diamond});
})

const doubleSkills = computed(() => {
    const pairs: Skill[][] = [];
    for (let i = 0; i < skills.value.length; i += 2) {
        pairs.push([skills.value[i], skills.value[i + 1]]);
    }
    return pairs;
})
</script>

<template>
    <v-container fluid class="d-flex justify-center">
        <v-sheet width="75vw">
            <v-slide-group class="pa-4">
                <v-slide-group-item v-for="pairs in doubleSkills" :key="pairs[0].name">
                    <div class="mx-8">
                        <v-sheet no-gutters v-for="(skill, index) in pairs" :key="index" class="d-flex flex-column my-6" width="25vw" elevation="12" rounded="xl">
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-center align-center">
                                    <v-img :src="skill.imagePath" aspect-ratio="1" height="6rem" width="6rem" contain class="pixelated"/>
                                </v-col>
                                <v-col cols="8">
                                    <div class="d-flex justify-start flex-row ma-4">
                                        <div class="mr-2">
                                            <v-img :src="skill.imagePath" aspect-ratio="1" height="2rem" width="2rem" contain class="pixelated"/>
                                        </div>
                                        <div class="hiragino">{{ skill.name }}</div>
                                    </div>
                                    <div class="text-body-6">{{ skill.level }}</div>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </div>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>

<style scoped lang="scss">
</style>