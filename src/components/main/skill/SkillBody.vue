<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import spyglass from "@/assets/images/minecraft/item/spyglass.png"

interface Skill {
    name: string;
    level: string;
    imagePath: string;
    category: "Language" | "Framework" | "Library" | "Database" | "Services" | "Tools" | "Other";
    field: "Backend" | "Frontend" | "Mobile" | "Desktop" | "On-premises" | "Cloud";
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
        imagePath: diamond,
        category: "Language",
        field: "Frontend"
    });
    skills.value.push({
        name: "CSS",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot,
        category: "Language",
        field: "Frontend"
    });
    skills.value.push({
        name: "JavaScript",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot,
        category: "Language",
        field: "Frontend",
    });
    skills.value.push({
        name: "TypeScript",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal,
        category: "Language",
        field: "Frontend",
    });
    skills.value.push({
        name: "Java",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond,
        category: "Language",
        field: "Backend",
    });
    skills.value.push({
        name: "Kotlin",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot,
        category: "Language",
        field: "Backend",
    });
    skills.value.push({
        name: "Python",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot,
        category: "Language",
        field: "Backend"
    });
    skills.value.push({
        name: "C",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal,
        category: "Language",
        field: "Backend"
    });
    skills.value.push({
        name: "C++",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond,
        category: "Language",
        field: "Backend"
    });
    skills.value.push({
        name: "C#",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot,
        category: "Language",
        field: "Backend"
    });
    skills.value.push({
        name: "Go",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond,
        category: "Language",
        field: "Backend"
    });
    skills.value.push({
        name: "Rust",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: gold_ingot,
        category: "Language",
        field: "Backend"
    });
    skills.value.push({
        name: "Swift",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: iron_ingot,
        category: "Language",
        field: "Mobile"
    });
    skills.value.push({
        name: "Dart",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: coal,
        category: "Language",
        field: "Mobile"
    });
    skills.value.push({
        name: "SQL",
        level: "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明",
        imagePath: diamond,
        category: "Language",
        field: "Database"
    });
})

const showAll = ref(false);
const categories = ref(["Language", "Framework", "Library", "Database", "Services", "Tools", "Other"]);
const fields = ref(["Backend", "Frontend", "Mobile", "Desktop", "On-premises", "Cloud"])
const selectedCategories = ref<string[]>([]);
const selectedFields = ref<string[]>([]);

const removeCategory = (index: number) => {
    selectedCategories.value.splice(index, 1);
}
const removeField = (index: number) => {
    selectedFields.value.splice(index, 1);
}
</script>

<template>
    <v-container class="d-flex flex-column w-[75vw]">
        <v-responsive class="ml-8">
            <div class="mb-8">
                <v-dialog>
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props">
                            <template v-slot:prepend>
                                <v-img :src="spyglass" aspect-ratio="1" height="2rem" width="2rem" contain class="pixelated"/>
                            </template>
                            View Skills
                        </v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-card-title class="text-h5">Skills Ranks</v-card-title>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
            <v-row>
                <v-col cols="6">
                    <v-combobox
                            v-model="selectedCategories"
                            :items="categories"
                            chips
                            clearable
                            label="Your favorite hobbies"
                            multiple
                            variant="solo"
                    >
                        <template v-slot:selection="{ item, index }">
                            <v-chip
                                    closable
                                    @click:close="removeCategory(index)"
                            >
                                <strong>{{ item }}</strong>&nbsp;
                                <span>(interest)</span>
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
                <v-col cols="6">
                    <v-combobox
                            v-model="selectedFields"
                            :items="fields"
                            chips
                            clearable
                            label="Your favorite hobbies"
                            multiple
                            variant="solo"
                    >
                        <template v-slot:selection="{ item, index }">
                            <v-chip
                                    closable
                                    @click:close="removeField(index)"
                            >
                                <strong>{{ item }}</strong>&nbsp;
                                <span>(interest)</span>
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
            </v-row>
        </v-responsive>
        <v-responsive :max-height="!showAll ? undefined : 512">
            <v-row class="pa-4">
                <v-col v-for="skill in skills" :key="skill.name" cols="12" sm="6" md="4" justify="start">
                    <v-card class="mb-4" elevation="12" rounded="xl">
                        <v-card-item>
                            <div class="d-flex align-center">
                                <v-icon size="large" class="mr-2">
                                    <v-img :src="skill.imagePath" aspect-ratio="1" contain class="pixelated"/>
                                </v-icon>
                                <v-card-title class="hiragino">{{ skill.name }}</v-card-title>
                            </div>
                        </v-card-item>
                        <v-card-text>
                            <v-row>
                                <v-col cols="4" class="d-flex justify-center align-center">
                                    <v-img :src="skill.imagePath" aspect-ratio="1" height="6rem" width="6rem" contain
                                           class="pixelated"/>
                                </v-col>
                                <v-col cols="8">
                                    <div class="text-body-6">{{ skill.level }}</div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
        <div class="fade-out"/>
        <v-btn>
            <v-icon icon="mdi-chevron-up" v-if="showAll" @click="showAll = false"/>
            <v-icon icon="mdi-chevron-down" v-else @click="showAll = true"/>
        </v-btn>
    </v-container>
</template>

<style scoped lang="scss"></style>