<!--<script setup lang="ts">-->
<!--import {ref, watch} from 'vue';-->
<!--import MidiParser from "midi-parser-js";-->

<!--const file = ref<File[] | null>(null);-->
<!--watch(file, async (newFiles) => {-->
<!--    const buffer = await newFiles[0]?.arrayBuffer();-->
<!--    const byteArray = new Uint8Array(buffer)-->

<!--    const midi = MidiParser.parse(byteArray)-->
<!--    midi.track.forEach((track) => {-->
<!--        console.log(track)-->
<!--    })-->

<!--    console.log(midi)-->
<!--})-->
<!--</script>-->


<!--<template>-->
<!--    <v-file-input v-model="file">-->

<!--    </v-file-input>-->
<!--</template>-->

<!--<style scoped lang="scss">-->

<!--</style>-->