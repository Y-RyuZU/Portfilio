<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

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
    skills.value.push({
        name: "HTML",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond
    });
    skills.value.push({
        name: "CSS",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot
    });
    skills.value.push({
        name: "JavaScript",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot
    });
    skills.value.push({
        name: "TypeScript",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal
    });
    skills.value.push({
        name: "Java",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond
    });
    skills.value.push({
        name: "Kotlin",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot
    });
    skills.value.push({
        name: "Python",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot
    });
    skills.value.push({
        name: "C",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal
    });
    skills.value.push({
        name: "C++",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond
    });
    skills.value.push({
        name: "C#",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot
    });
    skills.value.push({
        name: "PHP",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot
    });
    skills.value.push({
        name: "Ruby",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal
    });
    skills.value.push({
        name: "Go",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond
    });
    skills.value.push({
        name: "Rust",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot
    });
    skills.value.push({
        name: "Swift",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot
    });
    skills.value.push({
        name: "Dart",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal
    });
    skills.value.push({
        name: "SQL",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond
    });
})

const showAll = ref(false);
</script>

<template>
    <v-container fluid class="d-flex flex-column justify-center align-center">
        <v-responsive width="60vw" :max-height="!showAll ? undefined : 512">
            <v-row class="pa-4">
                <v-col v-for="skill in skills" :key="skill.name" cols="12" sm="6" md="4" justify="start">
                    <v-card class="mb-4" elevation="12" rounded="xl">
                        <v-card-item>
                            <div class="d-flex align-center">
                                <v-icon size="large" class="mr-2">
                                    <v-img :src="skill.imagePath" aspect-ratio="1" contain class="pixelated" />
                                </v-icon>
                                <v-card-title class="hiragino">{{ skill.name }}</v-card-title>
                            </div>
                        </v-card-item>
                        <v-card-text>
                            <v-row>
                                <v-col cols="4" class="d-flex justify-center align-center">
                                    <v-img :src="skill.imagePath" aspect-ratio="1" height="6rem" width="6rem" contain
                                        class="pixelated" />
                                </v-col>
                                <v-col cols="8">
                                    <div class="text-body-6">{{ skill.level }}</div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <!-- </v-responsive> -->
                </v-col>
            </v-row>
        </v-responsive>
        <div class="fade-out" />
        <v-btn>
            <v-icon icon="mdi-chevron-up" v-if="showAll" @click="showAll = false" />
            <v-icon icon="mdi-chevron-down" v-else @click="showAll = true" />
        </v-btn>
    </v-container>
</template>

<style scoped lang="scss"></style>