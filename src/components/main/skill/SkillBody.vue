<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import spyglass from "@/assets/images/minecraft/item/spyglass.png"

type Category = "Language" | "Framework" | "Library" | "Database" | "Services" | "Tools" | "Other";
type Field = "Backend" | "Frontend" | "Mobile" | "Desktop" | "On-premises" | "Cloud";

interface Skill {
    name: string;
    level: string;
    imagePath: string;
    category: Category;
    field: Field;
}

import diamond from "@/assets/images/minecraft/item/diamond.png"
import gold_ingot from "@/assets/images/minecraft/item/gold_ingot.png"
import iron_ingot from "@/assets/images/minecraft/item/iron_ingot.png"
import coal from "@/assets/images/minecraft/item/coal.png"

const names = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "Kotlin",
    "Python",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Swift",
    "Dart",
    "SQL"
];
const level = "命令規則を用いたコーディングを行えます。このポートフォリオはBEMを……スキルの説明スキルの説明スキルの説明";
const images = [
    diamond,
    gold_ingot,
    iron_ingot,
    coal
];
const categories = ref<Array<Category>>(["Language", "Framework", "Library", "Database", "Services", "Tools", "Other"]);
const fields = ref<Array<Field>>(["Backend", "Frontend", "Mobile", "Desktop", "On-premises", "Cloud"])

const skills = ref(new Array<Skill>());
onMounted(() => {
    for (let i = 0; i < names.length; i++) {
        skills.value.push({
            name: names[i % names.length],
            level: level,
            imagePath: images[i % images.length],
            category: categories.value[i % categories.value.length],
            field: fields.value[i % fields.value.length]
        })
    }
})

const showAll = ref(false);
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
                            <div class="min-h-[100px] d-flex justify-start">
                                <div class="aspect-[1] w-full h-full">
                                    <v-img :src="skill.imagePath" contain class="pixelated"/>
                                </div>
                                <div class="text-body-6">{{ skill.level }}</div>
                            </div>
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