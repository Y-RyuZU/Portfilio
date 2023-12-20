<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import background1 from '@/assets/images/backgrounds/background1.png';
import background2 from '@/assets/images/backgrounds/background2.png';
import background3 from '@/assets/images/backgrounds/background3.png';
import HotbarMenu from '@/components/history/HotbarMenu.vue';

const hovered = ref<boolean[]>([]);

// Images for the scrolling background
const images = [
    background2,
    background3,
    background2,
    background3,
    background2,
    background3,
    // ... other images
];

// Dummy data for the timeline
const timelineItems = [
    { time: '10:00', icon: 'mdi-ab-testing', text: 'Event 1' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-account', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-account-box', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-account-circle', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-account-multiple', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    { time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2' },
    // ... other events
];

// Reference to the game container for controlling scroll
const gameContainer = ref<HTMLElement | null>(null);

// Function to control horizontal scrolling
const onScroll = (event: WheelEvent) => {
    if (gameContainer.value) {
        const container = gameContainer.value;
        container.scrollLeft += event.deltaY; // Scroll horizontally instead of vertically
    }
};

// Set up game dimensions or any other configuration needed after mounting
onMounted(() => {
    // Setup code if needed for styling, resizing, etc.
});
</script>

<template>
    <div class="d-flex align-center relative overflow-hidden whitespace-nowrap hide-scrollbar" ref="gameContainer"
        @wheel.prevent="onScroll">
        <!-- Background images concatenated horizontally -->
        <!-- <div class="background-images">
            <img v-for="(img, index) in images" :key="index" :src="img" alt="background"
                class="h-screen" /> -->
        <!-- <div v-for="(img, index) in images" :key="index">
                <img  :src="img" alt="background"/>
            </div> -->
        <!-- </div> -->
        <div class="background-images overflow-visible flex flex-row" v-for="(img, index) in images" :key="index">
            <!-- <v-img :src="img" alt="background" height="100%" width="auto" cover /> -->
        </div>

        <v-timeline dense class="absolute w-full" direction="horizontal">
            <v-timeline-item v-for="(item, index) in timelineItems" :key="index" :icon="item.icon" width="500px"
                class="align-center">
                <template v-slot:icon>
                    <v-hover v-slot="{ isHovering }">
                        <v-icon :color="isHovering ? 'primary' : 'grey'">{{ item.icon }}</v-icon>
                    </v-hover>
                </template>
                <v-card v-show="">
                    <v-card-title>{{ item.time }}</v-card-title>
                    <v-card-text>{{ item.text }}</v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<style scoped lang="scss">
.game-container {
    position: relative;
    white-space: nowrap;
}

.background-images {
    height: 100vh;
    width: auto;
    display: flex;
    overflow-x: visible;
}

.v-timeline {
    top: 70vh;
}
</style>

