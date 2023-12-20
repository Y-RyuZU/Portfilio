<script setup lang="ts">
import { VAvatar, VCol } from "vuetify/components";
import { ref, onMounted, computed } from 'vue';
import type { Ref } from "vue";

import diamond from "@/assets/images/minecraft/item/diamond.png"
import gold_ingot from "@/assets/images/minecraft/item/gold_ingot.png"
import iron_ingot from "@/assets/images/minecraft/item/iron_ingot.png"
import coal from "@/assets/images/minecraft/item/coal.png"

interface Work {
    image: string;
    new: boolean;
    description: string;
}

const works = ref(new Array<Work>());
const worksPerRow = ref(3);

onMounted(() => {
    works.value.push({
        image: diamond,
        new: true,
        description: "ダイヤモンドの説明"
    });
    works.value.push({
        image: gold_ingot,
        new: false,
        description: "ゴールドインゴットの説明"
    });
    works.value.push({
        image: iron_ingot,
        new: false,
        description: "アイアンインゴットの説明"
    });
    works.value.push({
        image: coal,
        new: false,
        description: "石炭の説明"
    });
});

</script>

<template>
    <v-container fluid class="d-flex flex-column justify-center align-center">
        <div class="h-full w-full d-flex justify-space-between align-center">
            <v-icon size="x-large" icon="mdi-chevron-left" class="ml-4" />
            <v-responsive width="80vw">
                <v-data-iterator :items="works" :items-per-page="worksPerRow" :show-arrows="false" class="ma-8">
                    <template v-slot:default="{ items }">
                        <v-row>
                            <v-col v-for="(work, i) in items" :key="i" cols="12" sm="6" md="4">
                                <v-card elevation="12" rounded="xl" :image="work.raw.image"
                                    class="pixelated aspect-h-9 aspect-w-16">
                                    <v-card-title class="hiragino">
                                        <div class="d-flex">
                                            <v-badge v-if="work.raw.new" color="red" content="New" inline />{{
                                                work.raw.description }}
                                        </div>
                                    </v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    </template>
                </v-data-iterator>
            </v-responsive>
            <v-icon size="x-large" icon="mdi-chevron-right" class="mr-4" />
        </div>
    </v-container>
</template>

<style scoped lang="scss"></style>