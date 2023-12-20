<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import diamond from "@/assets/images/minecraft/item/diamond.png"

interface Timeline {
    time: string;
    imagePath: string | null;
    title: string;
    color: string;
    tags?: string[];
}

const timelines = ref(new Array<Timeline>());

onMounted(() => {
    timelines.value.push({ time: "2021/10/10", imagePath: diamond, title: "ポートフォリオを公開しました。", color: "primary" });
    timelines.value.push({ time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary", tags: ["ダミー", "ダミー", "ダミー"] });
    timelines.value.push({ time: "2021/10/12", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2021/10/13", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2021/10/14", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2021/10/18", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2021/10/16", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2021/11/17", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2021/12/18", imagePath: null, title: "ダミー", color: "primary" });
    timelines.value.push({ time: "2022/01/19", imagePath: null, title: "ダミー", color: "primary" });

    timelines.value.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
})

</script>

<template>
    <v-responsive width="80vw">
        <v-timeline side="end" align="start" class="w-full">
            <v-timeline-item v-for="timeline in timelines" :key="timeline.time" min-height="100px" width="100%">
                <template v-slot:opposite>
                    <div class="open">{{ timeline.time }}</div>
                </template>
                <v-card height="100%" elevation="6" rounded="lg">
                    <div class="d-flex align-start flex-no-wrap justify-space-between">
                        <v-card-item>
                            <div class="d-flex align-center">
                                <v-card-title class="hiragino">{{ timeline.title }}</v-card-title>
                                <v-chip-group>
                                    <v-chip v-for="tag in timeline.tags" :key="tag" class="ma-1" color="primary">
                                        {{ tag }}
                                    </v-chip>
                                </v-chip-group>
                            </div>
                            <v-card-text>いろんなことが書かれてるYO</v-card-text>
                        </v-card-item>

                        <v-card-item>
                            <!-- <v-img :src="timeline.imagePath" aspect-ratio="1" height="2rem" width="2rem" contain
                                class="pixelated" v-if="timeline.imagePath != null" /> -->
                            <v-img class="bg-white" width="300" :aspect-ratio="1"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover></v-img>
                        </v-card-item>
                    </div>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-responsive>
</template>

<style scoped lang="scss"></style>