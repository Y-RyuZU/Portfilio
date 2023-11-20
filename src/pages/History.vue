<template>
    <div
        class="game-container d-flex align-center"
        ref="gameContainer"
        @wheel.prevent="onScroll"
    >
        <!-- Background images concatenated horizontally -->
        <div class="background-images">
            <img v-for="(img, index) in images" :key="index" :src="img" alt="background"/>
        </div>

        <!-- Timeline component -->
        <v-timeline dense class="timeline" direction="horizontal">
            <v-timeline-item v-for="(item, index) in timelineItems" :key="index" :icon="item.icon" width="500px">
                <template v-slot:opposite>
                    <span>{{ item.time }}</span>
                </template>
                <div>{{ item.text }}</div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
// import background1 from '@/assets/images/backgrounds/background1.png';
import background2 from '@/assets/images/backgrounds/background2.png';
import background3 from '@/assets/images/backgrounds/background3.png';

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
    {time: '10:00', icon: 'mdi-clock-time-four-outline', text: 'Event 1'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
    {time: '12:00', icon: 'mdi-clock-time-four-outline', text: 'Event 2'},
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

<style scoped>
.game-container {
    position: relative;
    overflow: hidden; /* Hide scrollbar */
    white-space: nowrap; /* Keep images in one line */
}

.background-images img {
    height: 100vh; /* Full viewport height */
    width: auto; /* Maintain aspect ratio */
    display: inline; /* Line up horizontally */
}

.timeline {
    position: absolute;
    top: 0;
    width: 100%; /* Full width to overlay on the images */
}
</style>
