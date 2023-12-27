<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import background from '@/assets/images/backgrounds/background.png';
import dirt from '@/assets/images/minecraft/block/dirt.png';
import grass from '@/assets/images/minecraft/block/grass_block_side.png';
import stone from '@/assets/images/minecraft/block/stone.png';
import coal_ore from '@/assets/images/minecraft/block/coal_ore.png';
import HotbarMenu from '@/components/header/HotbarMenu.vue';
import {VHover} from "vuetify/components";

const hovered = ref<boolean[]>([]);

// Images for the scrolling background
const images = [
    background,
    background,
    background,
    background,
    background,
    background,
    // ... other images
];

// Dummy data for the timeline
const timelineItems = [
    {time: '10:00', icon: 'mdi-ab-testing', text: 'Event 1'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-account', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-account-box', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-account-circle', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-account-multiple', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    // ... other events
];

const ground = computed(() => {
    const groundData: number[][] = [];
    for (let i = 0; i < 8; i++) {
        let row: number[] = [];
        for (let j = 0; j < 33; j++)
            row.push(Math.floor(Math.random() * 3) + 2);
        groundData.push(row);
    }
    return groundData;
});


const getBlock = (block: number): string => {
    const blocks = [grass, dirt, stone, coal_ore];
    return block === 0 ? "" : blocks[block - 1];
}

const gameContainer = ref<HTMLElement | null>(null);

const onScroll = (event: WheelEvent) => {
    if (gameContainer.value) {
        const container = gameContainer.value;
        container.scrollLeft += event.deltaY;
    }
};

const hovering = ref(false);

// Set up game dimensions or any other configuration needed after mounting
onMounted(() => {
    // Setup code if needed for styling, resizing, etc.
});
</script>

<template>
    <div class="d-flex relative overflow-hidden whitespace-nowrap hide-scrollbar w-full h-full"
         ref="gameContainer"
         @wheel.prevent="onScroll">
        <!-- Background images concatenated horizontally -->
        <div class="d-flex h-screen visible h-[100vh] w-auto">
            <img v-for="(img, index) in images" :key="index" :src="img" alt="background" class="h-screen"/>
            <!-- <div v-for="(img, index) in images" :key="index">
                <img :src="img" alt="background" />
            </div> -->
        </div>

        <div class="d-flex flex-col align-end absolute bottom-0 z-1">
            <div v-for="(blocks, index) in ground" :key="index" class="d-flex">
                <div v-for="block in blocks" :key="block" class="d-flex h-16 w-16">
                    <v-img :src="getBlock(block)" alt="block" class="pixelated"/>
                </div>
            </div>
        </div>

        <!-- <div class="background-images overflow-visible flex flex-row" v-for="(img, index) in images" :key="index">
             <v-img :src="img" alt="background" height="100%" width="auto" cover />
        </div> -->

        <div class="d-flex align-end h-[70vh] absolute w-full">
            <v-timeline dense direction="horizontal" side="start" justify="start" line-color="black" line-thickness="8px">
                <v-timeline-item v-for="(item, index) in timelineItems" :key="index" width="500px"
                                 class="align-center">
                    <template v-slot:icon>
                        <v-hover v-slot="{ props }" v-model="hovering">
                            <v-icon v-bind="props" :color="hovering ? 'primary' : 'grey'">{{ item.icon }}</v-icon>
                        </v-hover>
                    </template>
                    <v-card v-show="hovering">
                        <v-card-title>{{ item.time }}</v-card-title>
                        <v-card-text>{{ item.text }}</v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>

