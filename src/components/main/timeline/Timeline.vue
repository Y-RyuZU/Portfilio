<script setup lang="ts">
import {onMounted, ref} from 'vue';
import diamond from "@/assets/images/minecraft/item/diamond.png"

interface Timeline {
    time: string;
    imagePath: string | null;
    title: string;
    color: string ;
}

const timelines = ref(new Array<Timeline>());

onMounted(() => {
    timelines.value.push({time: "2021/10/10", imagePath: diamond, title: "ポートフォリオを公開しました。", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
    timelines.value.push({time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary"});
})

</script>

<template>
    <div class="d-flex justify-start">
        <v-timeline align="start">
            <v-timeline-item v-for="timeline in timelines" :key="timeline.time">
                <template v-slot:opposite>
                    {{ timeline.time }}
                </template>
                <div>
                    <div>
                        <v-img :src="timeline.imagePath" aspect-ratio="1" height="2rem" width="2rem" contain class="pixelated" v-if="timeline.imagePath != null"/>
                    </div>
                    <div class="text-h6">{{ timeline.title }}</div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<style scoped lang="scss"></style>