<script setup lang="ts">
import NamePlate from "@/assets/images/name_plate.svg";
import {VAvatar, VCol} from "vuetify/components";
import {ref, onMounted, Ref, computed} from 'vue';

// 型定義を追加
const column: Ref<VCol> = ref();

const size = computed(() => {
    if (!column.value) return;
    const { width, height } = column.value.$el.getBoundingClientRect();
    return Math.min(width, height);
});
</script>

<template>
    <v-row no-gutters style="height: 100%">
        <v-col cols="2"/>
        <v-col cols="4" class="d-flex justify-center" ref="column">
            <v-avatar color="surface-variant" :size="size"/>
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
                    <div class="d-flex justify-start text-start ml-0 mb-4">
                        <v-row>
                            <v-col cols="8">
                                <v-img class="d-flex justify-start text-start ml-0 mb-4" height="15rem" :src="NamePlate"/>
                            </v-col>
                            <v-col cols="auto"/>
                        </v-row>
                    </div>
                    <div class="text-h4">または「RyuZU」</div>
                    <div class="my-4" style="width: 80%; border-bottom: 2px solid black;"></div>
                    <div class="text-body-2">あなたが書きたいテキスト</div>
                    <div class="text-body-2">さらにテキスト</div>
                    <div class="text-body-2">最後のテキスト</div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
</style>