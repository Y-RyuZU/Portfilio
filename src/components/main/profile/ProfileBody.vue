<script setup lang="ts">
import NamePlate from "@/assets/images/name_plate.svg";
import {VAvatar, VCol} from "vuetify/components";
import {ref, onMounted, computed} from 'vue';
import type {Ref} from "vue";

// 型定義を追加
const column: Ref<VCol | null> = ref(null);

    const size = computed(() => {
    if (!column.value) return;
    const { width, height } = column.value.$el.getBoundingClientRect();

    // paddingとmarginを取得
    const style = window.getComputedStyle(column.value.$el);
    const paddingTop = parseFloat(style.margin);
    const paddingBottom = parseFloat(style.paddingBottom);

    // paddingとmarginを考慮に入れてサイズを計算
    const adjustedWidth = width + paddingTop;
    const adjustedHeight = height + paddingTop;

    console.log(height, width, parseFloat(style.margin), parseFloat(style.padding));

    return height;
});
</script>

<template>
    <v-container width="80vw">
        <v-row no-gutters>
        <v-col cols="6" class="d-flex justify-end align-center" ref="column">
            <!-- <div class="h-full"> -->
                <v-avatar class="mr-8" color="surface-variant" :size="size"/>
            <!-- </div> -->
        </v-col>
        <v-col cols="6">
            <v-row no-gutters align="center" justify="start" class="mb-4">
                <v-col class="px-1" cols="auto">
                    <v-icon size="large">mdi-close</v-icon>
                </v-col>
                <v-col class="px-1" cols="auto">
                    <v-icon size="large">mdi-heart</v-icon>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="text-left">
                    <div class="d-flex justify-start mb-8">
                        <v-img width="60%" :src="NamePlate"/>
                    </div>
                    <div class="text-h4 mb-4">または「RyuZU」</div>
                    <div class="text-body-2">あなたが書きたいテキスト</div>
                    <div class="text-body-2">さらにテキスト</div>
                    <div class="text-body-2">最後のテキスト</div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    </v-container>
</template>

<style scoped lang="scss">
</style>