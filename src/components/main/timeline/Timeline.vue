<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import diamond from "@/assets/images/minecraft/item/diamond.png"

interface Timeline {
    time: string;
    imagePath: string | null;
    title: string;
    color: string;
}

const timelines = ref(new Array<Timeline>());

onMounted(() => {
    timelines.value.push({ time: "2021/10/10", imagePath: diamond, title: "ポートフォリオを公開しました。", color: "primary" });
    timelines.value.push({ time: "2021/10/11", imagePath: null, title: "ダミー", color: "primary" });
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

const timeDifferences = computed(() => {
    const totalDifference = new Date(timelines.value[timelines.value.length - 1].time).getTime() - new Date(timelines.value[0].time).getTime();
    const differences = timelines.value.map((current, index) => {
        if (index === timelines.value.length - 1) return 0;
        const next = timelines.value[index + 1];
        const difference = new Date(next.time).getTime() - new Date(current.time).getTime();
        console.log(difference / totalDifference);
        return difference / totalDifference;
    });
    return differences;
});

</script>

<template>
    <v-row>
        <v-col cols="0" md="2">

        </v-col>
        <v-col class="d-flex">
            <v-timeline side="end" align="start">
                <v-timeline-item v-for="(timeline, index) in timelines" :key="timeline.time" :height="`${timeDifferences[index] * 75}vh`" min-height="25px">
                    <template v-slot:opposite>
                        <div class="open">{{ timeline.time }}</div>
                    </template>
                    <div class="d-flex align-center">
                        <div class="mr-4">
                            <v-img :src="timeline.imagePath" aspect-ratio="1" height="2rem" width="2rem" contain
                                class="pixelated" v-if="timeline.imagePath != null" />
                        </div>
                        <div class="hiragino">{{ timeline.title }}</div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss"></style>