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
    <v-row no-gutter height="100%">
        <v-col />
        <v-col cols="10" class="d-flex justify-center pa-6" ref="column">
            <v-data-iterator :items="works" :items-per-page="worksPerRow" class="w-full">
                <template v-slot:default="{ items }">
                    <v-row>
                        <v-col v-for="(work, i) in items" :key="i" cols="12" sm="6" md="4">
                            <v-responsive class="pa-6" :aspect-ratio="16 / 9">
                                <div>
                                    <v-badge v-if="work.raw.new" color="red" content="New" location="top start" overlap
                                        class="h-full w-full">
                                        <v-card class="h-full w-full">
                                            <div class="d-flex justify-center">
                                                <v-img :src="work.raw.image" aspect-ratio="1" class="pixelated mb-8" />
                                            </div>
                                            <v-card-text class="hiragino">{{ work.raw.description }}</v-card-text>
                                        </v-card>
                                    </v-badge>
                                    <v-card v-else>
                                        <v-img :src="work.raw.image" aspect-ratio="1" class="pixelated mb-8" />
                                        <v-card-text class="hiragino">{{ work.raw.description }}</v-card-text>
                                    </v-card>
                                </div>
                            </v-responsive>
                        </v-col>
                    </v-row>
                </template>
            </v-data-iterator>
        </v-col>
        <v-col />
    </v-row>
</template>

<style scoped lang="scss"></style>